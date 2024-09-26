'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function LinkNavUiWithIcon({
  href,
  text,
  isIcon,
  isHistoryBack,
  icon,
}: {
  href?: string;
  text?: string;
  isIcon?: boolean;
  isHistoryBack?: boolean;
  icon?: React.ReactNode;
}) {
  const router = useRouter();
  const handleRouter = () => {
    if (isHistoryBack) {
      router.back();
      return;
    }
    if (href) router.push(href);
  };
  return <li onClick={handleRouter}>{icon}</li>;
}
