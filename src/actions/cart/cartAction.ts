'use server';
import { cartItemType } from '@/types/RequestTypes';
import {
  commonResType,
  totalPriceAndDiscountDataType,
} from '@/types/ResponseTypes';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

// 장바구니 품목 확인
export async function fetchCartItemList(
  token: string
): Promise<cartItemType[]> {
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/wishList/view`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    next: { tags: ['checkCart, addCart, cartCount, deleteCart'] },
    cache: 'no-cache',
  });
  if (!res.ok) {
    return redirect('/error?message=Failed to fetch cart item list');
  }
  const data = await res.json();
  return data.result;
}

// 나의 상품 장바구니 품목의 총 가격, 총 할인액 조회
export async function fetchCartItemPrice(
  token: string
): Promise<totalPriceAndDiscountDataType> {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/totalPriceAndDiscount`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      next: { tags: ['checkCart, addCart, cartCount, deleteCart'] },
      cache: 'no-cache',
    }
  );
  if (!res.ok) {
    return redirect('/error?message=Failed to fetch cart item price');
  }
  const data = await res.json();
  return data.result;
}

// 장바구니 체크 업데이트
export const cartCheckUpdate = async (token: string, item: cartItemType) => {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/${item.productUuid}/check`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  revalidateTag('checkCart');
  return true;
};

// 장바구니 전체 체크 업데이트
export const cartCheckAllUpdate = async (token: string) => {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/checkAll`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  revalidateTag('checkCart');
};

// 장바구니 체크된 품목 삭제
export const deleteCartCheckedItemList = async (token: string) => {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/deleteChecked`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  revalidateTag('deleteCart');
};

// 장바구니 폼목 1개 삭제
export const deleteCartItem = async (token: string, productUuid: string) => {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/${productUuid}/deleteWishListItem`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  revalidateTag('deleteCart');
};

// 장바구니 전체 삭제
export const deleteAllCartItemList = async (
  token: string
): Promise<boolean> => {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/deleteAll`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );

  revalidateTag('deleteCart');

  const data = await res.json();
  return data;
};

// 장바구니에 상품 추가
export const addCartItem = async (
  token: string,
  productUuid: string,
  quantity: number
) => {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/fromProductDetailsPage/wishlist/${productUuid}/add/${quantity}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  revalidateTag('addCart');
};

// 장바구니 품목 갯수 조회
export async function getCartCount(token: string): Promise<number> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/itemCount`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      cache: 'no-cache',
    }
  );
  if (!res.ok) {
    return redirect('/error?message=Failed to fetch cart item count');
  }
  const data = (await res.json()) as commonResType<number>;
  return data.result as number;
}

// 품목 1증가
export const quantityIncreaseUpdate = async (
  token: string,
  item: cartItemType
) => {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/itemQuantity/${item.productUuid}/add`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  revalidateTag('checkCart');
  return true;
};

// 품목 1감소
export const quantityDecreaseUpdate = async (
  token: string,
  item: cartItemType
) => {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/itemQuantity/${item.productUuid}/subtract`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  revalidateTag('checkCart');
  return true;
};

// 장바구니에 품목 담기
export const cartUpdate = async (
  token: string,
  productUuid: string,
  quantity: number
): Promise<boolean> => {
  'use server';
  const payload = {
    productUuid: productUuid,
  };
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/fromProductDetailsPage/wishlist/${productUuid}/add/${quantity}`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) {
    return redirect('/error?message=Failed to fetch cart update');
  }
  revalidateTag('checkCart');
  return true;
};
