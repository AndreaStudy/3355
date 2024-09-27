import React from 'react';
import ReviewDetailModal from './modal';
import StarRatingBlack from '@/components/ui/StarRatingBlack';
import ImgSwiper from '@/components/layouts/ImgSwiper';
import { getReviewItem } from '@/actions/review/reviewActions';
import { reviewItemDataType } from '@/types/ResponseTypes';

async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const reviewItem: reviewItemDataType = await getReviewItem(
    searchParams.reviewId
  );
  console.log('*&&&&&&&&&&&&&&&&&&&&&&&&', reviewItem);
  // fetch: reviewId로 img 정보 들고오기
  const reviewImgList: string[] = [
    'https://succ.ssgcdn.com/uphoto/202408/20240802102941_1223449928_0_1.jpg',
    'https://succ.ssgcdn.com/uphoto/202408/20240802102941_1223449928_0_1.jpg',
    'https://sitem.ssgcdn.com/11/88/17/item/1000561178811_i1_500.jpg',
  ];
  return (
    <ReviewDetailModal>
      <div className="w-full h-full ">
        <div className="w-full h-1/2">
          <ImgSwiper imgList={reviewImgList} />
        </div>
        <div className="w-full h-full p-4 flex flex-col gap-2">
          <div className="flex gap-1 items-baseline">
            <StarRatingBlack reviewScore={reviewItem.reviewScore} />
            <span className="text-xs text-[#222222]">
              {reviewItem.authorName}
            </span>
          </div>
          <p>{reviewItem.content}</p>
          <span className="text-xs text-[#888888]">{reviewItem.modDate}</span>
        </div>
      </div>
    </ReviewDetailModal>
  );
}

export default Page;
