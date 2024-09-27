import { getProductUuidListBySameEvent } from '@/actions/event/eventActions';
import ProductRecommend from '@/components/pages/main/product/ProductRecommend';
import React from 'react';

async function Page({ params }: { params: { productId: string } }) {
  const productUuidList = await getProductUuidListBySameEvent(params.productId);
  return <ProductRecommend productUuidList={productUuidList} />;
}

export default Page;
