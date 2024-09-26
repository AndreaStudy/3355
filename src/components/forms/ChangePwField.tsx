'use client';

import { useState } from 'react';
import SignInInput from '../pages/auth/sign-in/SignInInput';
import { ChangePwRequestType } from '@/types/RequestTypes';
import { changePwSchema } from '../schemas/changePwSchema';

function ChangePwField() {
  const [inputValues, setInputValues] = useState<ChangePwRequestType>({
    password: '',
    confirmPassword: '',
  });

  const [errorMessages, setErrorMessages] = useState<
    Partial<ChangePwRequestType>
  >({});

  const clearPassword = () =>
    setInputValues((prev) => ({ ...prev, password: '' }));

  const clearConfirmPassword = () =>
    setInputValues((prev) => ({ ...prev, confirmPassword: '' }));

  const handleChange = (name: keyof ChangePwRequestType) => (value: string) => {
    const updatedValues = {
      ...inputValues,
      [name]: value,
    };
    setInputValues(updatedValues);

    const res = changePwSchema.safeParse(updatedValues);

    if (!res.success) {
      const fieldErrors: Partial<ChangePwRequestType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof ChangePwRequestType;
        fieldErrors[fieldName] = error.message;
      });
      setErrorMessages((prev) => ({ ...prev, [name]: fieldErrors[name] }));
    } else {
      setErrorMessages((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  return (
    <>
      <SignInInput
        signInInput={{
          text: '새 비밀번호 (10~20자리 이내)',
          value: inputValues.password,
          name: 'password',
          setValue: (value) => handleChange('password')(value),
          clearValue: clearPassword,
        }}
      />
      {errorMessages.password && (
        <p className="text-xs text-red-500">{errorMessages.password}</p>
      )}
      <SignInInput
        signInInput={{
          text: '새 비밀번호 확인',
          value: inputValues.confirmPassword,
          name: 'password',
          setValue: (value) => handleChange('confirmPassword')(value),
          clearValue: clearConfirmPassword,
        }}
      />
      {errorMessages.confirmPassword && (
        <p className="text-xs text-red-500">{errorMessages.confirmPassword}</p>
      )}
    </>
  );
}

export default ChangePwField;
