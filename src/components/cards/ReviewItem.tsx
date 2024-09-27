'use client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import StarRatingBlack from '../ui/StarRatingBlack';
import { imageDataType, reviewDataType } from '@/types/ResponseTypes';
import { getMainImageData } from '@/actions/image/imageActions';
import FitImage from '../ui/FitImage';

function ReviewItem({ review }: { review: reviewDataType }) {
  const [reviewImg, setreviewImg] = useState<imageDataType>();
  useEffect(() => {
    const getData = async () => {
      const data = await getMainImageData(review.reviewUuid);
      setreviewImg(data);
    };
    getData();
  }, []);
  return (
    <div className="relative flex flex-col gap-1 pt-3">
      <div className="flex items-baseline">
        <StarRatingBlack reviewScore={review.reviewScore} />
        <span className="text-xs pl-1">{review.authorName}</span>
        <Link
          href={`/product/${review.productUuid}/reviewdetail?reviewId=${review.reviewUuid}`}
          scroll={false}
        >
          <ChevronRight width={14} className="absolute top-3 right-0" />
        </Link>
      </div>
      <Link
        href={`/product/${review.productUuid}/reviewdetail?reviewId=${review.reviewUuid}`}
        scroll={false}
      >
        <div className="line-clamp-2 pr-4 mb-2">{review.content}</div>
        {reviewImg && (
          <div className="flex gap-2 overflow-x-auto">
            <div className="w-24 min-w-24 h-24 bg-gray-500">
              <FitImage src={reviewImg.s3url} alt={reviewImg.imageName} />
            </div>
          </div>
        )}
      </Link>
      <div className="text-[10px] text-gray-500">
        {review.modDate.slice(0, 10)}
      </div>
    </div>
  );
}

export default ReviewItem;
