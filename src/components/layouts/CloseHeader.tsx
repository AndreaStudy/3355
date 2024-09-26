'use client';
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

function CloseHeader() {
  const pathName = usePathname();
  const router = useRouter();

  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (pathName === '/mypage/delivery/add') {
      setTitle('배송지 등록하기');
    } else if (pathName.includes('/mypage/delivery/')) {
      setTitle('배송지 수정하기');
    } else if (pathName.includes('/reviewdetail')) {
      setTitle('리뷰 상세');
    }
  }, [pathName]);

  return (
    <header className="z-10 flex justify-center items-center relative w-full h-14 font-bold text-xl">
      <h1>{title}</h1>
      <X
        className="absolute top-[14px] right-4"
        onClick={() => router.back()}
      />
    </header>
  );
}

export default CloseHeader;
