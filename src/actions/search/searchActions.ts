'use server';

import {
  commonResType,
  productUuidDataType,
  infiniteResultType,
} from '@/types/ResponseTypes';

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
    throw new Error('Failed to fetch');
  }
  const data = (await res.json()) as commonResType<
    infiniteResultType<string[]>
  >;
  return data.result.content as string[];
}
