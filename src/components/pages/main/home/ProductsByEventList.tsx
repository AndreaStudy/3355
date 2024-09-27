import React from 'react';
import { eventUuidDataType } from '@/types/ResponseTypes';
import ProductsByEvent from './ProductsByEvent';

function ProductsByEventList({
  eventUuidList,
}: {
  eventUuidList: eventUuidDataType[];
}) {
  return (
    <div>
      {eventUuidList.slice(0, 3).map((eventUuid) => {
        return (
          <ProductsByEvent
            key={eventUuid.promotionUuid}
            eventUuid={eventUuid}
          />
        );
      })}
    </div>
  );
}

export default ProductsByEventList;
