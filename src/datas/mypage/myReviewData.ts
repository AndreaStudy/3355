import { commonResType, myReviewDataType } from '@/types/ResponseTypes';

export const myReviewListData: commonResType<myReviewDataType[]> = {
  HttpStatus: 'ok',
  isSuccess: true,
  code: 200,
  message: 'success',
  result: [
    {
      content: '이거 굉장히 별로입니다.',
      reviewUuid: 'Rlkds038Dsakrj092424132',
      reviewScore: 4,
      productUuid: 'ljefnjdhrowlsk42ksi40',
      regDate: '2024-09-12',
      modDate: '2024-09-12',
    },
    {
      content: '정말 만족스러운 제품이에요!',
      reviewUuid: 'Rlkds038Dsakrj092424133',
      reviewScore: 5,
      productUuid: 'ljefnjdhrowlsk42ksi41',
      regDate: '2024-09-11',
      modDate: '2024-09-11',
    },
    {
      content: '가격대비 성능이 좋습니다.',
      reviewUuid: 'Rlkds038Dsakrj092424134',
      reviewScore: 4,
      productUuid: 'ljefnjdhrowlsk42ksi42',
      regDate: '2024-09-10',
      modDate: '2024-09-10',
    },
    {
      content: '별로 추천하고 싶지 않아요.',
      reviewUuid: 'Rlkds038Dsakrj092424135',
      reviewScore: 2,
      productUuid: 'ljefnjdhrowlsk42ksi43',
      regDate: '2024-09-09',
      modDate: '2024-09-09',
    },
    {
      content: '아주 훌륭한 품질입니다!',
      reviewUuid: 'Rlkds038Dsakrj092424136',
      reviewScore: 5,
      productUuid: 'ljefnjdhrowlsk42ksi44',
      regDate: '2024-09-08',
      modDate: '2024-09-08',
    },
  ],
};
