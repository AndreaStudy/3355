'use client';
import React from 'react';
import CartBlackIcon from '/public/assets/images/icons/cartBlackIcon.svg';
import LikeButton from '../ui/LikeButton';
import { Checkbox } from '../ui/checkbox';
import Link from 'next/link';
import FitImage from '../ui/FitImage';
import { productInfoDataType } from '@/types/ResponseTypes';

function ProductHorizontalItem({
  product,
  isSetting,
  isSelected,
  handleItemCheck,
}: {
  product: productInfoDataType;
  isSetting: boolean;
  isSelected: boolean;
  handleItemCheck: (id: string, checked: boolean | string) => void;
}) {
  const handleCheck = (checked: boolean) => {
    handleItemCheck(product.productUuid, checked);
  };
  return (
    <li className="relative bg-white flex w-full h-[100px] rounded-md">
      {isSetting && (
        <Checkbox
          id={product.productUuid}
          className="absolute top-0 -left-6 border-gray-500 data-[state=checked]:bg-starbucks-red data-[state=checked]:border-starbucks-red"
          onCheckedChange={handleCheck}
          checked={isSelected}
        />
      )}
      <div
        className={`p-4 flex flex-col gap-1 ${isSetting ? 'w-[55%]' : 'w-[57%]'}`}
      >
        <label htmlFor={product.productUuid}>
          <p className="text-[13px] text-[#444444] leading-[14px]">
            {product.productName}
          </p>
          <p className="font-bold">{product.price.toLocaleString()}원</p>
        </label>
      </div>
      <div className={`${isSetting ? 'w-[30%]' : 'w-[28%]'}`}>
        {isSetting ? (
          <label htmlFor={product.productUuid}>
            <FitImage
              // src={product.productThumbnailImage}
              src="https://sitem.ssgcdn.com/03/79/58/item/1000614587903_i1_500.jpg"
              alt={product.productName}
            />
          </label>
        ) : (
          <Link href={`/product/${product.productUuid}`}>
            <FitImage
              // src={product.productThumbnailImage}
              src="https://sitem.ssgcdn.com/03/79/58/item/1000614587903_i1_500.jpg"
              alt={product.productName}
            />
          </Link>
        )}
      </div>
      <div className="w-[15%] flex flex-col items-center">
        <button className="h-1/2">
          <CartBlackIcon width="26" height="26" />
        </button>
        <button className="h-1/2">
          <LikeButton w={26} h={26} productUuid={product.productUuid} />
        </button>
      </div>
    </li>
  );
}

export default ProductHorizontalItem;
