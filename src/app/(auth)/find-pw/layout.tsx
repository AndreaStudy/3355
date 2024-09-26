import AuthServiceHeader from '@/components/layouts/AuthServiceHeader';
import React from 'react';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthServiceHeader />
      {children}
    </>
  );
}

export default layout;
