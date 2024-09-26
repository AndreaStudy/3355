'use client';
import React, { useEffect, useState } from 'react';
import LikeButton from '@/components/ui/LikeButton';
import { Gift } from 'lucide-react';
import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import ProductBottomNavbarDrawer from './ProductBottomNavbarDrawer';
import { useParams } from 'next/navigation';
import {
  productBasicDataType,
  productPriceDataType,
} from '@/types/ResponseTypes';
import {
  getProductBasicInfo,
  getProductPrice,
} from '@/actions/product/productActions';

function ProductBottomNavbar() {
  const params = useParams();
  const productUuid = params.productId as string;
  const [productInfo, setProductInfo] = useState<productBasicDataType>();
  const [productPrice, setProductPrice] = useState<productPriceDataType>();
  const [type, setType] = useState<number>(0);
  const handleClick = (index: number) => {
    setType(index);
  };
  useEffect(() => {
    const getData = async () => {
      const basicData = await getProductBasicInfo(productUuid);
      const priceData = await getProductPrice(productUuid);
      setProductInfo(basicData);
      setProductPrice(priceData);
    };
    getData();
  }, []);
  return (
    <ul className="w-full flex items-center text-center h-14 fixed bottom-0 left-0 z-10 bg-white font-semibold">
      <li className="w-[15%] h-full border flex justify-center items-center">
        <LikeButton w={30} h={30} productUuid={productUuid} />
      </li>
      <Drawer>
        <DrawerTrigger asChild>
          <li
            className="w-[40%] h-full border flex gap-1 justify-center items-center"
            onClick={() => handleClick(1)}
          >
            <Gift width={20} />
            선물하기
          </li>
        </DrawerTrigger>
        <DrawerTrigger asChild>
          <li
            className="w-[65%] h-full border flex justify-center items-center text-white bg-starbucks-red"
            onClick={() => handleClick(2)}
          >
            구매하기
          </li>
        </DrawerTrigger>
        {productInfo && productPrice && (
          <ProductBottomNavbarDrawer
            type={type}
            productName={productInfo.productName}
            productPrice={productPrice.price}
          />
        )}
      </Drawer>
    </ul>
  );
}

export default ProductBottomNavbar;
