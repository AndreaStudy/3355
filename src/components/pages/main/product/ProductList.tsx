'use client';
import Product from '@/components/cards/Product';
import ProductSkeleton from '@/components/skeletons/ProductSkeleton';
import React, { Suspense } from 'react';

function ProductList({ productUuidList }: { productUuidList: string[] }) {
  return (
    <div className="flex flex-wrap justify-between p-4">
      {productUuidList.map((productUuid) => {
        return (
          <Suspense key={productUuid} fallback={<ProductSkeleton />}>
            <Product productUuid={productUuid} size="xl" />
          </Suspense>
        );
      })}
    </div>
  );
}

export default ProductList;
