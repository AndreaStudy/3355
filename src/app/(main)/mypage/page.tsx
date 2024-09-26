import LogOut from '@/components/pages/main/mypage/LogOut';
import OrderDelivery from '@/components/pages/main/mypage/OrderDelivery';
import ServiceList from '@/components/pages/main/mypage/ServiceList';
import TermPolicy from '@/components/pages/main/mypage/TermPolicy';
import { Layout } from '@/components/ui/layout';

function Page() {
  return (
    <>
      <OrderDelivery />
      <Layout variant="mypage">
        <ServiceList />
        <TermPolicy />
        <LogOut />
      </Layout>
    </>
  );
}

export default Page;
