import PaidContent from '@/components/pages/paid/PaidContent';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { deleteAllCartItemList } from '@/actions/cart/cartAction';
import { paidKakao } from '@/actions/pay/payAction';

interface SearchParams {
  [key: string]: string;
}

async function Page({ searchParams }: { searchParams: SearchParams }) {
  const session = await getServerSession(options);
  const handleDeleteCart = async () => {
    'use server';
    await deleteAllCartItemList(session?.user.accessToken);
  };
  return (
    <PaidContent
      searchParams={searchParams}
      handleDeleteCart={handleDeleteCart}
    />
  );
}

export default Page;
