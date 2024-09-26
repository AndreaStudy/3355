import { SignUpErrorMessageType } from '@/types/RequestTypes';
import { useState } from 'react';
import SignInInput from '../pages/auth/sign-in/SignInInput';
import { signUpSchema } from '../schemas/signUpSchema';
import { Layout } from '../ui/layout';
import { Button } from '../ui/button';
import { verifyEmail } from '@/actions/auth/signUpAction';
import { findIdSchema } from '../schemas/findIdSchema';

function SignUpEmailField({
  onNext,
  formData,
}: {
  onNext: () => void;
  formData: FormData;
}) {
  const [errorMessages, setErrorMessages] = useState<
    Partial<SignUpErrorMessageType>
  >({});
  const [inputValues, setInputValues] = useState<{ email: string }>({
    email: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false);

  const clearInput = () => {
    setInputValues({ email: '' });
    setIsDuplicateChecked(false);
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
      setErrorMessages({ email: fieldErrors.email });
      setIsFormValid(false);
    } else {
      setErrorMessages({ email: undefined });
      setIsFormValid(true);
    }
  };

  const handleDuplicateCheck = async () => {
    const result = await verifyEmail(inputValues.email);

    if (result) {
      console.log(result);
      if (result.duplicated) {
        alert('이미 사용 중인 이메일입니다.');
        setIsDuplicateChecked(false);
      } else {
        setIsDuplicateChecked(true);
        alert('사용가능한 이메일입니다.');
      }
    } else {
      alert('중복 확인 요청에 실패했습니다.');
    }
    formData.set('email', inputValues.email);
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
      <Button
        size={'submit'}
        type="button"
        onClick={handleDuplicateCheck}
        disabled={!isFormValid}
      >
        중복확인
      </Button>
      <Layout variant="submitDiv">
        <Button
          size={'submit'}
          type="button"
          onClick={onNext}
          disabled={!isDuplicateChecked}
        >
          다음
        </Button>
      </Layout>
    </>
  );
}

export default SignUpEmailField;
