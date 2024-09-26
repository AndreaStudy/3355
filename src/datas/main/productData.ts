import { commonResType, productBasicDataType } from '@/types/ResponseTypes';

export const productData: commonResType<productBasicDataType> = {
  HttpStatus: 'ok',
  isSuccess: true,
  code: 200,
  message: 'success',
  result: {
    productName: '이건 더미',
    productDescription:
      '이건 더미 설명입니다.이건 더미 설명입니다.이건 더미 설명입니다.이건 더미 설명입니다.이건 더미 설명입니다.',
    productInfo:
      '이건 더미 인포입니다.이건 더미 인포입니다.이건 더미 인포입니다.이건 더미 인포입니다.이건 더미 인포입니다.이건 더미 인포입니다.이건 더미 인포입니다.이건 더미 인포입니다.이건 더미 인포입니다.이건 더미 인포입니다.이건 더미 인포입니다.이건 더미 인포입니다.이건 더미 인포입니다.이건 더미 인포입니다.이건 더미 인포입니다.',
  },
};
