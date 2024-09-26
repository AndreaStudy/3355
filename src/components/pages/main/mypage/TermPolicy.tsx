import ServiceItem from './ServiceItem';

function TermPolicy() {
  return (
    <>
      <div className="text-xl font-bold">약관 및 정책</div>
      <ul className="flex flex-col justify-around text-center p-2 my-4">
        <ServiceItem text="배송지 정보 수집 및 이용 동의" link="term-policy" />
      </ul>
    </>
  );
}

export default TermPolicy;
