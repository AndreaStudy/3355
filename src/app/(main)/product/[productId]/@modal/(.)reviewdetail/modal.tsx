import CloseHeader from '@/components/layouts/CloseHeader';
import React from 'react';

export default function ReviewDetailModal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <dialog
      open
      className="fixed top-0 left-0 w-full h-full overflow-hidden flex flex-col items-center z-50"
    >
      <CloseHeader />
      {children}
    </dialog>
  );
}
