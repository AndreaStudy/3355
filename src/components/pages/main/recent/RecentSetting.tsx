'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { CircleX, Settings } from 'lucide-react';
import React, { Dispatch, SetStateAction, useState } from 'react';

function RecentSetting({
  len,
  checkedItems,
  setCheckedItems,
  productUuidList,
  isSetting,
  handleClick,
}: {
  len: number;
  checkedItems: string[];
  setCheckedItems: Dispatch<SetStateAction<string[]>>;
  productUuidList: string[];
  isSetting: boolean;
  handleClick: () => void;
}) {
  const handleSubmit = () => {
    // todo: 삭제 (delete api) 후 redirect??
    if (checkedItems.length > 0) {
      console.log(checkedItems);
    }
  };
  const handleSelectAll = (checked: boolean | string) => {
    if (checked) {
      setCheckedItems(productUuidList);
    } else {
      setCheckedItems([]);
    }
  };

  return (
    <>
      {!isSetting ? (
        len > 0 ? (
          <div
            className="absolute top-4 right-4 text-[13px] flex items-center gap-1"
            onClick={() => handleClick()}
          >
            <span>편집</span>
            <Settings width={14} stroke="#555555" />
          </div>
        ) : null
      ) : (
        <div>
          <div
            className="absolute top-4 right-4 text-[13px] flex items-center gap-1"
            onClick={() => handleClick()}
          >
            <span>취소</span>
            <CircleX width={14} stroke="#555555" />
          </div>
          <div className="absolute top-12 left-4 flex items-center gap-2">
            <Checkbox
              id="all"
              className="border-gray-500 data-[state=checked]:bg-starbucks-red data-[state=checked]:border-starbucks-red"
              onCheckedChange={(checked) => handleSelectAll(checked)}
              checked={checkedItems.length === len}
            />
            <label htmlFor="all" className="text-sm text-gray-500">
              전체 선택
            </label>
          </div>
          <button
            className={`w-full h-12 absolute bottom-0 left-0 z-10 ${checkedItems.length > 0 ? 'bg-starbucks-red text-white' : 'bg-gray-200 text-gray-500'}`}
            onClick={handleSubmit}
          >
            최근 본 상품에서 삭제
          </button>
        </div>
      )}
    </>
  );
}

export default RecentSetting;
