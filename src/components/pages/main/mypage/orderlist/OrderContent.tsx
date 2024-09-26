import { myOrderDataType } from '@/types/ResponseTypes';

function OrderContent({ myOrderList }: { myOrderList: myOrderDataType[] }) {
  return (
    <>
      {myOrderList.length > 0 ? (
        <></>
      ) : (
        <div className="flex justify-center items-center p-4 h-96">
          <p className="text-xl font-extrabold">주문내역이 없습니다.</p>
        </div>
      )}
    </>
  );
}

export default OrderContent;
