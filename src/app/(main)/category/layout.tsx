import BottomNavbar from '@/components/layouts/BottomNavbar';
import Footer from '@/components/layouts/Footer';
import MainPageHeader from '@/components/layouts/MainPageHeader';
import ScrollTopButton from '@/components/ui/ScrollTopButton';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainPageHeader />
      {children}
      <Footer />
      <BottomNavbar />
    </>
  );
}

export default Layout;
