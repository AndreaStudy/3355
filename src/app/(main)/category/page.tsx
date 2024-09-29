import { getTopCategories } from '@/actions/category/categoryActions';
import { getProductsByCategory } from '@/actions/product/productActions';
import CategoryBreadcrumb from '@/components/pages/main/category/CategoryBreadcrumb';
import FilterBadgeList from '@/components/pages/main/category/FilterBadgeList';
import ProductList from '@/components/pages/main/product/ProductList';
import ProductListServer from '@/components/pages/main/product/ProductListServer';
import { topCategoryDataType } from '@/types/ResponseTypes';
import React from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const topCategories: topCategoryDataType[] = await getTopCategories();
  const mainName = searchParams?.mainName;
  const subName = searchParams?.subName;

  const productUuidList = await getProductsByCategory(mainName, subName);
  return (
    <main className="bg-white w-full h-full mt-14">
      <CategoryBreadcrumb
        topCategories={topCategories}
        mainName={mainName}
        subName={subName}
      />
      <FilterBadgeList mainName={mainName} />
      {productUuidList.length === 0 ? (
        <p className="px-4 text-center text-gray-500">검색 결과가 없습니다.</p>
      ) : (
        <section>
          <p className="px-4 text-sm text-gray-500">
            <span className="text-black font-semibold">
              {productUuidList.length}
            </span>
            개의 상품이 있습니다.
          </p>
          <ProductListServer productUuidList={productUuidList} />
        </section>
      )}
    </main>
  );
}
