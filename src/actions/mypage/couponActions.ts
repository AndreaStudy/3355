import { couponData } from '@/datas/mypage/couponData';
import { commonResType, couponDataType } from '@/types/ResponseTypes';

export async function getMyCouponData() {
  'use server';
  const res: commonResType<couponDataType[]> = couponData;
  if (res.HttpStatus === 'ok') {
    return res.result;
  }

  return null;
}

export async function getCouponData() {
  'use server';
  const res: commonResType<couponDataType[]> = couponData;
  if (res.HttpStatus === 'ok') {
    return res.result;
  }

  return null;
}
