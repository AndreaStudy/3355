import MyPageHeader from '@/components/layouts/MyPageHeader';
import OrderContent from '@/components/pages/main/mypage/orderlist/OrderContent';
import OrderFilter from '@/components/pages/main/mypage/orderlist/OrderFilter';

function Page() {
  return (
    <>
      <MyPageHeader text="주문 내역" />
      <OrderFilter />
      <OrderContent />
    </>
  );
}

export default Page;
