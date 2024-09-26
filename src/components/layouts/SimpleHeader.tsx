'use client';
import { ChevronLeft, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

function SimpleHeader({ title }: { title: string }) {
  const router = useRouter();
  return (
    <header className="w-full h-14 p-4 relative font-semibold text-center">
      <ChevronLeft
        className="absolute top-[14px] -ml-1 text-gray-700"
        onClick={() => router.back()}
      />
      <span>{title}</span>
    </header>
  );
}

export default SimpleHeader;
