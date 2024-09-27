import React from 'react';
import { Skeleton } from '../ui/skeleton';

function HorizontalSkeleton() {
  return (
    <div className="flex gap-2 w-72 h-28">
      <Skeleton className="w-28 h-full" />
      <div className="flex flex-col w-full gap-1">
        <Skeleton className="h-1/3 rounded-sm" />
        <Skeleton className="h-2/3 rounded-sm" />
      </div>
    </div>
  );
}

export default HorizontalSkeleton;
