import BottomNavbar from '@/components/layouts/BottomNavbar';
import Footer from '@/components/layouts/Footer';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
      <BottomNavbar />
    </>
  );
}

export default Layout;
