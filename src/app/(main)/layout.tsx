import ScrollTopButton from '@/components/ui/ScrollTopButton';
import React from 'react';

function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
      <ScrollTopButton />
    </>
  );
}

export default Layout;
