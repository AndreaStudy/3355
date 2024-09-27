'use server';

import { commonResType, trendTagDataType } from '@/types/ResponseTypes';
import { redirect } from 'next/navigation';

export async function getTrendTag(): Promise<trendTagDataType[]> {
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/product/tagList`);
  if (!res.ok) {
    return redirect('/error?message=Failed to fetch trend tag');
  }
  const data = (await res.json()) as commonResType<trendTagDataType[]>;
  return data.result as trendTagDataType[];
}
