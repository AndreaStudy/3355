import { getMyReviewListData } from '@/actions/mypage/myReviewAction';
import { myReviewDataType } from '@/types/ResponseTypes';
import MyReviewCard from './MyReviewCard';
import React from 'react';

async function MyReviewContent() {
  const myReviewList: myReviewDataType[] =
    (await getMyReviewListData()) as myReviewDataType[];

  return (
    <ul className="px-6">
      {myReviewList.map((myReview, index) => (
        <React.Fragment key={myReview.reviewUuid}>
          <li>
            <MyReviewCard myReview={myReview} />
          </li>
          {index < myReviewList.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </ul>
  );
}

export default MyReviewContent;
