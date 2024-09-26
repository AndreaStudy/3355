'use client';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';

function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('query') as string;
  const [searchValue, setSearchValue] = useState<string>(searchQuery);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/result?query=${searchValue}`, { scroll: false });
    }
  };

  return (
    <div className="flex px-4">
      <input
        type="text"
        className="relative w-full h-10 px-4 text-sm rounded-full bg-[#F5F5F5]"
        placeholder="원하시는 상품을 검색해보세요."
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <button
        className="absolute right-8 p-2"
        onClick={() =>
          router.push(`/result?query=${searchValue}`, { scroll: false })
        }
      >
        <Search className="stroke-gray-500 w-5" />
      </button>
    </div>
  );
}

export default SearchInput;
