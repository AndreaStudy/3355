import {
  fetchCartItemList,
  fetchCartItemPrice,
} from '@/actions/cart/cartAction';
import { options } from '@/app/api/auth/[...nextauth]/options';
import CartBottom from '@/components/pages/main/cart/CartBottom';
import CartListContainer from '@/components/pages/main/cart/CartListContainer';
import { getServerSession } from 'next-auth';

export default async function Page() {
  const session = await getServerSession(options);
  const cartItemList = await fetchCartItemList(session?.user?.accessToken);
  const cartItemPrice = await fetchCartItemPrice(session?.user?.accessToken);

  return (
    <main>
      <CartListContainer
        cartItemList={cartItemList}
        token={session?.user?.accessToken}
      />
      <CartBottom
        totalPrice={cartItemPrice.totalPrice}
        discountPrice={cartItemPrice.totalDiscount}
        shippingPrice={3000}
        token={session?.user?.accessToken}
      />
    </main>
  );
}
