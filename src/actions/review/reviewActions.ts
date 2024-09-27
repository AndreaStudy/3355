'use server';

import {
  commonResType,
  infiniteResultType,
  productReviewUuidDataType,
  reviewDataType,
  reviewItemDataType,
} from '@/types/ResponseTypes';

export async function getReviewList(
  productUuid: string,
  pageNum: number = 0,
  pageSize: number = 20
): Promise<reviewDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/review/${productUuid}/allReviewsOfProduct?page=${pageNum}&size=${pageSize}`
  );
  console.log(res);
  if (res.status === 404) return [];
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  const data = (await res.json()) as commonResType<
    infiniteResultType<reviewDataType[]>
  >;
  return data.result.content as reviewDataType[];
}

export async function getMediaReviewList(
  productUuid: string,
  pageNum: number = 0,
  pageSize: number = 20
): Promise<reviewDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/review/allReviewsHaveMediaOfProduct?productUuid=${productUuid}&page=${pageNum}&pageSize=${pageSize}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<
    infiniteResultType<reviewDataType[]>
  >;
  if (data.result === null) return [];
  return data.result.content as reviewDataType[];
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
  if (data.result === null) return [];
  return data.result.content as productReviewUuidDataType[];
}
