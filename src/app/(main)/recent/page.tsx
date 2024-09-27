import React from 'react';
import SimpleHeader from '@/components/layouts/SimpleHeader';
import { getRecentProductList } from '@/actions/product/productActions';
import ProductHorizontalSection from '@/components/pages/main/recent/ProductHorizontalSection';

async function Page() {
  const productUuidList = await getRecentProductList();
  return (
    <div className="w-full h-full min-h-screen bg-starbucks-lightgray">
      <SimpleHeader title="최근 본 상품" />
      <ProductHorizontalSection productUuidList={productUuidList} />
    </div>
  );
}

export default Page;
