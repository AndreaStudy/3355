'use client';

import { useState } from 'react';
import SignInInput from '../pages/auth/sign-in/SignInInput';

function SignInField() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const clearId = () => setId('');
  const clearPassword = () => setPassword('');
  return (
    <>
      <SignInInput
        signInInput={{
          text: '아이디',
          value: id,
          name: 'id',
          setValue: setId,
          clearValue: clearId,
        }}
      />

      <SignInInput
        signInInput={{
          text: '비밀번호',
          value: password,
          name: 'password',
          setValue: setPassword,
          clearValue: clearPassword,
        }}
      />
    </>
  );
}

export default SignInField;
