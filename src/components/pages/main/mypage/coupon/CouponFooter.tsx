'use client';

import { ChevronDown, ChevronUp, Plus } from 'lucide-react';
import { useState } from 'react';

function CouponFooter() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <footer className="mb-[60px]">
      <div
        onClick={handleToggle}
        className="flex justify-between text-xl font-bold p-4 border-t-2"
      >
        <p>쿠폰 안내</p>
        <p>{isOpen ? <ChevronUp /> : <ChevronDown />}</p>
      </div>
      {isOpen && (
        <div className="text-xs border-t-2 p-4 text-slate-500 bg-slate-100">
          <p>
            - 쿠폰은 명시된 사용 기간 동안에 한하여 사용할 수 있으며, 사용기간이
            만료된 쿠폰의 경우 사용여부와 무관하게 재발급되지 않습니다.
          </p>
          <p>
            - 주문 취소/전체 반품 시 쿠폰 사용 기한 내인 경우 자동으로
            재발급됩니다.(부분 반품의 경우 예외)
          </p>
          <p>
            - 부분 최소 또는 선물 거절 시, 쿠폰 정채겡 따라 추가 결제 금액이
            발생할 수 있고, 재결제 이전까지 상품 출고가 제한될 수 있습니다.
          </p>
          <p>- 사용기간이 만료된 쿠폰은 보유 목록에서 자동으로 삭제됩니다.</p>
          <p>
            - 결제 시 주문서에서 쿠폰을 저굥하지 않으면 할인 금액이 적용되지
            않습니다.
          </p>
          <p>
            - 한 주문 당 최대 2개의 쿠폰을 사용할 수 있으나, 장바구니 쿠폰과
            상품 쿠폰비를 제외한 금액 기준으로 조건 충족 시 사용 가능합니다.
          </p>
          <p>
            - 배송비 쿠폰과 장바구니 쿠폰을 동시 사용하는 경우 장바구니 쿠폰은
            배송비를 제외한 금액 기준으로 조건 충족 시 사용 가능합니다.
          </p>
          <p>- 배송비 쿠폰은 최초 배송비 발생 주문에서만 사용 가능합니다.</p>
          <p>- 일부 쿠폰은 상품 할인과 중복 적용 불가합니다.</p>
          <p>
            - 온라인 스토어 쿠폰은 온라인 구매 전용으로 오프라인 매장에서는 사용
            불가합니다.
          </p>
        </div>
      )}
    </footer>
  );
}

export default CouponFooter;
