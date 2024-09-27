import CartLayoutHeader from '@/components/layouts/CartLayoutHeader';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CartLayoutHeader />
      {children}
    </>
  );
}

export default Layout;
