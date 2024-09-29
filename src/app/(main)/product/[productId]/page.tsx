import { getCartCount } from '@/actions/cart/cartAction';
import { getProductDetailInfo } from '@/actions/product/productActions';
import { options } from '@/app/api/auth/[...nextauth]/options';
import ProductDetailHeader from '@/components/pages/main/product/ProductDetailHeader';
import { getServerSession } from 'next-auth';
import React from 'react';

async function Page() {
  const session = await getServerSession(options);
  const isAuth = session?.user.accessToken ? true : false;
  const count = isAuth ? await getCartCount(session?.user.accessToken) : 0;
  return <ProductDetailHeader count={count} />;
}

export default Page;
