import React from 'react';

import LinkNavUiWithIcon from '@/components/layouts/LinkNavUiWithIcon';
import { ArrowLeftIcon, HomeIcon, Search } from 'lucide-react';

function CartHeaderNav() {
  return (
    <nav id="cartHeader" className="px-4 py-4 shadow-md">
      <ul className="grid grid-cols-10 items-center">
        <li className="col-span-2 overflow-hidden">
          <ul className="flex flex-row justify-between items-center">
            <LinkNavUiWithIcon
              isIcon={true}
              icon={<ArrowLeftIcon />}
              isHistoryBack={true}
            />
          </ul>
        </li>
        <li className="col-span-6 text-center text-[1.125rem] font-bold">
          장바구니
        </li>
        <LinkNavUiWithIcon isIcon={true} icon={<Search />} href="/search" />
        <LinkNavUiWithIcon isIcon={true} icon={<HomeIcon />} href="/" />
      </ul>
    </nav>
  );
}

export default CartHeaderNav;
