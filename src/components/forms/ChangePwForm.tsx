'use client';

import { Button } from '../ui/button';
import { Layout } from '../ui/layout';
import ChangePwField from './ChangePwField';

function ChangePwForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-lg mx-auto text-black"
    >
      <ChangePwField />
      <Layout variant="submitDiv">
        <Button size={'submit'} type="submit">
          확인
        </Button>
      </Layout>
    </form>
  );
}

export default ChangePwForm;
