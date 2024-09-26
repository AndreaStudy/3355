import React from 'react';
import CartHeaderNav from '../pages/main/cart/CartHeaderNav';
import CartDeliveryNav from '../pages/main/cart/CartDeliveryNav';
import { deliveryDataType } from '@/types/ResponseTypes';
import { getBaseDeliveryData } from '@/actions/mypage/deleveryAction';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

async function CartLayoutHeader() {
  const session = await getServerSession(options);
  const delivery: deliveryDataType = (await getBaseDeliveryData(
    session?.user?.accessToken
  )) as deliveryDataType;
  return (
    <header className="w-full">
      <CartHeaderNav />
      <CartDeliveryNav delivery={delivery} />
    </header>
  );
}

export default CartLayoutHeader;
