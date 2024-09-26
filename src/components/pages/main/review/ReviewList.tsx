import ReviewItem from '@/components/cards/ReviewItem';
import { reviewDataType } from '@/types/ResponseTypes';
import Link from 'next/link';
import React from 'react';

function ReviewList({ reviewList }: { reviewList: reviewDataType[] }) {
  return (
    <>
      {reviewList ? (
        <div>
          <span className="font-bold">전체 리뷰</span>
          <div className="flex flex-col gap-4 text-sm divide-y">
            {reviewList.map((review) => (
              <ReviewItem key={review.reviewUuid} review={review} />
            ))}
          </div>
          {reviewList.length > 4 && (
            <Link
              href={`/product/${reviewList[0].productUuid}/reviewall`}
              scroll={false}
            >
              <button className="border h-10 w-full mt-4 text-sm">
                전체보기
              </button>
            </Link>
          )}
        </div>
      ) : null}
    </>
  );
}

export default ReviewList;
