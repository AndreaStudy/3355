import { getCartCount } from '@/actions/cart/cartAction';
import { getSearchResults } from '@/actions/search/searchActions';
import { options } from '@/app/api/auth/[...nextauth]/options';
import MainHeaderNav from '@/components/layouts/MainHeaderNav';
import SearchResultSection from '@/components/pages/main/result/SearchResultSection';
import { getServerSession } from 'next-auth';
import React from 'react';

async function Page({ searchParams }: { searchParams: { query: string } }) {
  const productUuidList: string[] = await getSearchResults({
    searchValue: searchParams.query,
  });
  const session = await getServerSession(options);
  const isAuth = session?.user ? true : false;
  const count = isAuth ? await getCartCount(session?.user.accessToken) : 0;
  return (
    <>
      <MainHeaderNav count={count} />
      <SearchResultSection
        searchValue={searchParams.query}
        productUuidList={productUuidList}
      />
    </>
  );
}

export default Page;
