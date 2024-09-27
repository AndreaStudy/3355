'use server';
import { myReviewDataType } from '@/types/ResponseTypes';
import { redirect } from 'next/navigation';

export async function getMyReviewListData(
  token: string
): Promise<myReviewDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/review/allReviewsOfMyPage`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) {
    return redirect('/error?message=Failed to fetch my review list');
  }
  const data = await res.json();
  return data.result;
}
