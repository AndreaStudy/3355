import React from 'react';
import ProductsByEvent from './ProductsByEvent';
import { productsByEventDatas } from '@/datas/main/productDatas';

async function ProductsByEventList() {
  const eventList = await productsByEventDatas;
  return (
    <div>
      {eventList.map((eventItem) => {
        return (
          <ProductsByEvent eventItem={eventItem} key={eventItem.eventId} />
        );
      })}
    </div>
  );
}

export default ProductsByEventList;
