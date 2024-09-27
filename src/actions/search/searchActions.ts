'use server';

import {
  commonResType,
  productUuidDataType,
  infiniteResultType,
} from '@/types/ResponseTypes';
import { redirect } from 'next/navigation';

export async function getSearchResults({
  searchValue,
}: {
  searchValue: string;
}): Promise<string[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/product/search?keyword=${searchValue}`
  );
  if (!res.ok) {
    return redirect('/error?message=Failed to fetch search results');
  }
  const data = (await res.json()) as commonResType<
    infiniteResultType<string[]>
  >;
  return data.result.content as string[];
}
