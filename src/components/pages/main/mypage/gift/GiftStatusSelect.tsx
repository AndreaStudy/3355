interface OrderStatusSelectProps {
  orderStatus: string;
  setOrderStatus: (status: string) => void;
}

export const GiftStatusSelect: React.FC<OrderStatusSelectProps> = ({
  orderStatus,
  setOrderStatus,
}) => {
  return (
    <div>
      <p className="text-xs">주문 상태</p>
      <select
        className="w-full border p-2 rounded-sm"
        onChange={(e) => setOrderStatus(e.target.value)}
        value={orderStatus}
      >
        <option value="전체">전체</option>
        <option value="결제완료">결제완료</option>
        <option value="배송준비중">배송준비중</option>
        <option value="배송중">배송중</option>
        <option value="배송완료">배송완료</option>
        <option value="주문취소">주문취소</option>
      </select>
    </div>
  );
};
