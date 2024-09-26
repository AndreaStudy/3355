import AgreeMotion from './AgreeMotion';

function TermPolicyHeader() {
  return (
    <header className="flex justify-between m-4 pb-4 border-b-2">
      <div className="text-xl font-extrabold">
        배송지 정보 수집 및 이용 동의
      </div>
      <AgreeMotion agree={true} />
    </header>
  );
}

export default TermPolicyHeader;
