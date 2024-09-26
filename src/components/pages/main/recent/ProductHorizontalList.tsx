'use client';
import ProductHorizontalItem from '@/components/cards/ProductHorizontalItem';
import { Checkbox } from '@/components/ui/checkbox';
import { productInfoType } from '@/types/main/productType';
import { productInfoDataType } from '@/types/ResponseTypes';
import { CircleX, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

function ProductHorizontalList({
  productList,
}: {
  productList: productInfoDataType[];
}) {
  const pathName = usePathname();
  const [isSetting, setIsSetting] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<Array<string>>([]);

  const handleClick = () => {
    setIsSetting(!isSetting);
  };

  const handleSelectAll = (checked: boolean | string) => {
    if (checked) {
      setCheckedItems(productList.map((product) => product.productUuid));
    } else {
      setCheckedItems([]);
    }
  };
  const handleItemCheck = (id: string, checked: boolean | string) => {
    setCheckedItems((prev) =>
      checked ? [...prev, id] : prev.filter((itemId) => itemId !== id)
    );
  };

  const handleSubmit = () => {
    // todo: 삭제 (delete api) 후 redirect??
    if (checkedItems.length > 0) {
      console.log(checkedItems);
    }
  };
  return (
    <>
      {pathName === '/recent' &&
        (!isSetting ? (
          productList.length > 0 ? (
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
                checked={checkedItems.length === productList.length}
              />
              <label htmlFor="all" className="text-sm text-gray-500">
                전체 선택
              </label>
            </div>
          </div>
        ))}
      {isSetting && (
        <button
          className={`w-full h-12 absolute bottom-0 left-0 z-10 ${checkedItems.length > 0 ? 'bg-starbucks-red text-white' : 'bg-gray-200 text-gray-500'}`}
          onClick={handleSubmit}
        >
          최근 본 상품에서 삭제
        </button>
      )}
      <ul
        className={`flex flex-col ${isSetting ? 'pl-10' : 'pl-4'} pr-4 py-3 mt-4 gap-3`}
      >
        {productList.map((product) => {
          return (
            <ProductHorizontalItem
              key={product.productUuid}
              product={product}
              isSetting={isSetting}
              isSelected={checkedItems.includes(product.productUuid)}
              handleItemCheck={handleItemCheck}
            />
          );
        })}
      </ul>
    </>
  );
}

export default ProductHorizontalList;
