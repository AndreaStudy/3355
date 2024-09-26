import Product from '@/components/cards/Product';
import { productInfoDataType } from '@/types/ResponseTypes';
import React from 'react';

function ProductList({ productList }: { productList: productInfoDataType[] }) {
  return (
    <div className="flex flex-wrap justify-between p-4">
      {productList.map((product) => {
        return (
          <Product key={product.productUuid} product={product} size="xl" />
        );
      })}
    </div>
  );
}

export default ProductList;
