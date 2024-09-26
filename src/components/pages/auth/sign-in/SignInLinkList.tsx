import { SignInLinkType } from '@/types/authType';
import SignInLink from './SignInLink';

const signInLinkData: SignInLinkType[] = [
  {
    url: '/find-id',
    text: '아이디 찾기',
  },
  {
    url: '/find-pw',
    text: '비밀번호 찾기',
  },
  {
    url: '/sign-up',
    text: '회원가입',
  },
];

const SignInLinkList = () => {
  return (
    <ul className="flex flex-row justify-center items-center text-sm mt-4 mb-14">
      {signInLinkData.map((link, index) => (
        <li key={index}>
          <SignInLink signLink={link} />
        </li>
      ))}
    </ul>
  );
};

export default SignInLinkList;
