import { getMainImageData } from '@/actions/image/imageActions';
import {
  getProductBasicInfo,
  getProductPrice,
  getProductReviewSummary,
} from '@/actions/product/productActions';
import { getReviewItem } from '@/actions/review/reviewActions';
import FitImage from '@/components/ui/FitImage';
import {
  productInfoDataType,
  productReviewUuidDataType,
} from '@/types/ResponseTypes';
import { StarIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

async function ReviewBestItem({
  review,
}: {
  review: productReviewUuidDataType;
}) {
  const reviewInfo = await getReviewItem(review.reviewUuid);
  const [basicInfo, price, reviewSummary, image] = await Promise.all([
    getProductBasicInfo(review.productUuid),
    getProductPrice(review.productUuid),
    getProductReviewSummary(review.productUuid),
    getMainImageData(review.productUuid),
  ]);
  const productInfo: productInfoDataType = {
    productUuid: review.productUuid,
    ...basicInfo,
    ...price,
    ...reviewSummary,
    image: image,
  };
  return (
    <div className="w-80 min-w-80 h-auto mr-4 flex gap-1 ">
      <Link href={`/product/${review.productUuid}`} className="w-2/5">
        <FitImage
          src={productInfo.image.s3url}
          alt={productInfo.image.imageName}
        />
      </Link>
      <div className="w-3/5 flex flex-col gap-0.5 pl-2">
        <Link href={`/product/${review.productUuid}`}>
          <p className="text-xs text-[#666666]">스타벅스</p>
          <p className="text-sm text-[#222222] line-clamp-1">
            {productInfo.productName}
          </p>
          <p className="font-bold">{productInfo.price.toLocaleString()}원</p>
          <div className="flex gap-1 items-center text-[#777777] text-xs">
            <StarIcon width="11" height="16" fill="#C6C6C6" />
            <span>{productInfo.reviewscoreAvg}</span>
            <div className="border-solid h-3/4 w-[1px] bg-gray-300"></div>
            <span>{productInfo.reviewcount}건</span>
          </div>
        </Link>
        <Link
          href={`/product/${review.productUuid}/reviewdetail?reviewId=${review.reviewUuid}`}
        >
          <p className="text-xs text-[#666666] text-ellipsis line-clamp-3">
            {reviewInfo.content}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ReviewBestItem;
