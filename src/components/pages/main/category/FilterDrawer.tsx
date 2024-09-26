import { getBottomCategories } from '@/actions/category/categoryActions';
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  bottomCategoryDataType,
  middleCategoryDataType,
} from '@/types/ResponseTypes';
import React, { useEffect, useState } from 'react';

function FilterDrawer({
  badgeList,
  activeTab,
  handleActiveTab,
}: {
  badgeList: middleCategoryDataType[];
  activeTab: number | undefined;
  handleActiveTab: (tabId: number) => void;
}) {
  const [bottomCategories, setBottomCategories] = useState<
    bottomCategoryDataType[]
  >([]);
  useEffect(() => {
    const getData = async () => {
      if (!activeTab) return;
      const data = await getBottomCategories(activeTab);
      setBottomCategories(data);
    };
    getData();
  }, [activeTab]);
  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>카테고리 필터</DrawerTitle>
        <DrawerDescription />
      </DrawerHeader>
      <div className="w-full h-96 px-4 flex flex-col gap-4">
        <ul className="flex">
          {badgeList.map((badge) => {
            return (
              <li
                key={badge.id}
                className={`py-2 mr-4 ${badge.id === activeTab && 'font-bold border-b-2 border-black'}`}
                onClick={() => handleActiveTab(badge.id)}
              >
                {badge.middleCategoryName}
              </li>
            );
          })}
        </ul>
        <RadioGroup>
          {bottomCategories.length > 0 &&
            bottomCategories.map((bottomCategory) => {
              return (
                <div key={bottomCategory.id} className="flex gap-2">
                  <RadioGroupItem
                    value={bottomCategory.bottomCategoryName}
                    id={`bottom-${bottomCategory.id}`}
                    className="data-[state=checked]:border-starbucks-red data-[state=checked]:text-starbucks-red"
                  />
                  <label
                    htmlFor={`bottom-${bottomCategory.id}`}
                    className="text-sm font-semibold"
                  >
                    {bottomCategory.bottomCategoryName}
                  </label>
                </div>
              );
            })}
        </RadioGroup>
      </div>
      <div className="w-full h-14 px-4 py-1 flex gap-2 justify-between items-center">
        <DrawerClose asChild>
          <button className="w-full h-full bg-starbucks-red text-white">
            상품보기
          </button>
        </DrawerClose>
      </div>
    </DrawerContent>
  );
}

export default FilterDrawer;
