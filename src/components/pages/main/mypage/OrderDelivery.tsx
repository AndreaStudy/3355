import { orderDeliveryDataType } from '@/types/ResponseTypes';
import { getOrderDeliveryData } from '@/actions/mypage/orderDeliveryAction';
import OrderDeliveryItemBox from './OrderDeliveryItemList';

async function OrderDelivery() {
  const datas: orderDeliveryDataType[] =
    (await getOrderDeliveryData()) as orderDeliveryDataType[];

  const textColor =
    datas.length > 0 ? 'text-starbucks-green font-bold' : 'text-slate-500';

  return (
    <section className="p-4">
      <div className="flex justify-between items-baseline">
        <p className="text-xl font-bold">주문/배송 현황</p>
        <p className={`${textColor} text-sm`}>최근 3개월 동안 구매한 상품</p>
      </div>
      <OrderDeliveryItemBox datas={datas} />
    </section>
  );
}

export default OrderDelivery;
