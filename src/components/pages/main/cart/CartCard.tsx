import Link from 'next/link';
import React from 'react';
import FitImage from '@/components/ui/FitImage';
import { Minus, Plus, X } from 'lucide-react';
import { cartItemType } from '@/types/RequestTypes';
import { productDetailDataType } from '@/types/main/productDetailType';
import { productDetailData } from '@/datas/main/productDetailDatas';

function CartCard({ item }: { item: cartItemType }) {
  const product: productDetailDataType = productDetailData;
  return (
    <div className={'grid grid-cols-4 h-auto pb-4 gap-2 w-full'}>
      <Link href={`/product/${item.productUuid}`}>
        <FitImage
          src={product.productThumbnailImageList[0]}
          alt={product.productName}
        />
      </Link>
      <div className="col-span-3 flex flex-col gap-1 text-sm text-[#222222]">
        <Link href={`/product/${product.productId}`}>
          <div className="flex flex-row justify-between">
            <p className="line-clamp-2">{product.productName}</p>
            <X
              className="text-gray-300 border border-gray-300 rounded-full p-[2px]"
              size={20}
            />
          </div>
          <div className="flex justify-between mt-2 text-base font-bold text-black">
            <div className="flex justify-start items-center gap-x-3">
              <Minus
                className={` border  rounded-full p-[2px] ${item.currentQuantity === 1 && 'text-gray-300 border-gray-300'}`}
                size={20}
              />
              <p>{item.currentQuantity}</p>
              <Plus className=" border  rounded-full p-[2px]" size={20} />
            </div>
            <p>{product.productPrice.toLocaleString()}원</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CartCard;
