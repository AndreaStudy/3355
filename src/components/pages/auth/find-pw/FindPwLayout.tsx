import ChangePwForm from '@/components/forms/ChangePwForm';
import ChangePwHeader from '@/components/pages/auth/find-pw/ChangePwHeader';
import { Layout } from '@/components/ui/layout';
import { findPwDataType } from '@/types/ResponseTypes';
import React from 'react';

function FindPwLayout({ data }: { data: findPwDataType | undefined }) {
  return (
    <>
      {data && (
        <Layout variant="findPw">
          <ChangePwHeader nickname={data.nickname} />
          <ChangePwForm token={data.accessToken} />
        </Layout>
      )}
    </>
  );
}

export default FindPwLayout;
