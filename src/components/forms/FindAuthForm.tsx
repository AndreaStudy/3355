'use client';

import { AuthenticationMethodType } from '@/types/authType';
import FindIdField from './FindIdFeild';
import FindPwField from './FindPwField';

function FindAuthForm({
  method,
  handleFindAuth,
}: {
  method: AuthenticationMethodType;
  handleFindAuth: (formData: FormData) => Promise<void>;
}) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    handleFindAuth(formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg mx-auto mt-10 text-black"
      >
        {method === 'find-id' ? <FindIdField /> : <FindPwField />}
      </form>
    </>
  );
}

export default FindAuthForm;
