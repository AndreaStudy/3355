'use client';

import { deliveryDataType } from '@/types/ResponseTypes';

function CartDeliveryCard({
  delivery,
  handleBaseDelivery,
}: {
  delivery: deliveryDataType;
  handleBaseDelivery: (deliveryId: string) => Promise<void>;
}) {
  const submitBaseDelivery = () => {
    handleBaseDelivery(delivery.deliveryId);
  };
  return (
    <div className="w-full flex flex-col gap-y-1 text-md px-5 py-3">
      <p className="flex justify-between font-extrabold">
        <span>
          {delivery.receiver}
          {delivery.nickname && <>{`(${delivery.nickname})`}</>}
          {delivery.baseAddress && (
            <span className="text-xs text-green-500 bg-green-100 p-1 ml-2">
              기본
            </span>
          )}
        </span>
      </p>
      <p className="font-semibold">
        {`(${delivery.postNumber}) ${delivery.address}`} <br />
        {delivery.detailAddress}
      </p>
      <p className="text-sm text-slate-500">
        {delivery.phone1}
        {delivery.phone2 && ` | ${delivery.phone2}`}
      </p>
      {delivery.message && (
        <p className="text-md text-slate-500 mt-1">{delivery.message}</p>
      )}
    </div>
  );
}

export default CartDeliveryCard;
