interface OrderTypeSelectProps {
  orderType: string;
  setOrderType: (type: string) => void;
}

export const OrderTypeSelect: React.FC<OrderTypeSelectProps> = ({
  orderType,
  setOrderType,
}) => {
  return (
    <div>
      <p className="text-xs">주문 유형</p>
      <select
        className="w-full border p-2 rounded-sm"
        onChange={(e) => setOrderType(e.target.value)}
        value={orderType}
      >
        <option value="전체">전체</option>
        <option value="일반주문">일반주문</option>
        <option value="선물주문">선물주문</option>
        <option value="예약주문">예약주문</option>
        <option value="선물 예약주문">선물 예약주문</option>
      </select>
    </div>
  );
};
