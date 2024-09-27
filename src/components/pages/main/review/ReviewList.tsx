import ReviewItem from '@/components/cards/ReviewItem';
import { reviewDataType } from '@/types/ResponseTypes';
import Link from 'next/link';
import React from 'react';

function ReviewList({
  reviewList,
  productUuid,
}: {
  reviewList: string[];
  productUuid: string;
}) {
  return (
    <div>
      <span className="font-bold">전체 리뷰</span>
      <div className="flex flex-col gap-4 text-sm divide-y">
        {reviewList.map((reviewUuid) => (
          <ReviewItem
            key={reviewUuid}
            reviewUuid={reviewUuid}
            productUuid={productUuid}
          />
        ))}
      </div>
      {reviewList.length > 10 && (
        <Link href={`/product/${productUuid}/reviewall`} scroll={false}>
          <button className="border h-10 w-full mt-4 text-sm">전체보기</button>
        </Link>
      )}
    </div>
  );
}

export default ReviewList;
