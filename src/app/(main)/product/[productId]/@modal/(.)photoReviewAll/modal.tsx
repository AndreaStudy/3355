import SimpleHeader from '@/components/layouts/SimpleHeader';
import React from 'react';

export default function PhotoReviewAllModal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <dialog
      open
      className="fixed top-0 left-0 w-full h-full overflow-hidden flex flex-col items-center z-50"
    >
      <SimpleHeader title="포토&동영상 전체" />
      <div className="flex-1 w-full overflow-y-auto">{children}</div>
    </dialog>
  );
}
