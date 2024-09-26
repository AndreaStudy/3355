import { commonResType, signUpIntroDataType } from '@/types/ResponseTypes';

export const signUpIntroData: commonResType<signUpIntroDataType[]> = {
  HttpStatus: 'ok',
  isSuccess: true,
  code: 200,
  message: 'success',
  result: [
    {
      id: '1',
      label: '[필수] 이용약관 동의',
    },
    {
      id: '2',
      label: '[필수] 개인정보 수집 및 이용동의',
    },
    {
      id: '3',
      label: '[필수] 스타벅스 카드 이용약관',
    },
    {
      id: '4',
      label: '[선택] 광고성 정보 수신 동의',
    },
    {
      id: '5',
      label: 'E-mail',
    },
    {
      id: '6',
      label: 'SMS',
    },
  ],
};
