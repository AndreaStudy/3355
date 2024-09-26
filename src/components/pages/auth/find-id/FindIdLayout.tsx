import FindIdAuth from '@/components/pages/auth/find-id/FindIdAuth';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/ui/layout';
import Link from 'next/link';
import React from 'react';

function FindIdLayout({ name }: { name: string }) {
  return (
    <Layout variant="findId">
      <FindIdAuth name={name} />
      <Layout variant="submitDiv">
        <Link href="/sign-in">
          <Button size={'submit'}>확인</Button>
        </Link>
      </Layout>
    </Layout>
  );
}

export default FindIdLayout;
