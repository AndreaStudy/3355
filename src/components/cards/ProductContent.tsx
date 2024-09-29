import Link from 'next/link';
import React from 'react';
import CartBlackIcon from '/public/assets/images/icons/cartBlackIcon.svg';
import LikeButton from '@/components/ui/LikeButton';
import FitImage from '../ui/FitImage';
import { StarIcon } from 'lucide-react';
import {
  getProductBasicInfo,
  getProductPrice,
  getProductReviewSummary,
} from '@/actions/product/productActions';
import { getMainImageData } from '@/actions/image/imageActions';

async function ProductContent({
  productUuid,
  size,
}: {
  productUuid: string;
  size: string;
}) {
  const basicInfo = await getProductBasicInfo(productUuid);
  const price = await getProductPrice(productUuid);
  const reviewSummary = await getProductReviewSummary(productUuid);
  const image = await getMainImageData(productUuid);

  return (
    <div
      className={`h-auto pb-4 flex flex-col items-center gap-2 ${size === 'md' ? 'w-36 min-w-36' : size === 'lg' ? 'w-[45%]' : 'w-[167px] min-w-[167px]'}`}
    >
      <Link href={`/product/${productUuid}`}>
        <FitImage src={image.s3url} alt={image.imageName} />
      </Link>
      <div className="w-full flex flex-col gap-1 text-sm text-[#222222]">
        <div className="flex justify-between items-center text-xs">
          <span>스타벅스</span>
          <div className="flex gap-2">
            <LikeButton w={20} h={20} productUuid={productUuid} />
            <CartBlackIcon width="20" height="20" />
          </div>
        </div>
        <Link href={`/product/${productUuid}`}>
          <p className="line-clamp-2">{basicInfo.productName}</p>
          <p className="text-base font-bold text-black">
            {price.price.toLocaleString()}원
          </p>
          {reviewSummary.reviewcount > 0 ? (
            <div className="flex gap-1 items-center text-[#777777] text-xs">
              <StarIcon
                width="11"
                height="16"
                fill="#C6C6C6"
                stroke="#C6C6C6"
              />
              <span>{reviewSummary.reviewscoreAvg}</span>
              <div className="border-solid h-3/4 w-[1px] bg-gray-300"></div>
              <span>{reviewSummary.reviewcount}건</span>
            </div>
          ) : null}
        </Link>
      </div>
    </div>
  );
}

export default ProductContent;
