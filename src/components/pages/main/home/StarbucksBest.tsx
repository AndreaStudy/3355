'use client';
import React, { useEffect, useState } from 'react';
import { topCategoryDataType } from '@/types/ResponseTypes';
import CategoryFilter from './CategoryFilter';
import ProductList from '../product/ProductList';
import { getProductsByCategory } from '@/actions/product/productActions';

function StarbucksBest({
  categoryList,
}: {
  categoryList: topCategoryDataType[];
}) {
  // todo: 무한 스크롤
  const [selected, setSelected] = useState<string>('텀블러/보온병');
  const [productUuidList, setProductUuidList] = useState<string[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getProductsByCategory(selected);
      setProductUuidList(data);
    };
    getData();
  }, [selected]);

  return (
    <section className="w-full flex flex-col gap-1 pt-10">
      <h1 className="text-2xl font-bold px-4">스타벅스 베스트</h1>
      <p className="text-xs text-[#666666] px-4">
        스타벅스 인기 상품들을 만나보세요
      </p>
      <CategoryFilter
        categoryList={categoryList}
        selected={selected}
        setSelected={setSelected}
      />
      {productUuidList.length > 0 ? (
        <ProductList productUuidList={productUuidList} />
      ) : (
        <p className="px-4 pt-10 pb-8 text-center text-lg font-bold">
          상품을 준비중입니다.
        </p>
      )}
    </section>
  );
}

export default StarbucksBest;
