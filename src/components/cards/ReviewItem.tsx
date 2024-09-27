'use client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import StarRatingBlack from '../ui/StarRatingBlack';
import { imageDataType, reviewItemDataType } from '@/types/ResponseTypes';
import { getMainImageData } from '@/actions/image/imageActions';
import FitImage from '../ui/FitImage';
import { getReviewItem } from '@/actions/review/reviewActions';

function ReviewItem({
  reviewUuid,
  productUuid,
}: {
  reviewUuid: string;
  productUuid: string;
}) {
  const [reviewInfo, setReviewInfo] = useState<reviewItemDataType>();
  const [reviewImg, setReviewImg] = useState<imageDataType>();
  useEffect(() => {
    const getData = async () => {
      const data = await getReviewItem(reviewUuid);
      setReviewInfo(data);
      const imgData = await getMainImageData(reviewUuid);
      setReviewImg(imgData);
    };
    getData();
  }, []);
  return (
    <>
      {reviewInfo && (
        <div className="relative flex flex-col gap-1 pt-3">
          <div className="flex items-baseline">
            <StarRatingBlack reviewScore={reviewInfo.reviewScore} />
            <span className="text-xs pl-1">{reviewInfo.authorName}</span>
            <Link
              href={`/product/${productUuid}/reviewdetail?reviewId=${reviewUuid}`}
              scroll={false}
            >
              <ChevronRight width={14} className="absolute top-3 right-0" />
            </Link>
          </div>
          <Link
            href={`/product/${productUuid}/reviewdetail?reviewId=${reviewUuid}`}
            scroll={false}
          >
            <div className="line-clamp-2 pr-4 mb-2">{reviewInfo.content}</div>
            {reviewImg && reviewImg.s3url !== '' && (
              <div className="flex gap-2 overflow-x-auto">
                <div className="w-24 min-w-24 h-24 bg-gray-500">
                  <FitImage src={reviewImg.s3url} alt={reviewImg.imageName} />
                </div>
              </div>
            )}
          </Link>
          <div className="text-[10px] text-gray-500">
            {reviewInfo.modDate.slice(0, 10)}
          </div>
        </div>
      )}
    </>
  );
}

export default ReviewItem;
