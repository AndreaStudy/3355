import { getProductUuidListBySameEvent } from '@/actions/event/eventActions';
import { getProductInfoList } from '@/actions/product/productActions';
import ProductRecommend from '@/components/pages/main/product/ProductRecommend';
import { productUuidDataType } from '@/types/ResponseTypes';
import React from 'react';

async function Page({ params }: { params: { productId: string } }) {
  const productUuidList: productUuidDataType[] =
    await getProductUuidListBySameEvent(params.productId);
  const productList = await getProductInfoList(productUuidList);
  return <ProductRecommend data={productList} />;
}

export default Page;
