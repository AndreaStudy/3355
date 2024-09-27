import { getMyReviewListData } from '@/actions/mypage/myReviewAction';
import MyReviewCard from './MyReviewCard';
import React from 'react';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

async function MyReviewContent() {
  const session = await getServerSession(options);
  const myReviewList = await getMyReviewListData(session?.user?.accessToken);

  return (
    <>
      {myReviewList.length > 0 ? (
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
      ) : (
        <div className="flex justify-center items-center p-4 h-96">
          <p className="text-xl font-extrabold">리뷰 내역이 없습니다.</p>
        </div>
      )}
    </>
  );
}

export default MyReviewContent;
