'use client';

import { LogOutIcon } from 'lucide-react';
import { signOut } from 'next-auth/react';

function LogOut() {
  return (
    <>
      <div className="text-xl font-bold">회원관리</div>
      <ul className="flex flex-col justify-around text-center p-2 my-4">
        {/* <ServiceItem text="회원정보 수정" link="update" /> */}
        <li className="flex items-center gap-x-2" onClick={() => signOut()}>
          <LogOutIcon size={30} color="gray" />
          <span className="font-semibold">로그아웃</span>
        </li>
      </ul>
    </>
  );
}

export default LogOut;
