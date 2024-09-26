import React from 'react';
import PhotoReviewAllModal from './modal';

function Page() {
  return (
    <PhotoReviewAllModal>
      <div className="w-full h-full py-6 px-5">
        <div className="grid grid-cols-3 gap-1">
          <div className="w-28 min-w-28 h-28 bg-gray-500">상품사진</div>
          <div className="w-28 min-w-28 h-28 bg-gray-500">상품사진</div>
          <div className="w-28 min-w-28 h-28 bg-gray-500">상품사진</div>
          <div className="w-28 min-w-28 h-28 bg-gray-500">상품사진</div>
          <div className="w-28 min-w-28 h-28 bg-gray-500">상품사진</div>
        </div>
      </div>
    </PhotoReviewAllModal>
  );
}

export default Page;
