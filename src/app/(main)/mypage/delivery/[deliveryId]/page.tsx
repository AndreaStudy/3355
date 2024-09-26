import { putDeliveryAction } from '@/actions/mypage/deleveryAction';
import { options } from '@/app/api/auth/[...nextauth]/options';
import UpdateDeliveryForm from '@/components/forms/UpdateDeliveryForm';
import CloseHeader from '@/components/layouts/CloseHeader';
import MyPageHeader from '@/components/layouts/MyPageHeader';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

async function Page() {
  const session = await getServerSession(options);

  const handlePutDelivery = async (formData: FormData, deliveryId: string) => {
    'use server';
    const res = await putDeliveryAction(
      formData,
      deliveryId,
      session?.user?.accessToken
    );
    if (res.httpStatus === 'OK') {
      redirect('/mypage/delivery');
    }
  };

  return (
    <>
      <CloseHeader />
      <MyPageHeader text="배송지 정보" />
      <UpdateDeliveryForm
        session={session}
        handlePutDelivery={handlePutDelivery}
      />
    </>
  );
}

export default Page;
