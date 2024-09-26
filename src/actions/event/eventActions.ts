'use server';

import {
  commonResType,
  eventInfoDataType,
  eventNameDataType,
  eventUuidDataType,
  imageDataType,
  productUuidDataType,
} from '@/types/ResponseTypes';
import { getMainImageData } from '../image/imageActions';

export async function getEventUuidList(): Promise<eventUuidDataType[]> {
  'use server';
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/promotion/list`);
  if (!res.ok) {
    throw new Error('Failed to fetch event list');
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
    throw new Error('Failed to fetch event name');
  }
  const data = (await res.json()) as commonResType<eventNameDataType>;
  return data.result as eventNameDataType;
}

// 기획전에 따른 상품 목록 조회
export async function getProductUuidListByEvent(promotionUuid: string) {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/promotion/${promotionUuid}/products`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch product uuid list by event');
  }
  const data = (await res.json()) as commonResType<productUuidDataType[]>;
  return data.result as productUuidDataType[];
}

// 특정 상품에 대해 같은 기획전에 속하는 상품 목록
export async function getProductUuidListBySameEvent(productUuid: string) {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/promotion/${productUuid}/samePromotionProducts`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch product uuid list by same event');
  }
  const data = (await res.json()) as commonResType<productUuidDataType[]>;
  return data.result as productUuidDataType[];
}

// event info 조합
export async function getEventInfoList(eventUuidList: eventUuidDataType[]) {
  try {
    const eventInfoPromises = eventUuidList.map(async (eventUuid) => {
      const eventName: eventNameDataType = await getEventName(
        eventUuid.promotionUuid
      );
      const eventThumbnailImage: imageDataType = await getMainImageData(
        eventUuid.promotionUuid
      );
      return {
        eventUuid: eventUuid.promotionUuid,
        eventName: eventName.promotionName,
        eventThumbnailPath: eventThumbnailImage.thumbnailPath,
        eventThumbnailAlt: eventThumbnailImage.imageName,
      } as eventInfoDataType;
    });
    const eventInfoList = await Promise.all(eventInfoPromises);
    return eventInfoList;
  } catch (error) {
    throw new Error('Failed to fetch event info list');
  }
}
