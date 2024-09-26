import { topCategoryDataType } from '@/types/ResponseTypes';
import React, { Dispatch, SetStateAction } from 'react';

function CategoryFilterButton({
  category,
  idx,
  isSelected,
  setSelected,
}: {
  category: topCategoryDataType;
  idx: number;
  isSelected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}) {
  return (
    <li
      className={`text-nowrap px-3 py-2 border tracking-tighter ${isSelected && 'bg-black text-white'}`}
      onClick={() => setSelected(category.topCategoryName)}
    >
      <button>{category.topCategoryName}</button>
    </li>
  );
}

export default CategoryFilterButton;
