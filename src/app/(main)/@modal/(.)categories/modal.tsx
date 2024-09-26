'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

export default function HamburgerCategoryModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <>
      {pathName === '/categories' && (
        <dialog className="fixed top-0 left-0 w-full h-full overflow-hidden flex flex-col items-center z-20 bg-black bg-opacity-50">
          {children}
        </dialog>
      )}
    </>
  );
}
