import { getCouponData } from '@/actions/mypage/couponActions';
import { couponDataType } from '@/types/ResponseTypes';
import CouponCard from '../CouponCard';

async function ZoneContent() {
  const coupons: couponDataType[] = (await getCouponData()) as couponDataType[];

  return (
    <ul className="mb-[60px]">
      {coupons.map((coupon, index) => (
        <>
          <li key={coupon.couponId}>
            <CouponCard coupon={coupon} show="coupons" />
          </li>
          {index < coupons.length - 1 && <hr />}
        </>
      ))}
    </ul>
  );
}

export default ZoneContent;
