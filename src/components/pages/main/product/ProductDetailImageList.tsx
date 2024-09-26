'use client';

import { productDetailDataType } from '@/types/main/productDetailType';
import Image from 'next/image';
import React, { useState } from 'react';
import TriangleUpIcon from '/public/assets/images/icons/triangleUpIcon.svg';
import TriangleDownIcon from '/public/assets/images/icons/triangleDownIcon.svg';
import FitImage from '@/components/ui/FitImage';
import { productInfoDataType } from '@/types/ResponseTypes';

function ProductDetailImageList({
  productInfo,
}: {
  productInfo: productInfoDataType;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={`relative ${isExpanded ? 'h-auto pb-20' : 'h-[1400px] overflow-hidden'}`}
    >
      {/* {productInfo.productDescriptionImgList.map((infoImg, index) => {
        return <FitImage key={index} src={infoImg} alt={`infoImg${index}`} />;
      })} */}
      <div
        className="absolute w-full -bottom-1 h-10 flex justify-center items-center bg-white shadow-[10px_0px_10px_10px_rgba(255,255,255,0.95)]"
        onClick={toggleExpanded}
      >
        <button className="flex items-center font-light">
          {isExpanded ? '상세정보 접기' : '상세정보 펼쳐보기'}
          {isExpanded ? <TriangleUpIcon /> : <TriangleDownIcon />}
        </button>
      </div>
    </div>
  );
}

export default ProductDetailImageList;
