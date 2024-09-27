'use server';

import {
  bottomCategoryDataType,
  commonResType,
  middleCategoryDataType,
  topCategoryDataType,
} from '@/types/ResponseTypes';
import { redirect } from 'next/navigation';

export async function getTopCategories(): Promise<topCategoryDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/category/top-categories`
  );
  if (!res.ok) {
    return redirect('/error?message=Failed to fetch top-categories');
  }
  const data = (await res.json()) as commonResType<topCategoryDataType[]>;
  return data.result as topCategoryDataType[];
}

export async function getMiddleCategories(
  topCategoryId: number
): Promise<middleCategoryDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/category/middle-categories/by-id/${topCategoryId}`
  );
  if (!res.ok) {
    return redirect('/error?message=Failed to fetch middle-categories');
  }

  const data = (await res.json()) as commonResType<middleCategoryDataType[]>;
  return data.result as middleCategoryDataType[];
}

export async function getBottomCategories(
  middleCategoryId: number
): Promise<bottomCategoryDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/category/bottom-categories/by-id/${middleCategoryId}`
  );
  if (!res.ok) {
    return redirect('/error?message=Failed to fetch bottom-categories');
  }

  const data = (await res.json()) as commonResType<bottomCategoryDataType[]>;
  return data.result as bottomCategoryDataType[];
}
