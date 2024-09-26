import { changePw } from '@/actions/auth/signUpAction';
import { Button } from '../ui/button';
import { Layout } from '../ui/layout';
import ChangePwField from './ChangePwField';
import { useRouter } from 'next/navigation';

function ChangePwForm({ token }: { token: string }) {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await changePw(formData, token);
    if (res.httpStatus === 'OK') {
      router.push('/sign-in');
    } else {
      alert('사용할 수 없는 비밀번호 입니다.');
    }
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
