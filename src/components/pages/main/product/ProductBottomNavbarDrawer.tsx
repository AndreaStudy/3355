'use client';
import { useRouter } from 'next/navigation'; // Next.js 13의 useRouter를 사용
import { cartUpdate } from '@/actions/cart/cartAction';
import {
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerClose,
} from '@/components/ui/drawer';
import { InfoIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { payKakao } from '@/actions/pay/payAction';

function ProductBottomNavbarDrawer({
  type,
  productUuid,
  productName,
  productPrice,
  isAuth,
  token,
}: {
  type: number;
  productUuid: string;
  productName: string;
  productPrice: number;
  isAuth: boolean;
  token: string;
}) {
  const [notification, setNotification] = useState('');
  const [productCount, setProductCount] = useState(1);
  const router = useRouter();

  const handleProductAdd = () => {
    if (productCount < 3) {
      setProductCount((prev) => prev + 1);
    }
  };

  const handleProductSubtract = () => {
    if (productCount > 1) {
      setProductCount((prev) => prev - 1);
    }
  };

  const handleAddToCart = async () => {
    if (isAuth) {
      const res = await cartUpdate(token, productUuid, productCount);
      if (res) {
        setNotification(`${productName}이(가) 장바구니에 담겼습니다.`);
      }
    } else {
      alert('회원가입이 필요합니다.');
      router.push('/sign-in');
    }
  };

  const handlePay = async () => {
    if (isAuth) {
      const ready = await payKakao(token, productPrice * productCount + 3000);
      if (ready.next_redirect_pc_url) {
        sessionStorage.setItem('tid', ready.tid);
        router.push(ready.next_redirect_pc_url);
      }
    } else {
      alert('회원가입이 필요합니다.');
      router.push('/sign-in');
    }
  };

  return (
    <DrawerContent>
      <DrawerTitle />
      <DrawerDescription />
      <div className="flex flex-col gap-4 pt-8">
        <div className="flex flex-col gap-4 px-4">
          <div className="p-4 bg-starbucks-lightgray">
            <p className="text-sm pb-3">{productName}</p>
            <div className="flex justify-between">
              <div className="flex gap-0.5">
                <button
                  className="w-8 h-8 bg-white"
                  onClick={handleProductSubtract}
                >
                  -
                </button>
                <span className="w-12 h-8 bg-white flex justify-center items-center text-sm">
                  {productCount}
                </span>
                <button className="w-8 h-8 bg-white" onClick={handleProductAdd}>
                  +
                </button>
              </div>
              <span className="font-bold">
                {productPrice?.toLocaleString()}원
              </span>
            </div>
            <div className="flex justify-between">
              <p></p>
              <p>배송비: 3000원</p>
            </div>
          </div>
          <div className="flex gap-2 font-bold items-center justify-end">
            <span>총 합계</span>
            <span className="text-2xl text-starbucks-red">
              {(productPrice * productCount + 3000)?.toLocaleString()}원
            </span>
          </div>
          {type === 1 ? (
            <div className="flex justify-center items-center gap-1 text-xs text-gray-500">
              <InfoIcon width={10} />
              장바구니에 담아 여러 상품을 한번에 선물할 수 있어요
            </div>
          ) : null}
        </div>
        <div className="w-full h-14">
          <button
            className="w-1/2 h-full bg-black text-white"
            onClick={handleAddToCart} // 수정된 함수 호출
          >
            장바구니
          </button>
          <button
            onClick={handlePay}
            className="w-1/2 h-full bg-starbucks-red text-white"
          >
            {type === 1 ? '바로 선물하기' : '바로구매'}
          </button>
        </div>
      </div>
      {notification && (
        <DrawerClose>
          <div
            onClick={() => setNotification('')}
            className="absolute top-0 left-1/2 w-10/12 transform -translate-x-1/2 mt-4 p-2 mb-2 bg-blue-500 text-lg text-white rounded"
          >
            <p>{notification}</p>
            <button className="w-1/2 h-full p-2 mt-2 rounded-lg bg-white text-black">
              확인
            </button>
          </div>
        </DrawerClose>
      )}
    </DrawerContent>
  );
}

export default ProductBottomNavbarDrawer;
