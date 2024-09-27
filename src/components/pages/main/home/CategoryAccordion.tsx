import { getMiddleCategories } from '@/actions/category/categoryActions';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  middleCategoryDataType,
  topCategoryDataType,
} from '@/types/ResponseTypes';
import Link from 'next/link';
import React from 'react';
import CategoryAccordionItem from './CategoryAccordionItem';

async function CategoryAccordion({ main }: { main: topCategoryDataType }) {
  const middleCategories: middleCategoryDataType[] = (
    await getMiddleCategories(main.id)
  ).filter((category) => category.middleCategoryName === '카테고리');

  return (
    <div>
      {middleCategories.length === 0 ? (
        <Link href={`/category?mainName=${main.topCategoryName}`}>
          <li className="py-4 border-b">{main.topCategoryName}</li>
        </Link>
      ) : (
        <AccordionItem value={main.topCategoryName}>
          <AccordionTrigger className=" data-[state=open]:text-starbucks-green data-[state=open]:font-bold data-[state=open]:no-underline">
            <li className="font-semibold">{main.topCategoryName}</li>
          </AccordionTrigger>
          <AccordionContent>
            {middleCategories.map((middle) => {
              return (
                <CategoryAccordionItem
                  key={middle.id}
                  middleCategoryId={middle.id}
                  topCategoryName={main.topCategoryName}
                />
              );
            })}
          </AccordionContent>
        </AccordionItem>
      )}
    </div>
  );
}

export default CategoryAccordion;
