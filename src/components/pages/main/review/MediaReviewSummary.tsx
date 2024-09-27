import { getProductReviewSummary } from '@/actions/product/productActions';
import { getMediaReviewList } from '@/actions/review/reviewActions';
import MediaReviewItem from '@/components/cards/MediaReviewItem';
import { Skeleton } from '@/components/ui/skeleton';
import StarRating from '@/components/ui/StarRating';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { Suspense } from 'react';

async function MediaReviewSummary({ productUuid }: { productUuid: string }) {
  const mediaReviewList = await getMediaReviewList(productUuid, 0, 10);
  const reviewSummary = await getProductReviewSummary(productUuid);

  return (
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
      {mediaReviewList.length > 0 && (
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
            <Suspense
              key={media.reviewUuid}
              fallback={<Skeleton className="w-24 h-24" />}
            >
              <MediaReviewItem media={media} />;
            </Suspense>
          );
        })}
        {mediaReviewList.length >= 8 && (
          <Link href={`/product/${productUuid}/photoReviewAll`}>
            <div className="w-24 min-w-24 h-24 bg-gray-300 flex flex-col justify-center items-center">
              <span>+</span>
              <span>더보기</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default MediaReviewSummary;
