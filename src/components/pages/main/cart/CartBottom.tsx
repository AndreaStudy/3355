'use client';
import React from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import CartBottomTab from './CartBottomTab';
import PullButtonUi from '@/components/ui/PullButtonUi';

function CartBottom({
  totalPrice,
  discountPrice,
  shippingPrice,
  token,
}: {
  totalPrice: number;
  discountPrice: number;
  shippingPrice: number;
  token: string;
}) {
  const [isView, setIsView] = React.useState(false);

  return (
    <>
      <section
        onClick={() => setIsView(!isView)}
        style={{ boxShadow: '0px -30px 20px rgba(0, 0, 0, 0.1)' }}
        className={`
          fixed bottom-0 w-full max-w-md mx-auto bg-white px-5 pt-[1rem] pb-[60px]
          transition-all ease-in-out duration-300
          z-[999]
          ${isView ? 'translate-y-0' : 'translate-y-[45px]'}`}
      >
        <PullButtonUi
          isOpen={isView}
          className={
            'absolute top-[-16px] rotate-180 left-1/2 transform -translate-x-1/2'
          }
          color="white"
        />
        <ul className="grid grid-cols-12 px-1 items-center text-xs">
          <li className=" col-span-4 text-center flex flex-col justify-center items-center">
            총 상품금액
            <br />
            {totalPrice.toLocaleString()}원
          </li>
          <li className=" col-span-1 flex justify-center">
            <PlusIcon size={9} strokeWidth={1.5} />
          </li>
          <li className=" col-span-2 text-center flex flex-col justify-center items-center">
            배송비
            <br />
            {totalPrice ? shippingPrice.toLocaleString() : 0}원
          </li>
          <li className=" col-span-1 flex justify-center">
            <MinusIcon size={9} strokeWidth={1.5} />
          </li>
          <li className=" col-span-4 text-center flex flex-col justify-center items-center">
            할인금액
            <br />
            {discountPrice.toLocaleString()}원
          </li>
        </ul>
      </section>
      <CartBottomTab
        totalPrice={totalPrice}
        discountPrice={discountPrice}
        shippingPrice={shippingPrice}
        setIsView={setIsView}
        token={token}
      />
    </>
  );
}

export default CartBottom;
