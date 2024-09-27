'use client';
import React, { useEffect, useState } from 'react';
import { cartItemType } from '@/types/RequestTypes';
import { CircleDashed } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import CartCard from './CartCard';
import { shippingProductDataType } from '@/types/ResponseTypes';
import {
  getProductBasicInfo,
  getProductPrice,
} from '@/actions/product/productActions';
import { getMainImageData } from '@/actions/image/imageActions';

const fetchProductData = async (productUuid: string) => {
  const productBasic = await getProductBasicInfo(productUuid);
  const productPrice = await getProductPrice(productUuid);
  const productImage = await getMainImageData(productUuid);
  return {
    basicInfo: productBasic,
    price: productPrice,
    image: productImage,
  };
};

export default function CartItem({
  item,
  isLoading,
  curruntId,
  handleChangeChecked,
  handleDelete,
  handleIncrease,
  handleDecrease,
}: {
  item: cartItemType;
  isLoading: boolean;
  curruntId: string;
  handleChangeChecked: (item: cartItemType) => void;
  handleDelete: (id: string) => void;
  handleIncrease: (item: cartItemType) => void;
  handleDecrease: (item: cartItemType) => void;
}) {
  const [product, setProduct] = useState<shippingProductDataType | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      setIsFetching(true);
      const productData = await fetchProductData(item.productUuid);
      setProduct(productData);
      setIsFetching(false);
    };
    getProduct();
  }, [item.productUuid]);

  return (
    <fieldset className="flex justify-between gap-4 py-4 items-center">
      <div className="flex items-center gap-2 text-sm">
        {isLoading && item.productUuid === curruntId ? (
          <CircleDashed
            strokeWidth={0.8}
            className="size-[24px] animate-spin"
          />
        ) : (
          <Checkbox
            className="size-[24px] data-[state=checked]:bg-starbucks-green"
            checked={item.checked}
            onClick={() => handleChangeChecked(item)}
            name={item.productUuid.toString()}
            id={item.productUuid.toString()}
          />
        )}
        {isFetching ? (
          <div>로딩 중...</div>
        ) : (
          <CartCard
            item={item}
            product={product}
            handleDelete={handleDelete}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
        )}
      </div>
    </fieldset>
  );
}
