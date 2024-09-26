import { deliveryDataType } from '@/types/ResponseTypes';
import Link from 'next/link';

function CartDeliveryNav({ delivery }: { delivery: deliveryDataType | null }) {
  return (
    <div className="flex flex-col gap-y-1 text-md px-5 py-3 bg-gray-100 mt-1">
      {delivery ? (
        <>
          <p className="flex justify-between font-extrabold">
            <span>
              {delivery.receiver}
              {delivery.nickname && <>{`(${delivery.nickname})`}</>}
              <span className="text-xs text-green-500 bg-green-100 p-1 ml-2">
                기본
              </span>
            </span>
            <Link
              href="/cart/delivery"
              className="flex gap-x-5 text-sm mr-3 text-amber-700 cursor-pointer"
            >
              배송지 변경
            </Link>
          </p>
          <p className="font-normal">
            {`(${delivery.postNumber}) ${delivery.address}`} <br />
            {delivery.detailAddress}
          </p>
        </>
      ) : (
        <Link href="/mypage/delivery">배송지 설정하러 가기</Link>
      )}
    </div>
  );
}

export default CartDeliveryNav;
