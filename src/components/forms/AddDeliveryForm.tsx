'use client';

import { Button } from '../ui/button';
import { Layout } from '../ui/layout';
import DeliveryField from './DeliveryField';

function AddDeliveryForm({
  handlePostDelivery,
}: {
  handlePostDelivery: (formData: FormData) => void;
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    handlePostDelivery(formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-lg mx-auto text-black px-4"
    >
      <DeliveryField delivery={null} />
      <Layout className="z-20" variant="submitDiv">
        <Button size={'submit'} type="submit">
          등록하기
        </Button>
      </Layout>
    </form>
  );
}

export default AddDeliveryForm;
