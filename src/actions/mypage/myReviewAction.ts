import { myReviewListData } from '@/datas/mypage/myReviewData';
import { commonResType, myReviewDataType } from '@/types/ResponseTypes';

export async function getMyReviewListData() {
  'use server';
  const res: commonResType<myReviewDataType[]> = myReviewListData;
  if (res.HttpStatus === 'ok') {
    return res.result;
  }

  return null;
}
