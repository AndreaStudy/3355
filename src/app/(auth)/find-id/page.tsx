import { findId } from '@/actions/auth/signUpAction';
import Authentication from '@/components/pages/auth/Authentication';
import { AuthenticationMethodType } from '@/types/authType';
import React from 'react';

export default function Page() {
  return (
    <Authentication
      method={AuthenticationMethodType.FindId}
      findAuth={findId}
    />
  );
}
