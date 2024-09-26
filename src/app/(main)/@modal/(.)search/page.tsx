'use client';
import CartStaticIcon from '@/components/ui/CartStaticIcon';
import { ChevronLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';

function Page() {
  const router = useRouter();
  const pathName = usePathname();
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.trim() !== '') {
      router.push(`/result?query=${searchValue.trim()}`, { scroll: false });
    }
  };
  return (
    <>
      {pathName === '/search' && (
        <div className="bg-white w-full h-full px-4 fixed left-0 top-0 z-[100]">
          <div className="flex justify-between items-center h-16">
            <ChevronLeft onClick={() => router.back()} />
            <input
              type="text"
              className="w-3/4 h-10 px-4 text-sm rounded-full bg-[#F5F5F5]"
              placeholder="원하시는 상품을 검색해보세요."
              onChange={handleChange}
              onKeyDown={handleKeyPress}
            />
            <CartStaticIcon count={0} />
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
