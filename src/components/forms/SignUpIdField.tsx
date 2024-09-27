import { SignUpErrorMessageType } from '@/types/RequestTypes';
import { useState } from 'react';
import SignInInput from '../pages/auth/sign-in/SignInInput';
import { Layout } from '../ui/layout';
import { Button } from '../ui/button';
import { verifyId } from '@/actions/auth/signUpAction';
import { signUpIdSchema } from '../schemas/signUpIdSchema';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

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
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [showCheckmark, setShowCheckmark] = useState(false);

  const clearInput = () => {
    setInputValues({ id: '' });
    setIsDuplicateChecked(false);
    setShowCheckmark(false);
  };

  const handleChange = (value: string) => {
    setIsDuplicateChecked(false);
    setIsLoading(false);
    setShowCheckmark(false);
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
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
      setShowCheckmark(false);
    } else {
      setErrorMessages({ id: undefined });
      setIsLoading(true);
      const newTimeout = setTimeout(() => {
        handleDuplicateCheck(updatedValues.id);
      }, 3000);
      setTypingTimeout(newTimeout);
    }
  };

  const handleDuplicateCheck = async (id: string) => {
    const result = await verifyId(id);
    setIsLoading(false);

    if (result) {
      if (result.duplicated) {
        alert('이미 사용 중인 아이디입니다.');
        setShowCheckmark(false);
      } else {
        setIsDuplicateChecked(true);
        setShowCheckmark(true);

        setTimeout(() => {
          setShowCheckmark(false);
        }, 1000);
      }
    } else {
      alert('중복 확인 요청에 실패했습니다.');
    }
    formData.set('id', inputValues.id);
  };

  return (
    <>
      <div className="grid grid-cols-12">
        <div
          className={`${isLoading ? 'col-span-10' : !showCheckmark ? 'col-span-12' : 'col-span-10'}`}
        >
          <SignInInput
            signInInput={{
              text: '아이디',
              value: inputValues.id,
              name: 'email',
              setValue: handleChange,
              clearValue: clearInput,
            }}
          />
        </div>
        <div
          className={`${isLoading ? 'col-span-2' : !showCheckmark ? 'hidden' : 'col-span-2'} h-[50px] w-[50px]`}
        >
          {isLoading ? (
            <Image
              src="/assets/images/gifs/loading.gif"
              alt="loading"
              width={50}
              height={50}
            />
          ) : (
            showCheckmark && (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ x: 100 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Check size={50} />
              </motion.div>
            )
          )}
        </div>
      </div>
      {errorMessages.id && (
        <p className="text-xs text-red-500">{errorMessages.id}</p>
      )}
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
