import Image from 'next/image';

const FindIdAuth = ({ name }: { name: string }) => {
  return (
    <div className="font-bold flex flex-col items-center mb-48">
      <Image
        alt="starbucks-logo"
        src="/assets/images/logos/Starbucks-logo.svg"
        width={100}
        height={100}
        className="mb-4"
        priority
      />
      <div className="text-xl mt-2 mb-3">
        <p>고객님의 아이디는</p>
        <p>{name} 입니다.</p>
      </div>
    </div>
  );
};

export default FindIdAuth;
