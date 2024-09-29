import { getCartCount } from '@/actions/cart/cartAction';
import {
  getDeliveryListData,
  putBaseDeliveryAction,
} from '@/actions/mypage/deleveryAction';
import { options } from '@/app/api/auth/[...nextauth]/options';
import BasicHeader from '@/components/layouts/BasicHeader';
import MyPageHeader from '@/components/layouts/MyPageHeader';
import CartDeliveryContent from '@/components/pages/main/cart/CartDeliveryContent';
import { deliveryDataType } from '@/types/ResponseTypes';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function Page() {
  const session = await getServerSession(options);
  const isAuth = session?.user.accessToken ? true : false;
  const count = isAuth ? await getCartCount(session?.user.accessToken) : 0;
  const deliveries: deliveryDataType[] = (await getDeliveryListData(
    session?.user?.accessToken
  )) as deliveryDataType[];

  const baseDeliveries = deliveries.filter((delivery) => delivery.baseAddress);
  const otherDeliveries = deliveries.filter(
    (delivery) => !delivery.baseAddress
  );

  const sortedDeliveries = [...baseDeliveries, ...otherDeliveries];

  const handleBaseDelivery = async (deliveryId: string) => {
    'use server';
    await putBaseDeliveryAction(deliveryId, session?.user?.accessToken);
    redirect('/cart');
  };

  return (
    <>
      <BasicHeader count={count} />
      <div className="p-2">
        <MyPageHeader text="기본 배송지 수정" />
        <CartDeliveryContent
          deliveries={sortedDeliveries}
          handleBaseDelivery={handleBaseDelivery}
        />
      </div>
    </>
  );
}
