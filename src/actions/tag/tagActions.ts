'use server';

import { commonResType, trendTagDataType } from '@/types/ResponseTypes';

export async function getTrendTag(): Promise<trendTagDataType[]> {
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/product/tagList`);
  if (!res.ok) {
    throw new Error('Failed to fetch trend tag');
  }
  const data = (await res.json()) as commonResType<trendTagDataType[]>;
  return data.result as trendTagDataType[];
}
