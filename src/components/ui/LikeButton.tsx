'use client';
import React, { useEffect, useState } from 'react';
import EmptyHeartIcon from '/public/assets/images/icons/emptyHeartIcon.svg';
import HeartIcon from '/public/assets/images/icons/heartIcon.svg';
import { getLikeTF, getWishList, likeToggle } from '@/actions/like/likeActions';
import { likedTFDataType } from '@/types/ResponseTypes';

function LikeButton({
  w,
  h,
  productUuid,
}: {
  w: number;
  h: number;
  productUuid: string;
}) {
  const [isLike, setIsLike] = useState(false);

  // todo: 상품 uuid에 따라 fetch
  // todo: 회원인 경우에만(token을 likeToggle에 같이 보내기) 각 상품 uuid에 따라 찜 여부 판단
  const handleClick = () => {
    setIsLike(!isLike);
    likeToggle(productUuid);
  };
  return (
    <div onClick={handleClick}>
      {isLike ? (
        <HeartIcon width={w} height={h} />
      ) : (
        <EmptyHeartIcon width={w} height={h} />
      )}
    </div>
  );
}

export default LikeButton;
