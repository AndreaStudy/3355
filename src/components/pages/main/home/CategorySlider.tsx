import { getTopCategories } from '@/actions/category/categoryActions';
import { topCategoryDataType } from '@/types/ResponseTypes';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

async function CategorySlider() {
  const topCategories: topCategoryDataType[] = await getTopCategories();
  const headersList = headers();
  const headerPathName = headersList.get('x-pathname');
  return (
    <>
      {headerPathName === '/' && (
        <nav id="category-nav">
          <ul className="mt-14 flex justify-start overflow-x-auto gap-6 lg:gap-20 p-4 w-full bg-starbucks-green">
            {topCategories.map((category) => {
              return (
                <Link
                  key={category.id}
                  href={{
                    pathname: '/category',
                    query: { mainId: category.id },
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
      )}
    </>
  );
}

export default CategorySlider;
