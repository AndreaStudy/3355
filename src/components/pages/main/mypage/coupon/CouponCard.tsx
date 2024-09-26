'use client';

import { useState } from 'react';
import { couponDataType } from '@/types/ResponseTypes';
import { Check, Plus } from 'lucide-react';

interface CouponCardProps {
  coupon: couponDataType;
  show: string;
}

function CouponCard({ coupon, show }: CouponCardProps) {
  const [isAvailable, setIsAvailable] = useState(coupon.available);

  const handleGetCoupon = () => {
    setIsAvailable((prev) => !prev);
  };

  return (
    <section className="p-4">
      <div className="flex justify-between">
        <p className="text-xl text-green-500 font-bold">
          {coupon.discount}
          {coupon.discount > 100 ? '원 할인' : '% 할인'}
        </p>
        {show === 'coupons' ? (
          isAvailable ? (
            <p
              onClick={handleGetCoupon}
              className="flex items-center gap-x-1 text-green-500 font-bold text-xs"
            >
              <Plus size={18} />
              <span>쿠폰받기</span>
            </p>
          ) : (
            <p className="flex items-center gap-x-1 font-bold text-xs">
              <Check size={18} />
              <span>받기 완료</span>
            </p>
          )
        ) : isAvailable ? (
          <p>사용 가능</p>
        ) : (
          <p>사용 완료</p>
        )}
      </div>
      <p className="text-md font-bold mt-2">{coupon.couponTitle}</p>
      <p className="text-sm text-slate-500">
        사용기간:
        <span>
          {coupon.startDate} ~ {coupon.endDate}
        </span>
        <span className="text-red-600 font-bold">{}</span>
      </p>
      <p className="text-sm text-slate-500">
        사용조건:
        <span>{coupon.condition}</span>
      </p>
      {show !== 'coupons' && (
        <span className="text-sm font-bold text-amber-800 ml-14 pb-1 border-b-2 border-amber-800">
          적용 대상 보기
        </span>
      )}
    </section>
  );
}

export default CouponCard;
