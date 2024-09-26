'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import BackIcon from '/public/assets/images/icons/backIcon.svg';
import SearchIcon from '/public/assets/images/icons/searchIcon.svg';
import Link from 'next/link';
import Image from 'next/image';
import CartStaticIcon from '../ui/CartStaticIcon';

function BasicHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const router = useRouter();
  return (
    <div>
      <header className="w-full flex justify-between px-4 items-center h-14 bg-white">
        <div className="flex items-center gap-3">
          <BackIcon onClick={() => router.back()} />
          <Link href={'/'}>
            <Image
              src="/assets/images/logos/starbucks-text-black.png"
              alt="starbucks text black"
              width={150}
              height={30}
            />
          </Link>
        </div>
        <div className="flex gap-3">
          <SearchIcon onClick={toggleSearch} fill="black" />
          <CartStaticIcon count={10} />
        </div>
      </header>
    </div>
  );
}

export default BasicHeader;
