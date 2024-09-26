'use client';
import React, { useEffect, useState } from 'react';
import {
  productInfoDataType,
  topCategoryDataType,
} from '@/types/ResponseTypes';
import CategoryFilter from './CategoryFilter';
import ProductList from '../product/ProductList';
import {
  getProductInfoListByUuid,
  getProductsByCategory,
} from '@/actions/product/productActions';

function StarbucksBest({
  categoryList,
}: {
  categoryList: topCategoryDataType[];
}) {
  // todo: 무한 스크롤 (최대 50개까지)
  const [selected, setSelected] = useState<string>('텀블러/보온병');
  const [productList, setProductList] = useState<productInfoDataType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const productUuidList: string[] = await getProductsByCategory(selected);
      const data: productInfoDataType[] =
        await getProductInfoListByUuid(productUuidList);
      setProductList(data);
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
      <ProductList productList={productList} />
    </section>
  );
}

export default StarbucksBest;
