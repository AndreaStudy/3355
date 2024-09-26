import {
  getEventName,
  getProductUuidListByEvent,
} from '@/actions/event/eventActions';
import { getAllImageData } from '@/actions/image/imageActions';
import { getProductInfoList } from '@/actions/product/productActions';
import SimpleHeader from '@/components/layouts/SimpleHeader';
import ProductList from '@/components/pages/main/product/ProductList';
import FitImage from '@/components/ui/FitImage';
import {
  eventNameDataType,
  imageDataType,
  productInfoDataType,
  productUuidDataType,
} from '@/types/ResponseTypes';
import React from 'react';

async function Page({ params }: { params: { eventId: string } }) {
  const eventName: eventNameDataType = await getEventName(params.eventId);
  const eventImageList: imageDataType[] = await getAllImageData(params.eventId);
  const productUuidList: productUuidDataType[] =
    await getProductUuidListByEvent(params.eventId);
  const productList: productInfoDataType[] =
    await getProductInfoList(productUuidList);
  return (
    <>
      <SimpleHeader title={eventName.promotionName} />
      {eventImageList.map((eventImage) => {
        return (
          <FitImage
            key={eventImage.imageUuid}
            src={eventImage.s3url}
            alt={eventImage.imageName}
          />
        );
      })}
      <ProductList productList={productList} />
    </>
  );
}

export default Page;
