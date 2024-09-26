'use server';
import { cartItemType } from '@/types/RequestTypes';
import { commonResType } from '@/types/ResponseTypes';
import { revalidateTag } from 'next/cache';

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
    throw new Error('Failed to fetch cart item list');
  }
  const data = await res.json();
  return data.result;
}

// 나의 상품 장바구니 품목의 총 가격, 총 할인액 조회
export async function fetchCartItemPrice(): Promise<cartItemType[]> {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/totalPriceAndDiscount`,
    {
      method: 'GET',
      next: { tags: [] },
      cache: 'no-cache',
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch cart item list');
  }
  const data = await res.json();
  return data;
}

// 장바구니 체크 업데이트
export const cartCheckUpdate = async (item: cartItemType, checked: boolean) => {
  'use server';
  const res = fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/${item.productUuid}/check`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  revalidateTag('checkCart');
};

// 장바구니 전체 체크 업데이트
export const cartCheckAllUpdate = async () => {
  'use server';
  const res = fetch(`${process.env.API_BASE_URL}/api/v1/wishList/checkAll`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  revalidateTag('checkCart');
};

// 장바구니 체크된 품목 삭제
export const deleteCartCheckedItemList = async () => {
  'use server';
  const res = fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/deleteChecked`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  revalidateTag('deleteCart');
};

// 장바구니 체크된 품목 삭제
export const deleteCartItemList = async (item: cartItemType) => {
  'use server';
  const res = fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/${item.productUuid}/deleteWishListItem`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  revalidateTag('deleteCart');
};

// 장바구니 전체 삭제
export const deleteAllCartItemList = async (item: cartItemType) => {
  'use server';
  const res = fetch(`${process.env.API_BASE_URL}/api/v1/wishList/deleteAll`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  revalidateTag('deleteCart');
};

// 장바구니에 상품 추가
export const addCartItem = async (productUuid: string, quantity: number) => {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/fromProductDetailsPage/wishlist/${productUuid}/add/${quantity}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  revalidateTag('addCart');
};

// 장바구니 품목 조회
export async function getCartCount(): Promise<number> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/itemCount`,
    {
      method: 'GET',
      next: { tags: ['checkCart, addCart, cartCount, deleteCart'] },
      cache: 'no-cache',
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch cart item count');
  }
  const data = (await res.json()) as commonResType<number>;
  return data.result as number;
}
