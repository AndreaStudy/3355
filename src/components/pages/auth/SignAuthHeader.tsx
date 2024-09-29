import { AuthenticationMethodType } from '@/types/authType';
import Image from 'next/image';

const SignAuthHeader = ({ method }: { method: AuthenticationMethodType }) => {
  return (
    <div className="font-bold flex flex-col items-start mb-6">
      <Image
        alt="starbucks-logo"
        src="/assets/images/logos/starbucks-logo.svg"
        width={100}
        height={100}
        className="mb-4"
        priority
      />
      <h2 className="text-2xl mt-2 mb-3">
        {method === 'find-id'
          ? '이메일을 입력해주세요.'
          : '아이디와 이메일을 입력해주세요.'}
      </h2>
    </div>
  );
};

export default SignAuthHeader;
