import { getTopCategories } from '@/actions/category/categoryActions';
import CategoryBreadcrumb from '@/components/pages/main/category/CategoryBreadcrumb';
import FilterBadgeList from '@/components/pages/main/category/FilterBadgeList';
import ProductList from '@/components/pages/main/product/ProductList';
import { bestDatas } from '@/datas/main/bestDatas';
import { topCategoryDataType } from '@/types/ResponseTypes';
import React from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: number };
}) {
  const topCategories: topCategoryDataType[] = await getTopCategories();
  const mainId = searchParams?.mainId;
  const subId = searchParams?.subId;

  // todo: product list data fetch
  const productList = bestDatas.productList;
  return (
    <main className="bg-white w-full h-full mt-14">
      <CategoryBreadcrumb
        topCategories={topCategories}
        mainId={mainId}
        subId={subId}
      />
      <FilterBadgeList mainId={mainId} />
      <p className="px-4 text-sm text-gray-500">
        <span className="text-black font-semibold">{30}</span>개의 상품이
        있습니다.
      </p>
      {/* <ProductList productList={productList} /> */}
    </main>
  );
}
