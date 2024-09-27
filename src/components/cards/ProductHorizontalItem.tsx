'use client';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import CartBlackIcon from '/public/assets/images/icons/cartBlackIcon.svg';
import LikeButton from '../ui/LikeButton';
import { Checkbox } from '../ui/checkbox';
import Link from 'next/link';
import FitImage from '../ui/FitImage';
import { productInfoDataType } from '@/types/ResponseTypes';
import {
  getProductBasicInfo,
  getProductPrice,
  getProductReviewSummary,
} from '@/actions/product/productActions';
import { getMainImageData } from '@/actions/image/imageActions';

function ProductHorizontalItem({
  productUuid,
  isSetting,
  isSelected,
  setCheckedItems,
}: {
  productUuid: string;
  isSetting: boolean;
  isSelected: boolean;
  setCheckedItems: Dispatch<SetStateAction<string[]>>;
}) {
  const [productInfo, setProductInfo] = useState<productInfoDataType>();
  useEffect(() => {
    const getData = async () => {
      const [basicInfo, price, reviewSummary, image] = await Promise.all([
        getProductBasicInfo(productUuid),
        getProductPrice(productUuid),
        getProductReviewSummary(productUuid),
        getMainImageData(productUuid),
      ]);
      const data = {
        productUuid: productUuid,
        ...basicInfo,
        ...price,
        ...reviewSummary,
        image: image,
      } as productInfoDataType;
      setProductInfo(data);
    };
    getData();
  }, []);
  const handleItemCheck = (id: string, checked: boolean | string) => {
    setCheckedItems((prev) =>
      checked ? [...prev, id] : prev.filter((itemId) => itemId !== id)
    );
  };
  const handleCheck = (checked: boolean) => {
    handleItemCheck(productUuid, checked);
  };
  return (
    <>
      {productInfo && (
        <li className="relative bg-white flex w-full h-[100px] rounded-md">
          {isSetting && (
            <Checkbox
              id={productUuid}
              className="absolute top-0 -left-6 border-gray-500 data-[state=checked]:bg-starbucks-red data-[state=checked]:border-starbucks-red"
              onCheckedChange={handleCheck}
              checked={isSelected}
            />
          )}
          <div
            className={`p-4 flex flex-col gap-1 ${isSetting ? 'w-[55%]' : 'w-[57%]'}`}
          >
            <label htmlFor={productUuid}>
              <p className="text-[13px] text-[#444444] leading-[14px]">
                {productInfo.productName}
              </p>
              <p className="font-bold">
                {productInfo.price.toLocaleString()}원
              </p>
            </label>
          </div>
          <div className={`${isSetting ? 'w-[30%]' : 'w-[28%]'}`}>
            {isSetting ? (
              <label htmlFor={productInfo.productUuid}>
                <FitImage
                  src={productInfo.image.s3url}
                  alt={productInfo.productName}
                />
              </label>
            ) : (
              <Link href={`/product/${productInfo.productUuid}`}>
                <FitImage
                  src={productInfo.image.s3url}
                  alt={productInfo.productName}
                />
              </Link>
            )}
          </div>
          <div className="w-[15%] flex flex-col items-center">
            <button className="h-1/2">
              <CartBlackIcon width="26" height="26" />
            </button>
            <button className="h-1/2">
              <LikeButton w={26} h={26} productUuid={productInfo.productUuid} />
            </button>
          </div>
        </li>
      )}
    </>
  );
}

export default ProductHorizontalItem;
