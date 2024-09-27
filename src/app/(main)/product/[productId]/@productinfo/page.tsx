import { getProductInfo } from '@/actions/product/productActions';
import ProductDetailInfo from '@/components/pages/main/product/ProductDetailInfo';
import ProductInfo from '@/components/pages/main/product/ProductInfo';
import FitImage from '@/components/ui/FitImage';
import React from 'react';

async function Page({ params }: { params: { productId: string } }) {
  const productInfo = await getProductInfo(params.productId);

  return (
    <>
      <div className="mt-14">
        <FitImage
          src={productInfo.image.s3url}
          alt={productInfo.image.imageName}
        />
      </div>
      <ProductInfo productInfo={productInfo} />
      <ProductDetailInfo productInfo={productInfo} />
    </>
  );
}

export default Page;
