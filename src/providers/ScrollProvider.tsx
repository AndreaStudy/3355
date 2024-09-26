'use client';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function ScrollProvider({ children }: { children: React.ReactNode }) {
  const query = useSearchParams();

  useEffect(() => {
    if (query.get('tabId')) {
      smoothScrollTo();
    }
  }, [query.get('tabId')]);

  const smoothScrollTo = () => {
    const targetY = document.getElementById(
      query.get('tabId') as string
    )?.offsetTop;
    const headerOffset = 56;
    const calcY = Math.max((targetY as number) - headerOffset, 0);
    window.scrollTo({ top: calcY, behavior: 'smooth' });
  };

  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  return <>{children}</>;
}

export default ScrollProvider;
