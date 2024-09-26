import { SignUpErrorMessageType } from '@/types/RequestTypes';
import { useState } from 'react';
import SignInInput from '../pages/auth/sign-in/SignInInput';
import { Layout } from '../ui/layout';
import { Button } from '../ui/button';
import { verifyEmail, verifyId } from '@/actions/auth/signUpAction';
import { signUpIdSchema } from '../schemas/signUpIdSchema';

function SignUpIdField({
  onNext,
  formData,
}: {
  onNext: () => void;
  formData: FormData;
}) {
  const [errorMessages, setErrorMessages] = useState<
    Partial<SignUpErrorMessageType>
  >({});
  const [inputValues, setInputValues] = useState<{ id: string }>({
    id: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false);

  const clearInput = () => {
    setInputValues({ id: '' });
    setIsDuplicateChecked(false);
  };

  const handleChange = (value: string) => {
    const updatedValues = { id: value };
    setInputValues(updatedValues);

    const res = signUpIdSchema.safeParse(updatedValues);

    if (!res.success) {
      const fieldErrors: Partial<SignUpErrorMessageType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof SignUpErrorMessageType;
        fieldErrors[fieldName] = error.message;
      });
      setErrorMessages({ id: fieldErrors.id });
      setIsFormValid(false);
    } else {
      setErrorMessages({ id: undefined });
      setIsFormValid(true);
    }
  };

  const handleDuplicateCheck = async () => {
    const result = await verifyId(inputValues.id);

    if (result) {
      if (result.duplicated) {
        alert('이미 사용 중인 아이디입니다.');
        setIsDuplicateChecked(false);
      } else {
        setIsDuplicateChecked(true);
        alert('사용가능한 아이디입니다.');
      }
    } else {
      alert('중복 확인 요청에 실패했습니다.');
    }
    formData.set('id', inputValues.id);
  };

  return (
    <>
      <SignInInput
        signInInput={{
          text: '아이디',
          value: inputValues.id,
          name: 'id',
          setValue: handleChange,
          clearValue: clearInput,
        }}
      />
      {errorMessages.id && (
        <p className="text-xs text-red-500">{errorMessages.id}</p>
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

export default SignUpIdField;
