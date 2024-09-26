'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ArrowLeftIcon, X } from 'lucide-react';

export default function AuthServiceHeader() {
  const router = useRouter();
  const pathName = usePathname();

  const [state, setState] = useState<string>('');

  useEffect(() => {
    if (pathName.includes('/found')) {
      setState('push');
    } else {
      setState('back');
    }
  });

  return (
    <header className="flex flex-col justify-center w-full h-[40px]">
      <nav>
        <ul className="flex">
          {state === 'back' ? (
            <li onClick={() => router.back()}>
              <ArrowLeftIcon className="ml-2" />
            </li>
          ) : (
            <li onClick={() => router.push('/sign-in')}>
              <X className="ml-2" />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
