const ChangePwHeader = ({ nickname }: { nickname: string }) => {
  return (
    <div className="text-xl font-bold flex flex-col items-start mb-6">
      <p>{nickname}님의</p>
      <p>비밀번호를 변경합니다.</p>
    </div>
  );
};

export default ChangePwHeader;
