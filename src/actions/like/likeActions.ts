'use server';

import {
  commonResType,
  infiniteResultType,
  likedTFDataType,
} from '@/types/ResponseTypes';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export async function likeToggle(productUuid: string, token?: string) {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/member/likes?productUuid=${productUuid}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  revalidateTag('likeToggle');
}

// 회원의 찜한 상품 목록 조회
export async function getWishList(token?: string): Promise<string[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/member/likeslist`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) {
    return redirect('/error?message=Failed to fetch likeslist');
  }

  const data = (await res.json()) as commonResType<
    infiniteResultType<string[]>
  >;
  return data.result?.content as string[];
}

// 한 상품에 대한 like 여부 확인
export async function getLikeTF(
  productUuid: string,
  token?: string
): Promise<likedTFDataType> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/member/${productUuid}/like-status`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ['likeToggle'] },
    }
  );
  if (!res.ok) {
    return redirect('/error?message=Failed to fetch like TF');
  }

  const data = (await res.json()) as commonResType<likedTFDataType>;
  return data.result as likedTFDataType;
}
