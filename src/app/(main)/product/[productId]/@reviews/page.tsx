import { getProductReviewSummary } from '@/actions/product/productActions';
import { getReviewList } from '@/actions/review/reviewActions';
import MediaReviewSummary from '@/components/pages/main/review/MediaReviewSummary';
import ReviewList from '@/components/pages/main/review/ReviewList';

import React from 'react';

async function Page({ params }: { params: { productId: string } }) {
  const reviewSummary = await getProductReviewSummary(params.productId);
  const reviewList = await getReviewList(params.productId, 0, 5);

  return (
    <section
      id="review"
      className="flex flex-col gap-6 mt-4 bg-white px-4 py-8"
    >
      <h1 className="text-lg font-bold">고객 리뷰</h1>
      {reviewSummary.reviewcount === 0 ? (
        <p className="mx-auto py-4">아직 등록된 리뷰가 없습니다.</p>
      ) : (
        <>
          <MediaReviewSummary productUuid={params.productId} />
          <ReviewList reviewList={reviewList} />
        </>
      )}
    </section>
  );
}

export default Page;
