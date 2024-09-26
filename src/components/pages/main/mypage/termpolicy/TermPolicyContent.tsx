function TermPolicyContent() {
  return (
    <section className="justify-between text-md p-4">
      <div>
        스타벅스 코리아를 운영하는 주식회사 에스씨케이컴퍼니는 온라인 스토어
        서비스를 제공하기 위하여 아래와 같이 고객님의 배송지 정보를
        수집·이용허려고 하오니, 내용을 확인 후 동의 여부를 결정하여 주시기
        바랍니다.
      </div>
      <p className="font-bold my-6">[필수] 배송지 정보 수집·이용 내역</p>
      <div className="grid grid-cols-3">
        <p className="col-span-1">수집·이용 목적</p>
        <p className="col-span-2 font-bold text-right">
          온라인 스토어 서비스 이용 및 상품 배송
        </p>
        <hr className="col-span-3 my-4" />
        <p className="col-span-1">항목</p>
        <p className="col-span-2 font-bold text-right">
          배송지 주소, 수신자 연락처, 수신자 이름
        </p>
        <hr className="col-span-3 my-4" />
        <p className="col-span-1">보유 및 이용 기간</p>
        <p className="col-span-2 font-bold text-right">
          회원 탈퇴 또는 동의 철회 시 까지
        </p>
        <hr className="col-span-3 my-4" />
      </div>
      <div>
        ※ 위의 배송지 정보 수집·이용에대한 동의를 거부할 권리가 있습니다. 그러나
        동의를 거부한 경우 온라인 스토어 서비스 이용에 제한을 받을 수 있습니다.
      </div>
    </section>
  );
}

export default TermPolicyContent;
