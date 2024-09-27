'use client';

import { paidKakao } from '@/actions/pay/payAction';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SearchParams {
  [key: string]: string;
}

interface OrderDataType {
  aid: string;
  tid: string;
  cid: string;
  partner_order_id: string;
  partner_user_id: string;
  payment_method_type: string;
  amount: {
    total: number;
    taxFree: number;
    tax: number;
    point: number;
    discount: number;
    greenDeposit: number;
  };
  tax_free_amount: null;
  item_name: string;
  quantity: number;
  created_at: string;
  approved_at: string;
  payload: null;
}

function PaidContent({
  searchParams,
  handleDeleteCart,
}: {
  searchParams: SearchParams;
  handleDeleteCart: () => Promise<void>;
}) {
  const router = useRouter();
  const [paid, setPaid] = useState<boolean>(true);

  const handlePaid = () => {
    setPaid(true);
  };

  const kakaoPay = async () => {
    const tid = sessionStorage.getItem('tid');
    if (tid) {
      const kakao = await paidKakao(searchParams.pg_token, tid);
      if (kakao) {
        await handleDeleteCart();
        handlePaid();
      }
    }
  };

  useEffect(() => {
    kakaoPay();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {paid ? (
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-green-600">
            결제가 완료되었습니다!
          </h1>
          <p className="mt-4 text-gray-700">
            주문이 성공적으로 처리되었습니다.
          </p>
          <button
            className="mt-6 bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
            onClick={() => router.push('/')}
          >
            홈으로 돌아가기
          </button>
        </div>
      ) : (
        <div className="w-full bg-white rounded-lg shadow-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-blue-600">결제 진행 중...</h1>
          <p className="mt-4 text-gray-700">잠시만 기다려 주세요.</p>
          <div className="flex w-full mt-6 mx-auto justify-center items-center">
            <Image
              src="/assets/images/gifs/loading.gif"
              alt="loading"
              width={100}
              height={100}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PaidContent;
