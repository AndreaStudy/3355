import Link from 'next/link';
import React from 'react';
import CartBlackIcon from '/public/assets/images/icons/cartBlackIcon.svg';
import LikeButton from '@/components/ui/LikeButton';
import FitImage from '../ui/FitImage';
import { productInfoDataType } from '@/types/ResponseTypes';
import { StarIcon } from 'lucide-react';

function Product({
  product,
  size,
}: {
  product: productInfoDataType;
  size: string;
}) {
  return (
    <div
      className={`h-auto pb-4 flex flex-col items-center gap-2 ${size === 'md' ? 'w-36 min-w-36' : size === 'lg' ? 'w-[45%]' : 'w-[167px] min-w-[167px]'}`}
    >
      <Link href={`/product/${product.productUuid}`}>
        <FitImage
          // todo: src={product.imgUrl}
          src="https://sitem.ssgcdn.com/10/30/71/item/1000355713010_i1_500.jpg"
          alt={product.productName}
        />
      </Link>
      <div className="w-full flex flex-col gap-1 text-sm text-[#222222]">
        <div className="flex justify-between items-center text-xs">
          <span>스타벅스</span>
          <div className="flex gap-2">
            <LikeButton w={20} h={20} productUuid={product.productUuid} />
            <CartBlackIcon width="20" height="20" />
          </div>
        </div>
        <Link href={`/product/${product.productUuid}`}>
          <p className="line-clamp-2">{product.productName}</p>
          <p className="text-base font-bold text-black">
            {product.price?.toLocaleString()}원
          </p>
          {product.reviewcount > 0 ? (
            <div className="flex gap-1 items-center text-[#777777] text-xs">
              <StarIcon
                width="11"
                height="16"
                fill="#C6C6C6"
                stroke="#C6C6C6"
              />
              <span>{product.reviewscoreAvg}</span>
              <div className="border-solid h-3/4 w-[1px] bg-gray-300"></div>
              <span>{product.reviewcount}건</span>
            </div>
          ) : null}
        </Link>
      </div>
    </div>
  );
}

export default Product;
