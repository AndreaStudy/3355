'use client';
import {
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from '@/components/ui/drawer';
import { InfoIcon } from 'lucide-react';
import React, { useState } from 'react';

function ProductBottomNavbarDrawer({
  type,
  productUuid,
  productName,
  productPrice,
}: {
  type: number;
  productUuid: string;
  productName: string;
  productPrice: number;
}) {
  const [productCount, setProductCount] = useState(1);
  // todo: 상품에 대해서 1회 주문 당 상품 구매 제한 개수 alert
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
          </div>
          <div className="flex gap-2 font-bold items-center justify-end">
            <span>총 합계</span>
            <span className="text-2xl text-starbucks-red">
              {(productPrice * productCount)?.toLocaleString()}원
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
            // onClick={() => addCart(productUuid, productCount)}
          >
            장바구니
          </button>
          <button className="w-1/2 h-full bg-starbucks-red text-white">
            {type === 1 ? '바로 선물하기' : '바로구매'}
          </button>
        </div>
      </div>
    </DrawerContent>
  );
}

export default ProductBottomNavbarDrawer;
