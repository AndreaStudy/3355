import { signUpIntroData } from '@/datas/signUpIntroDatas';
import { commonResType, signUpIntroDataType } from '@/types/ResponseTypes';

export async function getSignUpInroData() {
  'use server';
  const res: commonResType<signUpIntroDataType[]> = signUpIntroData;
  if (res.HttpStatus === 'ok') {
    return res.result;
  }

  return null;
}
