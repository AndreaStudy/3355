import { options } from '@/app/api/auth/[...nextauth]/options';
import Footer from '@/components/layouts/Footer';
import ProductBottomNavbar from '@/components/pages/main/product/ProductBottomNavbar';
import ScrollProvider from '@/providers/ScrollProvider';
import { getServerSession } from 'next-auth';
import React from 'react';

async function Layout({
  children,
  productinfo,
  reviews,
  recommend,
  modal,
}: {
  children: React.ReactNode;
  productinfo: React.ReactNode;
  reviews: React.ReactNode;
  recommend: React.ReactNode;
  modal: React.ReactNode;
}) {
  const session = await getServerSession(options);
  const isAuth = session?.user.accessToken ? true : false;
  const token = isAuth ? session?.user.accessToken : '';
  return (
    <>
      <ScrollProvider>
        <div className="w-full h-full bg-starbucks-lightgray">
          {productinfo}
          {reviews}
          {/* todo: DB 상품 들어온 후에 주석 제거 */}
          {/* {recommend} */}
        </div>
        {children}
      </ScrollProvider>
      {modal}
      <Footer />
      <ProductBottomNavbar isAuth={isAuth} token={token} />
    </>
  );
}

export default Layout;
