import SearchInput from '@/components/ui/SearchInput';
import React from 'react';
import ProductList from '../product/ProductList';
import ProductListServer from '../product/ProductListServer';

async function SearchResultSection({
  searchValue,
  productUuidList,
}: {
  searchValue: string;
  productUuidList: string[];
}) {
  return (
    <section className="mt-14 py-4 space-y-2">
      <SearchInput />
      {productUuidList.length === 0 ? (
        <div className="px-4 p-2 space-y-2">
          <p className="font-bold">
            &apos;{searchValue}&apos; 상품이 없습니다.
          </p>
          <p className="text-sm">
            단어의 철자나 띄어쓰기가 정확한지 확인해보세요
          </p>
        </div>
      ) : (
        <ProductListServer productUuidList={productUuidList} />
      )}
    </section>
  );
}

export default SearchResultSection;
