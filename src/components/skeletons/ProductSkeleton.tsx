import React from 'react';
import { Skeleton } from '../ui/skeleton';

function ProductSkeleton() {
  return (
    <div className="flex flex-col gap-1 w-38">
      <Skeleton className="w-full h-28" />
      <Skeleton className="w-full h-7" />
      <Skeleton className="w-full h-16 rounded-sm" />
    </div>
  );
}

export default ProductSkeleton;
