import React from 'react';
import HomeIcon from '/public/assets/images/icons/homeIcon.svg';
import EmptyHeartIcon from '/public/assets/images/icons/emptyHeartIcon.svg';
import MyPageIcon from '/public/assets/images/icons/myPageIcon.svg';
import RecentWatchIcon from '/public/assets/images/icons/recentWatchIcon.svg';
import Link from 'next/link';

function BottomNavbar() {
  return (
    <div className="fixed bottom-0 z-10 w-full max-w-md mx-auto flex justify-around items-center h-16 bg-white">
      <Link href="/" className="flex flex-col items-center">
        <HomeIcon />
        <span className="pt-[4] text-xs">홈</span>
      </Link>
      <Link href="/wishlist" className="flex flex-col items-center">
        <EmptyHeartIcon width="32" height="32" />
        <span className="pt-[4] text-xs">좋아요</span>
      </Link>
      <Link href="/mypage" className="flex flex-col items-center">
        <MyPageIcon />
        <span className="pt-[4] text-xs">My</span>
      </Link>
      <Link href="/recent" className="flex flex-col items-center">
        <RecentWatchIcon />
        <span className="pt-[4] text-xs">최근본</span>
      </Link>
    </div>
  );
}

export default BottomNavbar;
