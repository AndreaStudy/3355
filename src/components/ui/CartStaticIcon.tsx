import Link from 'next/link';
import React from 'react';
import CartBlackIcon from '/public/assets/images/icons/cartBlackIcon.svg';

function CartStaticIcon({ count }: { count: number }) {
  return (
    <Link href="/cart">
      <div className="relative">
        <CartBlackIcon width="24" height="24" />
        {count !== 0 && (
          <div className="absolute -top-1 -right-1 bg-starbucks-red rounded-full h-4 w-4 text-white text-[9px] font-bold flex justify-center items-center">
            {count}
          </div>
        )}
      </div>
    </Link>
  );
}

export default CartStaticIcon;
