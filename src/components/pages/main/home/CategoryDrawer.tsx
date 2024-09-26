'use client';

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

import React, { Dispatch, SetStateAction, useEffect } from 'react';
import CloseIcon from '/public/assets/images/icons/closeIcon.svg';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { topCategoryDataType } from '@/types/ResponseTypes';

function CategoryDrawer({
  categoryList,
  selected,
  setSelected,
  handleDrawerToggle,
}: {
  categoryList: topCategoryDataType[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  handleDrawerToggle: () => void;
}) {
  const handleSelected = (categoryName: string) => {
    setSelected(categoryName);
  };
  return (
    <DrawerContent className="pb-8">
      <DrawerHeader className="border-b border-gray-300 mb-2">
        <DrawerTitle className="text-sm">전체 카테고리</DrawerTitle>
        <DrawerDescription />
        <DrawerClose className="absolute right-4">
          <CloseIcon fill={'black'} />
        </DrawerClose>
      </DrawerHeader>
      <RadioGroup value={selected.toString()} className="p-4">
        {categoryList.map((category, index) => {
          return (
            <div
              key={category.id}
              className="space-x-4 mb-[10px] text-sm text-start"
              onClick={() => {
                handleSelected(category.topCategoryName);
                handleDrawerToggle();
              }}
            >
              <RadioGroupItem
                value={category.topCategoryName}
                className={
                  selected === category.topCategoryName
                    ? 'border-red-400 text-red-500'
                    : 'border-gray-400'
                }
                id={category.topCategoryName}
              />
              <label
                className={
                  selected === category.topCategoryName
                    ? 'font-bold'
                    : 'text-[#666666]'
                }
                htmlFor={category.topCategoryName}
              >
                {category.topCategoryName}
              </label>
            </div>
          );
        })}
      </RadioGroup>
    </DrawerContent>
  );
}

export default CategoryDrawer;
