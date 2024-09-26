import StarRating from '@/components/ui/StarRating';
import {
  productReviewSummaryDataType,
  reviewDataType,
} from '@/types/ResponseTypes';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function MediaReviewSummary({
  productUuid,
  reviewSummary,
  mediaReviewList,
}: {
  productUuid: string;
  reviewSummary: productReviewSummaryDataType;
  mediaReviewList: reviewDataType[];
}) {
  return (
    <>
      {reviewSummary.reviewcount > 0 && (
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <StarRating rating={reviewSummary.reviewscoreAvg} w={30} />
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold">
                {reviewSummary.reviewscoreAvg}
              </span>
              <span className="text-sm text-gray-600">
                ({reviewSummary.reviewcount})
              </span>
            </div>
          </div>
          {mediaReviewList.length > 10 && (
            <div className="flex w-full justify-between">
              <span className="font-bold">포토&동영상 리뷰</span>
              <Link href={`/product/${productUuid}/photoReviewAll`}>
                <div className="flex items-center text-sm">
                  <span>더보기({mediaReviewList.length.toLocaleString()})</span>
                  <ChevronRight width={16} className="text-gray-500" />
                </div>
              </Link>
            </div>
          )}
          <div className="flex gap-2 overflow-x-auto">
            {mediaReviewList.map((media) => {
              return (
                <div
                  key={media.reviewUuid}
                  className="w-24 min-w-24 h-24 bg-gray-500"
                >
                  {media.images && media.images[0].s3url}
                </div>
              );
            })}
            {mediaReviewList.length >= 10 && (
              <Link href={`/product/${productUuid}/photoReviewAll`}>
                <div className="w-24 min-w-24 h-24 bg-gray-300 flex flex-col justify-center items-center">
                  <span>+</span>
                  <span>더보기</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default MediaReviewSummary;
