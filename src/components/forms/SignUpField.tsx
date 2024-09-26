import { SignUpErrorMessageType } from '@/types/RequestTypes';
import { useState } from 'react';
import SignInInput from '../pages/auth/sign-in/SignInInput';
import { signUpSchema } from '../schemas/signUpSchema';
import { SignUpFieldType } from '@/types/authType';
import { Layout } from '../ui/layout';
import { Button } from '../ui/button';

function SignUpField({ formData }: { formData: FormData }) {
  const [errorMessages, setErrorMessages] = useState<
    Partial<SignUpErrorMessageType>
  >({});
  const [inputValues, setInputValues] = useState<SignUpFieldType>({
    name: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const clearInput = (name: keyof SignUpFieldType) => {
    setInputValues((prev) => ({ ...prev, [name]: '' }));
  };

  const handleChange = (name: keyof SignUpFieldType) => (value: string) => {
    const updatedValues: SignUpFieldType = {
      ...inputValues,
      [name]: value,
    };
    setInputValues(updatedValues);

    formData.set(name, value);

    const res = signUpSchema.safeParse(updatedValues);

    if (!res.success) {
      const fieldErrors: Partial<SignUpErrorMessageType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof SignUpErrorMessageType;
        fieldErrors[fieldName] = error.message;
      });
      setErrorMessages((prev) => ({ ...prev, [name]: fieldErrors[name] }));
      setIsFormValid(false);
    } else {
      setErrorMessages((prev) => ({ ...prev, [name]: undefined }));
      setIsFormValid(true);
    }
  };

  return (
    <>
      <SignInInput
        signInInput={{
          text: '이름',
          value: inputValues.name,
          name: 'name',
          setValue: (value) => handleChange('name')(value),
          clearValue: () => clearInput('name'),
        }}
      />
      {errorMessages.name && (
        <p className="text-xs text-red-500">{errorMessages.name}</p>
      )}
      <SignInInput
        signInInput={{
          text: '닉네임 (4~12자리 이내)',
          value: inputValues.nickname,
          name: 'nickname',
          setValue: (value) => handleChange('nickname')(value),
          clearValue: () => clearInput('nickname'),
        }}
      />
      {errorMessages.nickname && (
        <p className="text-xs text-red-500">{errorMessages.nickname}</p>
      )}
      <SignInInput
        signInInput={{
          text: '비밀번호 (10~20자리 이내)',
          value: inputValues.password,
          name: 'password',
          setValue: (value) => handleChange('password')(value),
          clearValue: () => clearInput('password'),
        }}
      />
      {errorMessages.password && (
        <p className="text-xs text-red-500">{errorMessages.password}</p>
      )}
      <SignInInput
        signInInput={{
          text: '비밀번호 확인',
          value: inputValues.confirmPassword,
          name: 'password',
          setValue: (value) => handleChange('confirmPassword')(value),
          clearValue: () => clearInput('confirmPassword'),
        }}
      />
      {errorMessages.confirmPassword && (
        <p className="text-xs text-red-500">{errorMessages.confirmPassword}</p>
      )}
      <Layout variant="submitDiv">
        <Button size={'submit'} type="submit" disabled={!isFormValid}>
          확인
        </Button>
      </Layout>
    </>
  );
}

export default SignUpField;
