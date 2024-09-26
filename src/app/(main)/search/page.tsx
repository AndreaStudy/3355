'use client';
import CartStaticIcon from '@/components/ui/CartStaticIcon';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

function Page() {
  const router = useRouter();
  return (
    <div className="bg-white w-full h-full px-4 fixed left-0 top-0 z-[100]">
      <div className="flex justify-between items-center h-16">
        <ChevronLeft onClick={() => router.back()} />
        <input
          type="text"
          className="w-3/4 h-10 px-4 text-sm rounded-full bg-[#F5F5F5]"
          placeholder="원하시는 상품을 검색해보세요."
        />
        <CartStaticIcon count={0} />
      </div>
    </div>
  );
}

export default Page;
