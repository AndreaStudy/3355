import { getBottomCategories } from '@/actions/category/categoryActions';
import { bottomCategoryDataType } from '@/types/ResponseTypes';
import Link from 'next/link';
import React from 'react';

async function CategoryAccordionItem({
  middleCategoryId,
  topCategoryId,
}: {
  middleCategoryId: number;
  topCategoryId: number;
}) {
  const bottomCategories: bottomCategoryDataType[] =
    await getBottomCategories(middleCategoryId);

  return (
    <div className="flex flex-col gap-3 bg-[#F5F5F5] p-6 border-t text-[#444444]">
      <Link href={`/category?mainId=${topCategoryId}`}>
        <span className="pb-1 border-b-2 border-[#777777]">전체보기 +</span>
      </Link>
      <ul className="flex flex-col gap-3 pt-2">
        {bottomCategories.map((sub) => {
          return (
            <li key={sub.id}>
              <Link href={`/category?mainId=${topCategoryId}&subId=${sub.id}`}>
                {sub.bottomCategoryName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoryAccordionItem;
