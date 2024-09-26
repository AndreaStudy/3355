import React from 'react';
import SimpleHeader from '@/components/layouts/SimpleHeader';
import ProductHorizontalList from '@/components/pages/main/recent/ProductHorizontalList';
import {
  getProductInfoListByUuid,
  getRecentProductList,
} from '@/actions/product/productActions';
import { productInfoDataType } from '@/types/ResponseTypes';

async function Page() {
  const productUuidList: string[] = await getRecentProductList();
  const productList: productInfoDataType[] =
    await getProductInfoListByUuid(productUuidList);
  return (
    <div className="w-full h-full min-h-screen bg-starbucks-lightgray">
      <SimpleHeader title="최근 본 상품" />
      <ProductHorizontalList productList={productList} />
    </div>
  );
}

export default Page;
