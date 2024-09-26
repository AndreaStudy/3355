import ServiceItem from './ServiceItem';

function ServiceList() {
  return (
    <>
      <div className="text-xl font-bold">서비스</div>
      <ul className="flex flex-col justify-around text-center p-2 my-4">
        <ServiceItem text="주문내역" link="orderlist" />
        <ServiceItem text="선물함" link="gift" />
        <ServiceItem text="쿠폰" link="coupon" />
        <ServiceItem text="배송지 관리" link="delivery" />
        <ServiceItem text="리뷰 관리" link="review" />
      </ul>
    </>
  );
}

export default ServiceList;
