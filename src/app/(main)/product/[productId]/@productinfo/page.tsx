import { getMainImageData } from '@/actions/image/imageActions';
import {
  getProductBasicInfo,
  getProductPrice,
  getProductReviewSummary,
} from '@/actions/product/productActions';
import ProductDetailInfo from '@/components/pages/main/product/ProductDetailInfo';
import ProductInfo from '@/components/pages/main/product/ProductInfo';
import FitImage from '@/components/ui/FitImage';
import { productInfoDataType } from '@/types/ResponseTypes';
import React from 'react';

async function Page({ params }: { params: { productId: string } }) {
  const [basicInfo, price, reviewSummary, image] = await Promise.all([
    getProductBasicInfo(params.productId),
    getProductPrice(params.productId),
    getProductReviewSummary(params.productId),
    getMainImageData(params.productId),
  ]);
  const productInfo: productInfoDataType = {
    productUuid: params.productId,
    ...basicInfo,
    ...price,
    ...reviewSummary,
    image: image,
  };

  return (
    <>
      <div className="mt-14">
        <FitImage src={image.s3url} alt={image.imageName} />
      </div>
      <ProductInfo productInfo={productInfo} />
      <ProductDetailInfo productInfo={productInfo} />
    </>
  );
}

export default Page;
