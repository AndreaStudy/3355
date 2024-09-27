import React, { Suspense } from 'react';
import Product from '../../../cards/Product';
import {
  getEventName,
  getProductUuidListByEvent,
} from '@/actions/event/eventActions';
import { eventUuidDataType } from '@/types/ResponseTypes';
import ProductSkeleton from '@/components/skeletons/ProductSkeleton';

async function ProductsByEvent({
  eventUuid,
}: {
  eventUuid: eventUuidDataType;
}) {
  const productUuidList = await getProductUuidListByEvent(
    eventUuid.promotionUuid
  );
  const eventName = await getEventName(eventUuid.promotionUuid);
  return (
    <section className="w-full pt-10 px-4">
      <h1 className="text-2xl font-bold">{eventName.promotionName}</h1>
      <div className="pt-4 overflow-x-auto flex gap-4">
        {productUuidList.map((productUuid) => {
          return (
            <Suspense key={productUuid} fallback={<ProductSkeleton />}>
              <Product productUuid={productUuid} size="md" />
            </Suspense>
          );
        })}
      </div>
    </section>
  );
}

export default ProductsByEvent;
