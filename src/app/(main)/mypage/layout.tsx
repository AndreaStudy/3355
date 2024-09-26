import BasicHeader from '@/components/layouts/BasicHeader';
import BottomNavbar from '@/components/layouts/BottomNavbar';
import ScrollTopButton from '@/components/ui/ScrollTopButton';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BasicHeader />
      <main>{children}</main>
      <BottomNavbar />
    </>
  );
}

export default Layout;
