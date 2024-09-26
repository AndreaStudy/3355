import { Plus } from 'lucide-react';
import Link from 'next/link';

function CouponHeader() {
  return (
    <header className="flex justify-between p-4">
      <p className="text-3xl font-extrabold">MY 쿠폰</p>
      <Link
        href="coupon/zone"
        className="flex items-center gap-x-1 text-green-500 font-bold"
      >
        <Plus />
        <span>쿠폰받기</span>
      </Link>
    </header>
  );
}

export default CouponHeader;
