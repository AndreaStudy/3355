import { orderDeliveryDataType } from '@/types/ResponseTypes';
import OrderDeliveryItem from './OrderDeliveryItem';
import ArrowRightIcon from '/public/assets/images/icons/arrowRightIcon.svg';
import React from 'react';

function OrderDeliveryList({ datas }: { datas: orderDeliveryDataType[] }) {
  return (
    <ul className="flex justify-around text-center p-2 my-4">
      {datas.map((data, index) => (
        <React.Fragment key={data.id}>
          <OrderDeliveryItem data={data} />
          {index < datas.length - 1 && (
            <ArrowRightIcon fill="black" width={28} height={28} />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

export default OrderDeliveryList;
