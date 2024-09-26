import SignInForm from '@/components/forms/SignInForm';
import { Layout } from '@/components/ui/layout';
import React from 'react';

export default function Page() {
  return (
    <Layout variant="signIn">
      <SignInForm />
    </Layout>
  );
}
