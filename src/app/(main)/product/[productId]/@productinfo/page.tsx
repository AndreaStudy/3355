import { getProductInfo } from '@/actions/product/productActions';
import ImgSwiper from '@/components/layouts/ImgSwiper';
import ProductDetailInfo from '@/components/pages/main/product/ProductDetailInfo';
import ProductInfo from '@/components/pages/main/product/ProductInfo';
import { productInfoDataType } from '@/types/ResponseTypes';
import React from 'react';

async function Page({ params }: { params: { productId: string } }) {
  const productInfo: productInfoDataType = await getProductInfo(
    params.productId
  );

  return (
    <>
      <div>{params.productId}</div>
      {/* <ImgSwiper imgList={productInfo.productThumbnailImageList} /> */}
      <ProductInfo productInfo={productInfo} />
      <ProductDetailInfo productInfo={productInfo} />
    </>
  );
}

export default Page;
