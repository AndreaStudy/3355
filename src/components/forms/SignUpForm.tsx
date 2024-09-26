'use client';

import { commonResType, signUpIntroDataType } from '@/types/ResponseTypes';
import SignUpField from './SignUpField';
import SignUpIntroField from './SignUpIntroField';
import { useState } from 'react';
import SignUpHeader from '../pages/auth/sign-up/SignUpHeader';
import SignUpEmailField from './SignUpEmailField';
import { useRouter } from 'next/navigation';
import SignUpIdField from './SignUpIdField';

const steps = ['TermsAgree', 'InputEmail', 'InputId', 'SignUpInfo'];

function SignUpForm({
  items,
  createAuth,
}: {
  items: signUpIntroDataType[];
  createAuth: (formData: FormData) => Promise<commonResType<null>>;
}) {
  const router = useRouter();

  const [stepLevel, setStepLevel] = useState(0);
  const [formData, setFormData] = useState<FormData>(new FormData());
  const onNext = () => {
    setStepLevel((prev) => prev + 1);
  };

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
      <SignUpHeader steps={steps} stepLevel={stepLevel} />
      <form
        className="w-full max-w-md rounded-lg mx-auto mt-10 text-black"
        onSubmit={handleSubmit}
      >
        {steps[stepLevel] === 'TermsAgree' && (
          <SignUpIntroField items={items} onNext={onNext} />
        )}
        {steps[stepLevel] === 'InputEmail' && (
          <SignUpEmailField onNext={onNext} formData={formData} />
        )}
        {steps[stepLevel] === 'InputId' && (
          <SignUpIdField onNext={onNext} formData={formData} />
        )}
        {steps[stepLevel] === 'SignUpInfo' && (
          <SignUpField formData={formData} />
        )}
      </form>
    </>
  );
}

export default SignUpForm;
