import React from 'react';
import SimpleHeader from '@/components/layouts/SimpleHeader';
import { getWishList } from '@/actions/like/likeActions';
import ProductHorizontalSection from '@/components/pages/main/recent/ProductHorizontalSection';

async function Page() {
  const productUuidList = await getWishList();
  return (
    <div className="w-full h-full min-h-screen bg-starbucks-lightgray">
      <SimpleHeader title="좋아요" />
      <ProductHorizontalSection productUuidList={productUuidList} />
    </div>
  );
}

export default Page;
