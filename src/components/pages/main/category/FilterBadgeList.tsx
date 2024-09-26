'use client';
import { getMiddleCategories } from '@/actions/category/categoryActions';
import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import { middleCategoryDataType } from '@/types/ResponseTypes';
import React, { useEffect, useState } from 'react';
import FilterDrawer from './FilterDrawer';

function FilterBadgeList({ mainId }: { mainId: number }) {
  const [badgeList, setBadgeList] = useState<middleCategoryDataType[]>([]);
  const [activeTab, setActiveTab] = useState<number | undefined>();
  const handleActiveTab = (tabId: number) => {
    setActiveTab(tabId);
  };
  useEffect(() => {
    const getData = async () => {
      const data = (await getMiddleCategories(mainId)).filter(
        (middle) => middle.middleCategoryName !== '카테고리'
      );
      setBadgeList(data);
    };
    getData();
  }, [mainId]);
  return (
    <ul className="flex gap-3 text-xs px-4 py-2 text-gray-500">
      <Drawer>
        {badgeList.map((badge) => {
          return (
            <DrawerTrigger key={badge.id}>
              <li
                className="border border-gray-300 px-2 py-1 rounded-2xl"
                onClick={() => handleActiveTab(badge.id)}
              >
                {badge.middleCategoryName}
              </li>
            </DrawerTrigger>
          );
        })}
        <FilterDrawer
          badgeList={badgeList}
          activeTab={activeTab}
          handleActiveTab={handleActiveTab}
        />
      </Drawer>
    </ul>
  );
}

export default FilterBadgeList;
