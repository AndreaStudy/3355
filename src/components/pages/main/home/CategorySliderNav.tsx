'use client';
import { topCategoryDataType } from '@/types/ResponseTypes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function CategorySliderNav({
  topCategories,
}: {
  topCategories: topCategoryDataType[];
}) {
  const pathName = usePathname();
  if (pathName !== '/') {
    return null;
  }
  return (
    <nav id="category-nav">
      <ul className="mt-14 flex justify-start overflow-x-auto gap-6 lg:gap-20 p-4 w-full bg-starbucks-green">
        {topCategories.map((category) => {
          return (
            <Link
              key={category.id}
              href={{
                pathname: '/category',
                query: { mainName: category.topCategoryName },
              }}
            >
              <li>
                <span className="text-nowrap text-white">
                  {category.topCategoryName}
                </span>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default CategorySliderNav;
