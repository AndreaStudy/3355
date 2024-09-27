'use server';

import {
  commonResType,
  eventItemDataType,
  eventNameDataType,
  eventUuidDataType,
  imageDataType,
  infiniteResultType,
  productUuidDataType,
} from '@/types/ResponseTypes';
import { getMainImageData } from '../image/imageActions';
import { redirect } from 'next/navigation';

export async function getEventUuidList(): Promise<eventUuidDataType[]> {
  'use server';
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/promotion/list`);
  if (!res.ok) {
    return redirect('/error?message=Failed to fetch event list');
  }
  const data = (await res.json()) as commonResType<eventUuidDataType[]>;
  return data.result as eventUuidDataType[];
}

export async function getEventName(
  promotionUuid: string
): Promise<eventNameDataType> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/promotion/${promotionUuid}/name`
  );
  if (!res.ok) {
    return redirect('/error?message=eventError');
  }
  const data = (await res.json()) as commonResType<eventNameDataType>;
  return data.result as eventNameDataType;
}

// 기획전별 상품 목록 조회
export async function getProductUuidListByEvent(
  promotionUuid: string,
  page: number = 0,
  size: number = 20
): Promise<string[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/promotion/productsOfPromotion?promotionUuid=${promotionUuid}&page=${page}&size=${size}`
  );
  if (!res.ok) {
    return redirect(
      '/error?message=Failed to fetch product uuid list by event'
    );
  }
  const data = (await res.json()) as commonResType<
    infiniteResultType<string[]>
  >;
  if (data.result === null) return [];
  return data.result.content as string[];
}

// 특정 상품에 대해 같은 기획전에 속하는 상품 목록
export async function getProductUuidListBySameEvent(productUuid: string) {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/promotion/${productUuid}/samePromotionProducts`
  );
  if (!res.ok) {
    return redirect(
      '/error?message=Failed to fetch product uuid list by same event'
    );
  }
  const data = (await res.json()) as commonResType<productUuidDataType[]>;
  if (data.result === null) return [];
  return data.result as productUuidDataType[];
}

export async function getEventItem(
  eventUuid: eventUuidDataType
): Promise<eventItemDataType> {
  const [eventName, image] = await Promise.all([
    getEventName(eventUuid.promotionUuid),
    getMainImageData(eventUuid.promotionUuid),
  ]);

  return { eventName: eventName.promotionName, image: image };
}
