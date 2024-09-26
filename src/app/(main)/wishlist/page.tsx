import React from 'react';
import SimpleHeader from '@/components/layouts/SimpleHeader';
import ProductHorizontalList from '@/components/pages/main/recent/ProductHorizontalList';
import { getWishList } from '@/actions/like/likeActions';
import { getProductInfoListByUuid } from '@/actions/product/productActions';
import { productInfoDataType } from '@/types/ResponseTypes';

async function Page() {
  const uuids = await getWishList();
  const productList = await getProductInfoListByUuid(uuids);
  return (
    <div className="w-full h-full min-h-screen bg-starbucks-lightgray">
      <SimpleHeader title="좋아요" />
      <ProductHorizontalList productList={productList} />
    </div>
  );
}

export default Page;
