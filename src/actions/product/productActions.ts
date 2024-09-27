'use server';

import {
  commonResType,
  infiniteResultType,
  productBasicDataResType,
  productBasicDataType,
  productDiscountDataType,
  productInfoDataType,
  productPriceDataType,
  productReviewSummaryDataType,
} from '@/types/ResponseTypes';
import { getMainImageData } from '../image/imageActions';

// 상품 기본 정보
export async function getProductBasicInfo(
  productUuid: string
): Promise<productBasicDataType> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/product/${productUuid}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch product basic info');
  }

  const data = (await res.json()) as commonResType<productBasicDataResType>;
  let imgList;
  if (data.result.productDescription !== null) {
    imgList = data.result.productDescription.split(',');
  } else {
    imgList = [''];
  }
  return {
    productName: data.result.productName,
    productDescription: imgList,
    productInfo: data.result.productInfo,
  } as productBasicDataType;
}

// 가격만 조회
export async function getProductPrice(
  productUuid: string
): Promise<productPriceDataType> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/product/${productUuid}/productDetails`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch product price');
  }

  const data = (await res.json()) as commonResType<productPriceDataType>;
  return data.result as productPriceDataType;
}

// 할인 여부, 할인 가격 조회
export async function getProductDiscountPrice(
  productUuid: string
): Promise<productDiscountDataType> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/product/${productUuid}/productDiscountInfo`
  );

  if (res.status === 404) {
    return { discountType: '', discountValue: 0 };
  }
  if (!res.ok) {
    throw new Error('Failed to fetch product discount info');
  }

  const data = (await res.json()) as commonResType<productDiscountDataType>;
  return data.result as productDiscountDataType;
}

// 총 리뷰 개수, 평점
export async function getProductReviewSummary(
  productUuid: string
): Promise<productReviewSummaryDataType> {
  'use server';

  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/review/${productUuid}/reviewScore`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch product review summary');
  }

  const data =
    (await res.json()) as commonResType<productReviewSummaryDataType>;
  if (data.result === null)
    return {
      reviewscoreAvg: 0,
      reviewcount: 0,
    };
  return data.result as productReviewSummaryDataType;
}

// 상품 정보 조합
export async function getProductInfo(
  productUuid: string
): Promise<productInfoDataType> {
  try {
    const [basicInfo, price, reviewSummary, image] = await Promise.all([
      getProductBasicInfo(productUuid),
      getProductPrice(productUuid),
      getProductReviewSummary(productUuid),
      getMainImageData(productUuid),
    ]);

    return {
      productUuid: productUuid,
      ...basicInfo,
      ...price,
      ...reviewSummary,
      image: image,
    } as productInfoDataType;
  } catch (error) {
    throw new Error('Failed to fetch product combination info');
  }
}

export async function getProductsByCategory(
  mainCategoryName: string,
  subCategoryName?: string
): Promise<string[]> {
  'use server';
  let url;
  if (subCategoryName !== undefined) {
    url = `${process.env.API_BASE_URL}/api/v1/category/inCategoryProducts?majorCategoryName=${mainCategoryName}&middleCategoryName=${subCategoryName}`;
  } else {
    url = `${process.env.API_BASE_URL}/api/v1/category/inCategoryProducts?majorCategoryName=${mainCategoryName}`;
  }
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch product list by category');
  }
  const data = (await res.json()) as commonResType<
    infiniteResultType<string[]>
  >;
  if (data.result === null) return [];
  return data.result.content as string[];
}

export async function getRecentProductList(): Promise<string[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/product/recentlyViewed`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch recent product list');
  }
  const data = (await res.json()) as commonResType<
    infiniteResultType<string[]>
  >;
  return data.result.content as string[];
}
