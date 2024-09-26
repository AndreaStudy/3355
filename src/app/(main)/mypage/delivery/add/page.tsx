import { postDeliveryAction } from '@/actions/mypage/deleveryAction';
import { options } from '@/app/api/auth/[...nextauth]/options';
import AddDeliveryForm from '@/components/forms/AddDeliveryForm';
import CloseHeader from '@/components/layouts/CloseHeader';
import MyPageHeader from '@/components/layouts/MyPageHeader';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

async function Page() {
  const session = await getServerSession(options);

  const handlePostDelivery = async (formData: FormData) => {
    'use server';
    const res = await postDeliveryAction(formData, session?.user?.accessToken);
    console.log('========', res);
    if (res.httpStatus === 'OK') {
      redirect('/mypage/delivery');
    }
  };

  return (
    <>
      <CloseHeader />
      <MyPageHeader text="배송지 정보" />
      <AddDeliveryForm handlePostDelivery={handlePostDelivery} />
    </>
  );
}

export default Page;
