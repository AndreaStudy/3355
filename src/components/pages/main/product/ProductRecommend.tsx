import Product from '@/components/cards/Product';
import { productInfoDataType } from '@/types/ResponseTypes';
import React from 'react';

function ProductRecommend({ data }: { data: productInfoDataType[] }) {
  return (
    <section id="recommend" className="mt-4 py-8 px-4 bg-white mb-4">
      <h1 className="text-lg font-bold">추천상품</h1>
      <div className="pt-4 overflow-x-auto flex">
        {data.map((product) => {
          return (
            <Product key={product.productUuid} product={product} size="md" />
          );
        })}
      </div>
    </section>
  );
}

export default ProductRecommend;
