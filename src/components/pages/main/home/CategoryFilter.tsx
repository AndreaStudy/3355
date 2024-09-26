'use client';
import { topCategoryDataType } from '@/types/ResponseTypes';
import React, { Dispatch, SetStateAction, useState } from 'react';
import CategoryFilterButton from './CategoryFilterButton';
import { Drawer } from '@/components/ui/drawer';
import { ChevronDown } from 'lucide-react';
import CategoryDrawer from './CategoryDrawer';

function CategoryFilter({
  categoryList,
  selected,
  setSelected,
}: {
  categoryList: topCategoryDataType[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="w-full flex justify-around items-center">
      <ul className="w-[90%] flex overflow-x-auto gap-2 text-sm py-2 px-4">
        {categoryList.map((category, index) => {
          return (
            <CategoryFilterButton
              key={category.id}
              category={category}
              idx={index}
              isSelected={selected === category.topCategoryName}
              setSelected={setSelected}
            />
          );
        })}
      </ul>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <button
          className="bg-white border p-1 mr-4 shadow-[0px_0px_10px_10px_rgba(255,255,255,0.95)]"
          onClick={() => handleDrawerToggle()}
        >
          <ChevronDown stroke="gray" />
        </button>
        {isDrawerOpen && (
          <CategoryDrawer
            categoryList={categoryList}
            selected={selected}
            setSelected={setSelected}
            handleDrawerToggle={handleDrawerToggle}
          />
        )}
      </Drawer>
    </div>
  );
}

export default CategoryFilter;
