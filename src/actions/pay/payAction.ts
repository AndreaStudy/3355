'use server';

import { OrderDataType } from '@/types/ResponseTypes';

// 카카오페이 준비
export async function payKakao(token: string, total_amount: number) {
  'use server';
  const payload = {
    cid: 'TC0ONETIME',
    partner_order_id: '스타벅스',
    partner_user_id: '스타벅스',
    item_name: '스타벅스',
    quantity: 1,
    total_amount: total_amount,
    vat_amount: 10,
    tax_free_amount: 0,
    approv_url:
      'https://3355-five.vercel.app/paid/ready?urls.primaryName=%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%8E%98%EC%9D%B4#/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%8E%98%EC%9D%B4/getPgToken',
    fail_url: 'http://developers.kakao.com/fail',
    cancel_url: 'http://developers.kakao.com/cancel',
  };
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/kakao/ready`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  if (res.ok) {
    const data = await res.json();
    return data.result;
  }
  return null;
}

// 카카오페이 결제요청
export async function paidKakao(
  pg_token: string,
  tid: string
): Promise<OrderDataType | null> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/kakao/success?pg_token=${pg_token}&tid=${tid}&partner_order_id=스타벅스&partner_user_id=스타벅스`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return null;
}
