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
      available: true,
      couponTitle: '추석 기획전 5%할인_1',
      startDate: '2024.09.02 10:00',
      endDate: '2024.09.18 23:59',
      condition: '50,000 이상 결제 시 사용 가능, 최대 10,000원 할인',
    },
    {
      couponId: '2',
      discount: 5,
      available: false,
      couponTitle: '추석 기획전 5%할인_1',
      startDate: '2024.09.02 10:00',
      endDate: '2024.09.18 23:59',
      condition: '50,000 이상 결제 시 사용 가능, 최대 10,000원 할인',
    },
    {
      couponId: '3',
      discount: 5,
      available: true,
      couponTitle: '추석 기획전 5%할인_1',
      startDate: '2024.09.02 10:00',
      endDate: '2024.09.18 23:59',
      condition: '50,000 이상 결제 시 사용 가능, 최대 10,000원 할인',
    },
    {
      couponId: '4',
      discount: 5,
      available: true,
      couponTitle: '추석 기획전 5%할인_1',
      startDate: '2024.09.02 10:00',
      endDate: '2024.09.18 23:59',
      condition: '50,000 이상 결제 시 사용 가능, 최대 10,000원 할인',
    },
    {
      couponId: '5',
      discount: 5,
      available: true,
      couponTitle: '추석 기획전 5%할인_1',
      startDate: '2024.09.02 10:00',
      endDate: '2024.09.18 23:59',
      condition: '50,000 이상 결제 시 사용 가능, 최대 10,000원 할인',
    },
    {
      couponId: '6',
      discount: 5,
      available: true,
      couponTitle: '추석 기획전 5%할인_1',
      startDate: '2024.09.02 10:00',
      endDate: '2024.09.18 23:59',
      condition: '50,000 이상 결제 시 사용 가능, 최대 10,000원 할인',
    },
  ],
};
