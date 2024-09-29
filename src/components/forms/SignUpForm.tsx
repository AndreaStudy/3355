'use client';

import { signUpIntroDataType } from '@/types/ResponseTypes';
import SignUpField from './SignUpField';
import SignUpIntroField from './SignUpIntroField';
import { useState } from 'react';
import SignUpHeader from '../pages/auth/sign-up/SignUpHeader';
import SignUpEmailField from './SignUpEmailField';
import { useRouter } from 'next/navigation';
import SignUpIdField from './SignUpIdField';
import useFunnel from '@/lib/Funnel/useFunnel';
import Funnel from '@/lib/Funnel/Funnel';
import { createAuth } from '@/actions/auth/signUpAction';

const steps = ['TermsAgree', 'InputEmail', 'InputId', 'SignUpInfo'];

function SignUpForm({ items }: { items: signUpIntroDataType[] }) {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>(new FormData());

  const { level, step, onNextStep } = useFunnel({ steps });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await createAuth(formData);
    if (res.code === 200) {
      router.push('/sign-in');
    } else if (res.code === 2101) {
      alert(res.message);
    } else {
      alert('서버에 알 수 없는 오류가 발생했습니다. 다시 시도해 주십시오.');
    }
  };

  return (
    <>
      <SignUpHeader steps={steps} stepLevel={level} />
      <form
        className="w-full max-w-md rounded-lg mx-auto mt-10 text-black"
        onSubmit={handleSubmit}
      >
        <Funnel step={step}>
          <Funnel.Step name="TermsAgree">
            <SignUpIntroField items={items} onNext={onNextStep} />
          </Funnel.Step>
          <Funnel.Step name="InputEmail">
            <SignUpEmailField onNext={onNextStep} formData={formData} />
          </Funnel.Step>
          <Funnel.Step name="InputId">
            <SignUpIdField onNext={onNextStep} formData={formData} />
          </Funnel.Step>
          <Funnel.Step name="SignUpInfo">
            <SignUpField formData={formData} />
          </Funnel.Step>
        </Funnel>
      </form>
    </>
  );
}

export default SignUpForm;
