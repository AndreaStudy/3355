import { orderDeliveryData } from '@/datas/mypage/orderDeliveryData';
import { commonResType, orderDeliveryDataType } from '@/types/ResponseTypes';

export async function getOrderDeliveryData() {
  'use server';
  const res: commonResType<orderDeliveryDataType[]> = orderDeliveryData;
  if (res.HttpStatus === 'ok') {
    return res.result;
  }

  return null;
}
