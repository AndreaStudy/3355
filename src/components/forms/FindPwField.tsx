'use client';

import { SignUpErrorMessageType } from '@/types/RequestTypes';
import { useState } from 'react';
import SignInInput from '../pages/auth/sign-in/SignInInput';
import { signUpSchema } from '../schemas/signUpSchema';
import { Layout } from '../ui/layout';
import { Button } from '../ui/button';
import { findPwSchema } from '../schemas/findPwSchema';

function FindPwField() {
  const [errorMessages, setErrorMessages] = useState<
    Partial<SignUpErrorMessageType>
  >({});
  const [inputValues, setInputValues] = useState<{ id: string; email: string }>(
    {
      id: '',
      email: '',
    }
  );
  const [isFormValid, setIsFormValid] = useState(false);

  const clearInput = (fieldName: 'id' | 'email') => {
    setInputValues((prev) => ({ ...prev, [fieldName]: '' }));
    setErrorMessages((prev) => ({ ...prev, [fieldName]: undefined }));
    setIsFormValid(false);
  };

  const handleChange = (value: string, fieldName: 'id' | 'email') => {
    const updatedValues = { ...inputValues, [fieldName]: value };
    setInputValues(updatedValues);

    const res = findPwSchema.safeParse(updatedValues);

    if (!res.success) {
      const fieldErrors: Partial<SignUpErrorMessageType> = {};
      res.error.errors.forEach((error) => {
        const errorFieldName = error.path[0] as keyof SignUpErrorMessageType;
        fieldErrors[errorFieldName] = error.message;
      });
      setErrorMessages((prev) => ({
        ...prev,
        [fieldName]: fieldErrors[fieldName],
      }));
      setIsFormValid(false);
    } else {
      setErrorMessages((prev) => ({
        ...prev,
        [fieldName]: undefined,
      }));
      setIsFormValid(true);
    }
  };

  return (
    <>
      <SignInInput
        signInInput={{
          text: '아이디',
          value: inputValues.id,
          name: 'id',
          setValue: (value) => handleChange(value, 'id'),
          clearValue: () => clearInput('id'),
        }}
      />
      {errorMessages.id && (
        <p className="text-xs text-red-500">{errorMessages.id}</p>
      )}
      <SignInInput
        signInInput={{
          text: '이메일 주소',
          value: inputValues.email,
          name: 'email',
          setValue: (value) => handleChange(value, 'email'),
          clearValue: () => clearInput('email'),
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

export default FindPwField;
