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

const steps = ['findAuth', 'foundId', 'foundPw'];

function Authentication({ method }: { method: AuthenticationMethodType }) {
  const [stepLevel, setStepLevel] = useState(0);
  const [name, setName] = useState('');
  const onNext = (num: number) => {
    setStepLevel((prev) => prev + num);
  };
  const [data, setData] = useState<findPwDataType>();

  const handleFindAuth = async (formData: FormData) => {
    if (method === 'find-id') {
      const result = await findId(formData);
      if (result.userId) {
        setName(result.userId);
        onNext(1);
      } else {
        alert(result.message);
      }
    } else if (method === 'find-pw') {
      const result = await findPw(formData);
      if (result.accessToken) {
        setData(result);
        onNext(2);
      } else {
        alert('아이디 또는 이메일이 일치하지 않습니다.');
      }
    }
  };

  return (
    <>
      {steps[stepLevel] === 'findAuth' && (
        <Layout variant="authentication">
          <SignUpAuthHeader method={method} />
          <FindAuthForm method={method} handleFindAuth={handleFindAuth} />
        </Layout>
      )}
      {steps[stepLevel] === 'foundId' && <FindIdLayout name={name} />}
      {steps[stepLevel] === 'foundPw' && <FindPwLayout data={data} />}
    </>
  );
}

export default Authentication;
