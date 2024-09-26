import { fetchCartItemList } from '@/actions/cart/cartAction';
import { options } from '@/app/api/auth/[...nextauth]/options';
import CartLayoutHeader from '@/components/layouts/CartLayoutHeader';
import CartListContainer from '@/components/pages/main/cart/CartListContainer';
import { getServerSession } from 'next-auth';
import React from 'react';

export default async function Page() {
  const session = await getServerSession(options);
  const cartItemList = await fetchCartItemList(session?.user?.accessToken);
  // const cartItemsWithDetails = await Promise.all(
  //   cartItemList.map(async (item) => {
  //     const productDetails = await fetchProductDetails(
  //       item.productUuid,
  //       session?.user?.accessToken
  //     );
  //     return {
  //       ...item,
  //       price: productDetails.price,
  //     };
  //   })
  // );
  return (
    <>
      <CartLayoutHeader />
      <main className="bg-white w-full h-full">
        <CartListContainer cartItemList={cartItemList} />
      </main>
    </>
  );
}
