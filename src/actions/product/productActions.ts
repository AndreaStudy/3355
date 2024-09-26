'use server';

import {
  commonResType,
  imageDataType,
  infiniteResultType,
  productBasicDataType,
  productDiscountDataType,
  productInfoDataType,
  productPriceDataType,
  productReviewSummaryDataType,
  productUuidDataType,
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

  const data = (await res.json()) as commonResType<productBasicDataType>;
  return data.result as productBasicDataType;
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
  return data.result as productReviewSummaryDataType;
}

// 상품 정보 조합
export async function getProductInfo(
  productUuid: string
): Promise<productInfoDataType> {
  try {
    // todo: 백엔드 api 수정 후 thumbnail에 대한 것 추가
    const [basicInfo, price, discount, reviewSummary] = await Promise.all([
      getProductBasicInfo(productUuid),
      getProductPrice(productUuid),
      getProductDiscountPrice(productUuid),
      getProductReviewSummary(productUuid),
      // getMainImageData(productUuid)
    ]);

    return {
      productUuid: productUuid,
      ...basicInfo,
      ...price,
      ...discount,
      ...reviewSummary,
    } as productInfoDataType;
  } catch (error) {
    throw new Error('Failed to fetch product combination info');
  }
}

// 각 상품 정보 조합 -> 리스트
export async function getProductInfoList(
  productUuids: productUuidDataType[]
): Promise<productInfoDataType[]> {
  try {
    // todo: 백엔드 api 수정 후 thumbnail에 대한 것 추가
    const productDetailsPromises = productUuids.map(async (product) => {
      const [basicInfo, price, discount, reviewSummary] = await Promise.all([
        getProductBasicInfo(product.productUuid),
        getProductPrice(product.productUuid),
        getProductDiscountPrice(product.productUuid),
        getProductReviewSummary(product.productUuid),
        // getMainImageData(product.productUuid),
      ]);

      return {
        productUuid: product.productUuid,
        ...basicInfo,
        ...price,
        ...discount,
        ...reviewSummary,
      } as productInfoDataType;
    });

    const productInfoList = await Promise.all(productDetailsPromises);
    return productInfoList;
  } catch (error) {
    throw new Error('Failed to fetch product combination list info');
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
  return data.result?.content as string[];
}

// 객체 형식이 아닌 string으로 받아올 때
export async function getProductInfoListByUuid(
  productUuids: string[]
): Promise<productInfoDataType[]> {
  try {
    // todo: 백엔드 api 수정 후 thumbnail에 대한 것 추가
    const productDetailsPromises = productUuids.map(async (uuid) => {
      const [basicInfo, price, discount, reviewSummary] = await Promise.all([
        getProductBasicInfo(uuid),
        getProductPrice(uuid),
        getProductDiscountPrice(uuid),
        getProductReviewSummary(uuid),
        // getMainImageData(uuid),
      ]);

      return {
        productUuid: uuid,
        ...basicInfo,
        ...price,
        ...discount,
        ...reviewSummary,
      } as productInfoDataType;
    });

    const productInfoList = await Promise.all(productDetailsPromises);
    return productInfoList;
  } catch (error) {
    throw new Error('Failed to fetch product combination info by string uuid');
  }
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
  return data.result?.content as string[];
}
