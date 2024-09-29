import ProductContent from '@/components/cards/ProductContent';
import ProductSkeleton from '@/components/skeletons/ProductSkeleton';
import React, { Suspense } from 'react';

function ProductListServer({ productUuidList }: { productUuidList: string[] }) {
  return (
    <div className="flex flex-wrap justify-between p-4">
      {productUuidList.map((productUuid) => {
        return (
          <Suspense key={productUuid} fallback={<ProductSkeleton />}>
            <ProductContent productUuid={productUuid} size="xl" />
          </Suspense>
        );
      })}
    </div>
  );
}

export default ProductListServer;
