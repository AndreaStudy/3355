import { productsByEventDatas } from '@/datas/main/productDatas';
import { productByEventType } from '@/types/main/productType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Product from '../../../cards/Product';

async function ProductsByEvent({
  eventItem,
}: {
  eventItem: productByEventType;
}) {
  //todo 하트 아이콘 사용자에 따라

  return (
    <section className="w-full pt-10 px-4">
      <h1 className="text-2xl font-bold">{eventItem.eventName}</h1>
      <div className="pt-4 overflow-x-auto flex gap-4">
        {/* {eventItem.productList.map((product) => {
          return (
            <Product key={product.productId} product={product} size="md" />
          );
        })} */}
      </div>
    </section>
  );
}

export default ProductsByEvent;
