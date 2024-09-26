import { orderDeliveryDataType } from '@/types/ResponseTypes';
import OrderDeliveryItem from './OrderDeliveryItem';
import ArrowRightIcon from '/public/assets/images/icons/arrowRightIcon.svg';

function OrderDeliveryList({ datas }: { datas: orderDeliveryDataType[] }) {
  return (
    <ul className="flex justify-around text-center p-2 my-4">
      {datas.map((data, index) => (
        <>
          <OrderDeliveryItem key={data.id} data={data} />
          {index < datas.length - 1 && (
            <ArrowRightIcon fill="black" width={28} height={28} />
          )}
        </>
      ))}
    </ul>
  );
}

export default OrderDeliveryList;
