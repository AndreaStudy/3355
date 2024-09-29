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
import Funnel from '@/lib/Funnel/Funnel';

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
    <Funnel step={step}>
      <Funnel.Step name="findAuth">
        <Layout variant="authentication">
          <SignUpAuthHeader method={method} />
          <FindAuthForm method={method} handleFindAuth={handleFindAuth} />
        </Layout>
      </Funnel.Step>
      <Funnel.Step name="foundId">
        <FindIdLayout name={name} />
      </Funnel.Step>
      <Funnel.Step name="foundPw">
        <FindPwLayout data={data} />
      </Funnel.Step>
    </Funnel>
  );
}

export default Authentication;
