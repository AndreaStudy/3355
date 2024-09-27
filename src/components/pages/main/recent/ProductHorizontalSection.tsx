'use client';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import RecentSetting from './RecentSetting';
import ProductHorizontalList from './ProductHorizontalList';

function ProductHorizontalSection({
  productUuidList,
}: {
  productUuidList: string[];
}) {
  const pathName = usePathname();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [isSetting, setIsSetting] = useState<boolean>(false);
  const handleClick = () => {
    setIsSetting(!isSetting);
  };
  return (
    <>
      {pathName === '/recent' && (
        <RecentSetting
          len={productUuidList.length}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
          productUuidList={productUuidList}
          isSetting={isSetting}
          handleClick={handleClick}
        />
      )}
      {productUuidList.length === 0 ? (
        pathName === '/recent' ? (
          <p className="w-full h-[80vh] flex justify-center items-center font-semibold text-black">
            최근 본 상품이 없습니다.
          </p>
        ) : (
          <p className="w-full h-[80vh] flex justify-center items-center font-semibold text-black">
            찜한 상품이 없습니다.
          </p>
        )
      ) : (
        <ProductHorizontalList
          productUuidList={productUuidList}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
          isSetting={isSetting}
        />
      )}
    </>
  );
}

export default ProductHorizontalSection;
