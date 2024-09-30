'use client';

import { paidKakao } from '@/actions/pay/payAction';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SearchParams {
  [key: string]: string;
}

function PaidContent({
  searchParams,
  handleDeleteCart,
}: {
  searchParams: SearchParams;
  handleDeleteCart: () => Promise<void>;
}) {
  const router = useRouter();
  const [paid, setPaid] = useState<boolean>(false);
  const [noti, setNoti] = useState<string>('');

  const kakaoPay = async () => {
    const tid = sessionStorage.getItem('tid');
    if (tid) {
      const kakao = await paidKakao(searchParams.pg_token, tid);
      if (kakao) {
        setNoti(kakao.aid);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      kakaoPay();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setPaid(true);
  }, [noti]);

  useEffect(() => {
    handleDeleteCart();
  }, [paid]);

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
          {noti && <p className="mt-4 text-gray-700">주문번호 : {noti}</p>}
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
