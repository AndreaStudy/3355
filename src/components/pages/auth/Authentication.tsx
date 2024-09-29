'use client';

import FindAuthForm from '@/components/forms/FindAuthForm';
import SignUpAuthHeader from '@/components/pages/auth/SignAuthHeader';
import { Layout } from '@/components/ui/layout';
import { AuthenticationMethodType } from '@/types/authType';
import { useState } from 'react';
import FindIdLayout from './find-id/FindIdLayout';
import FindPwLayout from './find-pw/FindPwLayout';
import { findPwDataType } from '@/types/ResponseTypes';
import { findId, findPw } from '@/actions/auth/signUpAction';
import useFunnel from '@/lib/Funnel/useFunnel';
import FunnelProvider from '@/lib/Funnel/FunnelProvider';

const steps = ['findAuth', 'foundId', 'foundPw'];

function Authentication({ method }: { method: AuthenticationMethodType }) {
  const [name, setName] = useState('');
  const [data, setData] = useState<findPwDataType>();
  const { step, onNextStep } = useFunnel({ steps });

  const handleFindAuth = async (formData: FormData) => {
    if (method === 'find-id') {
      const result = await findId(formData);
      if (result.userId) {
        setName(result.userId);
        onNextStep(1);
      } else {
        alert(result.message);
      }
    } else if (method === 'find-pw') {
      const result = await findPw(formData);
      if (result.accessToken) {
        setData(result);
        onNextStep(2);
      } else {
        alert('아이디 또는 이메일이 일치하지 않습니다.');
      }
    }
  };

  return (
    <FunnelProvider step={step}>
      <FunnelProvider.Step name="findAuth">
        <Layout variant="authentication">
          <SignUpAuthHeader method={method} />
          <FindAuthForm method={method} handleFindAuth={handleFindAuth} />
        </Layout>
      </FunnelProvider.Step>
      <FunnelProvider.Step name="foundId">
        <FindIdLayout name={name} />
      </FunnelProvider.Step>
      <FunnelProvider.Step name="foundPw">
        <FindPwLayout data={data} />
      </FunnelProvider.Step>
    </FunnelProvider>
  );
}

export default Authentication;
