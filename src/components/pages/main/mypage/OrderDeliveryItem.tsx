import { orderDeliveryDataType } from '@/types/ResponseTypes';

function OrderDeliveryItem({ data }: { data: orderDeliveryDataType }) {
  let statusMessage;
  const textColor =
    data.value === 0 ? 'text-slate-500' : 'text-starbucks-green';

  switch (data.id) {
    case 'paid':
      statusMessage = '결제완료';
      break;
    case 'ready':
      statusMessage = '배송준비중';
      break;
    case 'ing':
      statusMessage = '배송중';
      break;
    case 'complete':
      statusMessage = '배송완료';
      break;
    default:
      statusMessage = '상태 없음';
  }

  return (
    <li>
      <p className={`${textColor} text-2xl font-extrabold`}>{data.value}</p>
      <p>{statusMessage}</p>
    </li>
  );
}

export default OrderDeliveryItem;
