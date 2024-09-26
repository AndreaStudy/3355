'use client';

import { deliveryDataType } from '@/types/ResponseTypes';
import { useState, useEffect } from 'react';
import CartDeliveryCard from './CartDeliveryCard';
import { Layout } from '@/components/ui/layout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function CartDeliveryContent({
  deliveries,
  handleBaseDelivery,
}: {
  deliveries: deliveryDataType[];
  handleBaseDelivery: (deliveryId: string) => Promise<void>;
}) {
  const [selectedDeliveryId, setSelectedDeliveryId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const defaultDelivery = deliveries.find((delivery) => delivery.baseAddress);
    if (defaultDelivery) {
      setSelectedDeliveryId(defaultDelivery.deliveryId);
    }
  }, [deliveries]);

  const handleSelectDelivery = (deliveryId: string) => {
    setSelectedDeliveryId(deliveryId);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedDeliveryId) {
      await handleBaseDelivery(selectedDeliveryId);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul className="mb-[60px]">
        {deliveries.map((delivery, index) => (
          <li
            key={delivery.deliveryId}
            className="w-full flex items-center p-4"
          >
            <label className="w-full flex justify-center items-center mr-2 cursor-pointer">
              <input
                type="radio"
                name="defaultDelivery"
                value={delivery.deliveryId}
                className="hidden"
                checked={selectedDeliveryId === delivery.deliveryId}
                onChange={() => handleSelectDelivery(delivery.deliveryId)}
              />
              <span
                className={`col-span-2 w-7 h-7 border-2 rounded-full flex items-center justify-center mr-2 ${selectedDeliveryId === delivery.deliveryId ? 'bg-starbucks-green' : ''}`}
              ></span>
              <CartDeliveryCard
                delivery={delivery}
                handleBaseDelivery={handleBaseDelivery}
              />
            </label>
            {index < deliveries.length - 1 && <hr />}
          </li>
        ))}
      </ul>
      <Layout className="grid grid-cols-2 gap-x-2 z-20" variant="submitDiv">
        <Link href="/mypage/delivery">
          <Button
            type="button"
            className="flex justify-center items-center gap-x-2"
          >
            <span>배송지 설정하러 가기</span>
          </Button>
        </Link>
        <Button
          type="submit"
          className="flex justify-center items-center gap-x-2"
        >
          <span>기본 배송지 변경</span>
        </Button>
      </Layout>
    </form>
  );
}

export default CartDeliveryContent;
