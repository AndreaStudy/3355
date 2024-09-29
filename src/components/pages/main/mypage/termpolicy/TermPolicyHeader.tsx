import AgreeMotion from './AgreeMotion';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import {
  getDeliveryTermStatusData,
  toggleDeliveryTermData,
} from '@/actions/mypage/deleveryAction';

async function TermPolicyHeader() {
  const session = await getServerSession(options);
  const agree: boolean = await getDeliveryTermStatusData(
    session?.user?.accessToken
  );
  const handleToggle = async () => {
    'use server';
    const res = await toggleDeliveryTermData(session?.user?.accessToken);
  };
  return (
    <header className="flex justify-between m-4 pb-4 border-b-2">
      <div className="text-xl font-extrabold">
        배송지 정보 수집 및 이용 동의
      </div>
      <AgreeMotion agree={agree} handleToggle={handleToggle} />
    </header>
  );
}

export default TermPolicyHeader;
