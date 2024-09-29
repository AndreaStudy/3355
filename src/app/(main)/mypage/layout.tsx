import { getCartCount } from '@/actions/cart/cartAction';
import { options } from '@/app/api/auth/[...nextauth]/options';
import BasicHeader from '@/components/layouts/BasicHeader';
import BottomNavbar from '@/components/layouts/BottomNavbar';
import { getServerSession } from 'next-auth';
import React from 'react';

async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(options);
  const isAuth = session?.user ? true : false;
  const count = isAuth ? await getCartCount(session?.user.accessToken) : 0;
  return (
    <>
      <BasicHeader count={count} />
      <main>{children}</main>
      <BottomNavbar />
    </>
  );
}

export default Layout;
