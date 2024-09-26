'use client';

import { SignUpErrorMessageType } from '@/types/RequestTypes';
import { useState } from 'react';
import SignInInput from '../pages/auth/sign-in/SignInInput';
import { Layout } from '../ui/layout';
import { Button } from '../ui/button';
import { findIdSchema } from '../schemas/findIdSchema';

function FindIdField() {
  const [errorMessages, setErrorMessages] = useState<
    Partial<SignUpErrorMessageType>
  >({});
  const [inputValues, setInputValues] = useState<{ email: string }>({
    email: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const clearInput = () => {
    setInputValues({ email: '' });
    setErrorMessages({});
    setIsFormValid(false);
  };

  const handleChange = (value: string) => {
    const updatedValues = { email: value };
    setInputValues(updatedValues);

    const res = findIdSchema.safeParse(updatedValues);

    if (!res.success) {
      const fieldErrors: Partial<SignUpErrorMessageType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof SignUpErrorMessageType;
        fieldErrors[fieldName] = error.message;
      });
      setErrorMessages(fieldErrors);
      setIsFormValid(false);
    } else {
      setErrorMessages({});
      setIsFormValid(true);
    }
  };

  return (
    <>
      <SignInInput
        signInInput={{
          text: '이메일 주소',
          value: inputValues.email,
          name: 'email',
          setValue: handleChange,
          clearValue: clearInput,
        }}
      />
      {errorMessages.email && (
        <p className="text-xs text-red-500">{errorMessages.email}</p>
      )}
      <Layout variant="submitDiv">
        <Button size={'submit'} type="submit" disabled={!isFormValid}>
          확인
        </Button>
      </Layout>
    </>
  );
}

export default FindIdField;
