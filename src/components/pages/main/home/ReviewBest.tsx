import React from 'react';
import { getBestReviews } from '@/actions/review/reviewActions';
import ReviewBestItem from './ReviewBestItem';

async function ReviewBest() {
  const bestReviews = await getBestReviews();
  return (
    <section className="w-full flex flex-col gap-1 pt-10 px-4">
      <h1 className="text-2xl font-bold">Review Best</h1>
      <p className="text-xs text-[#666666]">베스트리뷰 상품들을 만나보세요</p>
      <div className="flex overflow-x-auto gap-2 py-4">
        {bestReviews.map((review) => {
          return <ReviewBestItem key={review.reviewUuid} review={review} />;
        })}
      </div>
    </section>
  );
}

export default ReviewBest;
