'use client';
import React, { useEffect, useState } from 'react';
import BackIcon from '/public/assets/images/icons/backIcon.svg';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import CartStaticIcon from '@/components/ui/CartStaticIcon';

function ProductDetailHeader({ count }: { count: number }) {
  const router = useRouter();
  const pathName = usePathname();
  const query = useSearchParams();

  const handleRouter = (tabId: string) => {
    if (tabId !== query.get('tabId')) {
      router.push(`${pathName}?tabId=${tabId}`);
    }
  };

  return (
    <header className="flex justify-between items-center fixed top-0 left-0 z-10 w-full bg-white h-14 px-4 transition-transform">
      <BackIcon onClick={() => router.back()} />
      <ul className="flex gap-6">
        <li onClick={() => handleRouter('info')}>정보</li>
        <li onClick={() => handleRouter('review')}>리뷰</li>
        <li onClick={() => handleRouter('recommend')}>상품추천</li>
      </ul>
      <CartStaticIcon count={count} />
    </header>
  );
}

export default ProductDetailHeader;
