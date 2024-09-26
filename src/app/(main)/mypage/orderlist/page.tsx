import { getMyOrderListData } from '@/actions/mypage/myOrderListActions';
import { options } from '@/app/api/auth/[...nextauth]/options';
import MyPageHeader from '@/components/layouts/MyPageHeader';
import OrderContent from '@/components/pages/main/mypage/orderlist/OrderContent';
import OrderFilter from '@/components/pages/main/mypage/orderlist/OrderFilter';
import { getServerSession } from 'next-auth';

async function Page() {
  const session = await getServerSession(options);
  const myOrderList = await getMyOrderListData(session?.user?.accessToken);
  return (
    <>
      <MyPageHeader text="주문 내역" />
      <OrderFilter />
      <OrderContent myOrderList={myOrderList} />
    </>
  );
}

export default Page;
