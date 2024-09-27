'use client';
import { payKakao } from '@/actions/pay/payAction';
import { TextUi } from '@/components/ui/TextUi';
import { GiftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const cartBottomMenu = [
  {
    id: 1,
    title: '선물하기',
    cols: 'col-span-4',
    bg: null,
    icon: <GiftIcon strokeWidth={0.8} />,
  },
  {
    id: 2,
    title: '주문하기',
    cols: 'col-span-8',
    bg: 'bg-starbucks-green',
    icon: null,
  },
];

function CartBottomTab({
  totalPrice,
  discountPrice,
  shippingPrice,
  setIsView,
  token,
}: {
  totalPrice: number;
  discountPrice: number;
  shippingPrice: number;
  setIsView: React.Dispatch<React.SetStateAction<boolean>>;
  token: string;
}) {
  const router = useRouter();
  const handlePay = async (id: number) => {
    if (id === 2) {
      setIsView(true);
      const ready = await payKakao(token, totalPrice);
      if (ready.next_redirect_pc_url) {
        sessionStorage.setItem('tid', ready.tid);
        router.push(ready.next_redirect_pc_url);
      }
    }
  };

  return (
    <section className="fixed bottom-0 z-[999] bg-white w-full max-w-md mx-auto">
      <ul className="grid grid-cols-12 w-full">
        {cartBottomMenu.map((menu) => (
          <li
            key={menu.id}
            className={`
              ${menu.cols} 
              px-2 flex justify-center items-center h-[52px]
              ${menu.bg}
            `}
            onClick={() => handlePay(menu.id)}
          >
            {menu.icon ? (
              menu.icon
            ) : (
              <TextUi size={'md'} variant={menu.bg ? 'white' : 'default'}>
                {totalPrice && totalPrice + shippingPrice - discountPrice}원{' '}
                {menu.title}
              </TextUi>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CartBottomTab;
