import {
  deleteDeliveryData,
  getDeliveryListData,
  getDeliveryTermStatusData,
} from '@/actions/mypage/deleveryAction';
import { options } from '@/app/api/auth/[...nextauth]/options';
import MyPageHeader from '@/components/layouts/MyPageHeader';
import DeliveryContent from '@/components/pages/main/mypage/delivery/DeliveryContent';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/ui/layout';
import { deliveryDataType } from '@/types/ResponseTypes';
import { Plus } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

async function Page() {
  const session = await getServerSession(options);
  const deliveries: deliveryDataType[] = (await getDeliveryListData(
    session?.user?.accessToken
  )) as deliveryDataType[];
  const agree: boolean = await getDeliveryTermStatusData(
    session?.user?.accessToken
  );
  const baseDeliveries = deliveries.filter((delivery) => delivery.baseAddress);
  const otherDeliveries = deliveries.filter(
    (delivery) => !delivery.baseAddress
  );

  const sortedDeliveries = [...baseDeliveries, ...otherDeliveries];

  const handleDeleteDelivery = async (deliveryId: string) => {
    'use server';
    await deleteDeliveryData(deliveryId, session?.user?.accessToken);
  };
  return (
    <>
      <MyPageHeader text="배송지 관리" />
      <DeliveryContent
        deliveries={sortedDeliveries}
        handleDeleteDelivery={handleDeleteDelivery}
      />
      <Layout className="z-20" variant="submitDiv">
        {agree ? (
          <Link href="delivery/add">
            <Button
              size="submit"
              className="flex justify-center items-center gap-x-2"
            >
              <Plus className="inline-block" />
              <span>새 배송지 추가</span>
            </Button>
          </Link>
        ) : (
          <Link href="term-policy">
            <Button
              size="submit"
              className="flex justify-center items-center gap-x-2"
            >
              <span>배송지 수집 동의</span>
            </Button>
          </Link>
        )}
      </Layout>
    </>
  );
}

export default Page;
