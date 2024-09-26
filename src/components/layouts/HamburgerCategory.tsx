import React from 'react';
import { Accordion } from '../ui/accordion';
import CategoryAccordion from '../pages/main/home/CategoryAccordion';
import { topCategoryDataType } from '@/types/ResponseTypes';

function HamburgerCategory({
  topCategories,
}: {
  topCategories: topCategoryDataType[];
}) {
  return (
    <div className="mt-14">
      <ul className="w-full fixed top-14 left-0 bg-white font-semibold text-[#666666] z-50 p-4">
        <Accordion type="single" collapsible>
          {topCategories.map((main) => {
            return (
              <div key={main.id}>
                <CategoryAccordion main={main} />
              </div>
            );
          })}
        </Accordion>
      </ul>
    </div>
  );
}

export default HamburgerCategory;
