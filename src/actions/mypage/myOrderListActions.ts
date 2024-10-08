import { myOrderDataType } from '@/types/ResponseTypes';
import { redirect } from 'next/navigation';

// 기본 배송지 정보 받아오기
export async function getMyOrderListData(
  token: string
): Promise<myOrderDataType[]> {
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/orders/list`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    return redirect('/error?message=Failed to fetch my order list item data');
  }
  const data = await res.json();
  return data.result;
}
