'use client';

import { deliveryDataType } from '@/types/ResponseTypes';
import { Button } from '../ui/button';
import { Layout } from '../ui/layout';
import DeliveryField from './DeliveryField';
import { Session } from 'next-auth';
import { getDeliveryData } from '@/actions/mypage/deleveryAction';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function UpdateDeliveryForm({
  handlePutDelivery,
  session,
}: {
  session: Session | null;
  handlePutDelivery: (formData: FormData, deliveryId: string) => void;
}) {
  const path = usePathname();
  const deliveryId = path.split('/mypage/delivery/')[1];
  const [delivery, setDelivery] = useState<deliveryDataType | null>(null);

  useEffect(() => {
    const fetchDeliveryData = async () => {
      if (session?.user?.accessToken && deliveryId) {
        const data = await getDeliveryData(
          deliveryId,
          session.user.accessToken
        );
        setDelivery(data);
      }
    };
    fetchDeliveryData();
  }, [deliveryId, session]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    handlePutDelivery(formData, deliveryId);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-lg mx-auto text-black px-4"
    >
      <DeliveryField delivery={delivery} />
      <Layout className="z-20" variant="submitDiv">
        <Button size={'submit'} type="submit">
          수정하기
        </Button>
      </Layout>
    </form>
  );
}

export default UpdateDeliveryForm;
