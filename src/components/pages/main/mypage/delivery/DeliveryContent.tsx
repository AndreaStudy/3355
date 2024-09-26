import { deliveryDataType } from '@/types/ResponseTypes';
import DeliveryCard from './DeliveryCard';

async function DeliveryContent({
  deliveries,
  handleDeleteDelivery,
}: {
  deliveries: deliveryDataType[];
  handleDeleteDelivery: (deliveryId: string) => Promise<void>;
}) {
  return (
    <ul className="mb-[60px]">
      {deliveries.map((delivery, index) => (
        <>
          <li key={delivery.deliveryId}>
            <DeliveryCard
              delivery={delivery}
              handleDeleteDelivery={handleDeleteDelivery}
            ></DeliveryCard>
          </li>
          {index < deliveries.length - 1 && <hr />}
        </>
      ))}
    </ul>
  );
}

export default DeliveryContent;
