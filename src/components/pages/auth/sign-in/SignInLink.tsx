import { SignInLinkType } from '@/types/authType';
import Link from 'next/link';
import React from 'react';

function SignInLink({ signLink }: { signLink: SignInLinkType }) {
  return (
    <Link className="p-3 text-slate-800 hover:underline" href={signLink.url}>
      {signLink.text}
    </Link>
  );
}

export default SignInLink;
