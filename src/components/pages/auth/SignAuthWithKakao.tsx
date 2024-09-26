'use client';

import KakaoIcon from '/public/assets/images/icons/kakaoIcon.svg';
import { Button } from '../../ui/button';
import { signIn } from 'next-auth/react';

const SignAuthWithKakao = () => {
  const handleKakaoAuth = async (e: React.MouseEvent) => {
    await signIn('kakao', { redirect: true });
  };

  return (
    <Button size="kakao" type="button" onClick={handleKakaoAuth}>
      <span className="ml-2">
        <KakaoIcon />
      </span>
      <span className="col-span-8">카카오 로그인</span>
      <span></span>
    </Button>
  );
};

export default SignAuthWithKakao;
