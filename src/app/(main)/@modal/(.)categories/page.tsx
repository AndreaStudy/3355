import React from 'react';
import HamburgerCategoryModal from './modal';
import { getTopCategories } from '@/actions/category/categoryActions';
import HamburgerCategory from '@/components/layouts/HamburgerCategory';
import { topCategoryDataType } from '@/types/ResponseTypes';

async function Page() {
  const topCategories: topCategoryDataType[] = await getTopCategories();
  return (
    <HamburgerCategoryModal>
      <HamburgerCategory topCategories={topCategories} />
    </HamburgerCategoryModal>
  );
}

export default Page;
