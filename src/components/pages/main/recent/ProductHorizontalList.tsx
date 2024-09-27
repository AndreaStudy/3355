'use client';
import ProductHorizontalItem from '@/components/cards/ProductHorizontalItem';
import HorizontalSkeleton from '@/components/skeletons/HorizontalSkeleton';
import React, { Dispatch, SetStateAction, Suspense, useState } from 'react';

function ProductHorizontalList({
  productUuidList,
  checkedItems,
  setCheckedItems,
  isSetting,
}: {
  productUuidList: string[];
  checkedItems: string[];
  setCheckedItems: Dispatch<SetStateAction<string[]>>;
  isSetting: boolean;
}) {
  return (
    <ul
      className={`flex flex-col ${isSetting ? 'pl-10' : 'pl-4'} pr-4 py-3 mt-4 gap-3`}
    >
      {productUuidList.map((productUuid) => {
        return (
          <Suspense key={productUuid} fallback={<HorizontalSkeleton />}>
            <ProductHorizontalItem
              productUuid={productUuid}
              isSetting={isSetting}
              isSelected={checkedItems.includes(productUuid)}
              setCheckedItems={setCheckedItems}
            />
          </Suspense>
        );
      })}
    </ul>
  );
}

export default ProductHorizontalList;
