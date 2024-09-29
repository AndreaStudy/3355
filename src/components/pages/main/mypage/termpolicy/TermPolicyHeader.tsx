import {
  getDeliveryTermData,
  postToggleDeliveryTermAction,
} from '@/actions/mypage/deleveryAction';
import AgreeMotion from './AgreeMotion';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

async function TermPolicyHeader() {
  const session = await getServerSession(options);
  const agree: boolean = await getDeliveryTermData(session?.user?.accessToken);
  console.log('00000', agree);
  const handleToggle = async () => {
    'use server';
    const res = await postToggleDeliveryTermAction(session?.user?.accessToken);
    console.log(res);
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
