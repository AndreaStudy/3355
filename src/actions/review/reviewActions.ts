'use server';

import {
  commonResType,
  imageDataType,
  infiniteResType,
  infiniteResultType,
  productReviewUuidDataType,
  reviewDataType,
  reviewItemDataType,
} from '@/types/ResponseTypes';
import { getAllImageData } from '../image/imageActions';

export async function getReviewList(
  productUuid: string,
  pageNum: number = 0,
  pageSize: number = 20
): Promise<reviewDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/review/${productUuid}/allReviewsOfProduct?page=${pageNum}&size=${pageSize}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<
    infiniteResultType<reviewDataType[]>
  >;
  return data.result?.content as reviewDataType[];
}

// todo: 백엔드 url, 데이터 타입 변경 후 수정 필요
export async function getMediaReviewList(
  productUuid: string,
  pageNum: number = 0,
  pageSize: number = 20
): Promise<reviewDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/review/allReviewsHaveMediaOfProduct?page=${pageNum}&size=${pageSize}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<
    infiniteResultType<reviewDataType[]>
  >;
  return data.result?.content as reviewDataType[];
}

export async function getReviewItem(
  reviewUuid: string
): Promise<reviewItemDataType> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/review/${reviewUuid}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<reviewItemDataType>;
  return data.result as reviewItemDataType;
}

// 기본 리뷰 정보 + 이미지 추가
export async function getReviewIncludeImageList(reviewList: reviewDataType[]) {
  const updatedReviewList = await Promise.all(
    reviewList.map(async (review) => {
      const imagePath: imageDataType[] = await getAllImageData(
        review.reviewUuid
      );
      return { ...review, images: imagePath };
    })
  );
  return updatedReviewList;
}

export async function getBestReviews(): Promise<productReviewUuidDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/review/bestReviews`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<
    infiniteResultType<productReviewUuidDataType[]>
  >;
  return data.result?.content as productReviewUuidDataType[];
}
