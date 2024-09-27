import Product from '@/components/cards/Product';
import ProductSkeleton from '@/components/skeletons/ProductSkeleton';
import { productUuidDataType } from '@/types/ResponseTypes';
import React, { Suspense } from 'react';

function ProductRecommend({
  productUuidList,
}: {
  productUuidList: productUuidDataType[];
}) {
  return (
    <section id="recommend" className="mt-4 py-8 px-4 bg-white mb-4">
      <h1 className="text-lg font-bold">추천상품</h1>
      <div className="pt-4 overflow-x-auto flex">
        {productUuidList.map((productUuid) => {
          return (
            <Suspense
              key={productUuid.productUuid}
              fallback={<ProductSkeleton />}
            >
              <Product productUuid={productUuid.productUuid} size="md" />
            </Suspense>
          );
        })}
      </div>
    </section>
  );
}

export default ProductRecommend;
