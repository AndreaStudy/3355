'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { signUpIntroDataType } from '@/types/ResponseTypes';
import { CheckedState } from '@radix-ui/react-checkbox';
import { SignUpErrorMessageType } from '@/types/RequestTypes';
import { signUpIntroSchema } from '../schemas/signUpIntroSchema';
import { Button } from '../ui/button';
import { Layout } from '../ui/layout';

function SignUpIntroField({
  items,
  onNext,
}: {
  items: signUpIntroDataType[];
  onNext: () => void;
}) {
  const [terms, setTerms] = useState<string[]>([]);
  const [errorMessages, setErrorMessages] = useState<
    Partial<SignUpErrorMessageType>
  >({});

  const handleCheckedChange = (
    item: { id: string; label: string },
    checked: CheckedState
  ) => {
    let currentTerms = [...terms];

    if (item.id === '4') {
      if (checked) {
        setTerms([...currentTerms, item.id, '5', '6']);
      } else {
        setTerms(
          currentTerms.filter(
            (value) => value !== item.id && value !== '5' && value !== '6'
          )
        );
      }
    } else {
      if (checked) {
        currentTerms.push(item.id);
      } else {
        currentTerms = currentTerms.filter((value) => value !== item.id);
      }

      if (
        !checked &&
        !currentTerms.includes(item.id === '5' ? '6' : '5') &&
        item.id !== '4'
      ) {
        currentTerms = currentTerms.filter((value) => value !== '4');
      }
      setTerms(currentTerms);
    }

    const res = signUpIntroSchema.safeParse({ terms: currentTerms });
    if (!res.success) {
      const fieldErrors: Partial<SignUpErrorMessageType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof SignUpErrorMessageType;
        fieldErrors[fieldName] = error.message;
      });
      setErrorMessages(fieldErrors);
    } else {
      setErrorMessages({});
    }
  };

  const isButtonEnabled = ['1', '2', '3'].every((id) => terms.includes(id));

  return (
    <>
      <div className="border-b-2 pb-4">
        <label>
          <Checkbox
            checked={
              items ? items.every((item) => terms.includes(item.id)) : false
            }
            onCheckedChange={(checked) => {
              const newTerms = checked ? items.map((item) => item.id) : [];
              setTerms(newTerms);
            }}
          />
          <span className="ml-2 font-bold text-md">약관 전체동의</span>
        </label>
      </div>
      <div>
        {items.map((item) => (
          <label
            key={item.id}
            className={`flex flex-row mt-2 p-1 gap-1 ${['5', '6'].includes(item.id) && 'ml-6 inline-flex'}`}
          >
            <Checkbox
              name={item.id}
              checked={terms.includes(item.id)}
              onCheckedChange={(checked) => handleCheckedChange(item, checked)}
              disabled={
                !terms.includes('4') && (item.id === '5' || item.id === '6')
              }
            />
            <span className="ml-2 font-bold text-md">{item.label}</span>
          </label>
        ))}
      </div>
      <Layout variant="submitDiv">
        <Button
          size={'submit'}
          type="button"
          onClick={onNext}
          disabled={!isButtonEnabled}
        >
          다음
        </Button>
      </Layout>
    </>
  );
}

export default SignUpIntroField;
