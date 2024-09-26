import SimpleHeader from '@/components/layouts/SimpleHeader';
import React from 'react';

export default function ReviewAllModal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <dialog
      open
      className="fixed top-0 left-0 w-full h-full overflow-hidden flex flex-col items-center z-50"
    >
      <SimpleHeader title="리뷰 전체 보기" />
      <div className="flex-1 w-full overflow-y-auto">{children}</div>
    </dialog>
  );
}
