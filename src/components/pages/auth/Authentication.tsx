'use client';

import FindAuthForm from '@/components/forms/FindAuthForm';
import SignUpAuthHeader from '@/components/pages/auth/SignAuthHeader';
import { Layout } from '@/components/ui/layout';
import { AuthenticationMethodType } from '@/types/authType';
import { useState } from 'react';
import FindIdLayout from './find-id/FindIdLayout';
import FindPwLayout from './find-pw/FindPwLayout';
import { commonResType, findIdDataType } from '@/types/ResponseTypes';

const steps = ['findAuth', 'foundId', 'foundPw'];

function Authentication({
  method,
  findAuth,
}: {
  method: AuthenticationMethodType;
  findAuth: (formData: FormData) => Promise<findIdDataType>;
}) {
  const [stepLevel, setStepLevel] = useState(0);
  const [name, setName] = useState('');
  const onNext = (num: number) => {
    setStepLevel((prev) => prev + num);
  };

  const handleFindAuth = async (formData: FormData) => {
    if (method === 'find-id') {
      const result = await findAuth(formData);
      if (result.userId) {
        setName(result.userId);
        onNext(1);
      } else {
        alert(result.message);
      }
    } else if (method === 'find-pw') {
      console.log();
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
      {steps[stepLevel] === 'foundPw' && <FindPwLayout />}
    </>
  );
}

export default Authentication;
