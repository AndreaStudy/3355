import React from 'react';
import CategorySlider from '../pages/main/home/CategorySlider';
import MainHeaderNav from './MainHeaderNav';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getCartCount } from '@/actions/cart/cartAction';

async function MainPageHeader() {
  const session = await getServerSession(options);
  const isAuth = session?.user.accessToken ? true : false;
  const count = isAuth ? await getCartCount(session?.user.accessToken) : 0;
  return (
    <header>
      <MainHeaderNav count={count} />
      <CategorySlider />
    </header>
  );
}

export default MainPageHeader;
