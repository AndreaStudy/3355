import { commonResType, couponDataType } from '@/types/ResponseTypes';

export const couponData: commonResType<couponDataType[]> = {
  HttpStatus: 'ok',
  isSuccess: true,
  code: 200,
  message: 'success',
  result: [
    {
      couponId: '1',
      discount: 5,
      available: false,
      couponTitle: '추석 기획전 5%할인_1',
      startDate: '2024.09.02 10:00',
      endDate: '2024.09.18 23:59',
      condition: '50,000 이상 결제 시 사용 가능, 최대 10,000원 할인',
    },
    {
      couponId: '2',
      discount: 5000,
      available: false,
      couponTitle: '회원가입 기념 쿠폰',
      startDate: '2024.09.02 10:00',
      endDate: '2024.9.30 23:59',
      condition: '30,000 이상 결제 시 사용 가능, 최대 5,000원 할인',
    },
    {
      couponId: '3',
      discount: 10,
      available: false,
      couponTitle: '전품목 10% 할인 쿠폰',
      startDate: '2024.09.20 10:00',
      endDate: '2024.10.30 23:59',
      condition: '50,000 이상 결제 시 사용 가능, 최대 10,000원 할인',
    },
    {
      couponId: '4',
      discount: 3000,
      available: false,
      couponTitle: '배송비 3000원 할인 쿠폰',
      startDate: '2024.09.22 10:00',
      endDate: '2024.12.31 23:59',
      condition: '30,000 이상 결제 시 사용 가능, 최대 10,000원 할인',
    },
  ],
};
