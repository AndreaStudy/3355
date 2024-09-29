import React from 'react';
import SimpleHeader from '@/components/layouts/SimpleHeader';
import { getRecentProductList } from '@/actions/product/productActions';
import ProductHorizontalSection from '@/components/pages/main/recent/ProductHorizontalSection';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

async function Page() {
  const session = await getServerSession(options);
  const productUuidList = await getRecentProductList(session?.user.accessToken);
  return (
    <div className="w-full h-full min-h-screen bg-starbucks-lightgray">
      <SimpleHeader title="최근 본 상품" />
      <ProductHorizontalSection productUuidList={productUuidList} />
    </div>
  );
}

export default Page;
