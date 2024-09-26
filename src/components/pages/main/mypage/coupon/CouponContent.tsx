import { getMyCouponData } from '@/actions/mypage/couponActions';
import { couponDataType } from '@/types/ResponseTypes';
import CouponCard from './CouponCard';

async function CouponContent() {
  const coupons: couponDataType[] =
    (await getMyCouponData()) as couponDataType[];

  return (
    <ul>
      {coupons.map((coupon, index) => (
        <>
          <li key={coupon.couponId}>
            <CouponCard coupon={coupon} show="myCoupon" />
          </li>
          {index < coupons.length - 1 && <hr />}
        </>
      ))}
    </ul>
  );
}

export default CouponContent;
