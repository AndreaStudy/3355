'use client';

import { Button } from '../ui/button';
import { Layout } from '../ui/layout';
import { signIn } from 'next-auth/react';
import SignInLinkList from '../pages/auth/sign-in/SignInLinkList';
import SignInHeader from '../pages/auth/sign-in/SignInHeader';
import SignInField from './SIgnInField';
import SignAuthWithKakao from '../pages/auth/SignAuthWithKakao';

function SignInForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    signIn('credentials', {
      id: formData.get('id') as string,
      password: formData.get('password') as string,
      callbackUrl: '/',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md p-6 rounded-lg mx-auto mt-10 text-black"
    >
      <SignInHeader />
      <SignInField />
      <SignInLinkList />

      <Layout variant="submitDiv">
        <Button size={'submit'} type="submit">
          로그인
        </Button>
        <SignAuthWithKakao />
      </Layout>
    </form>
  );
}

export default SignInForm;
