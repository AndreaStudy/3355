import {
  getEventName,
  getProductUuidListByEvent,
} from '@/actions/event/eventActions';
import { getAllImageData } from '@/actions/image/imageActions';
import SimpleHeader from '@/components/layouts/SimpleHeader';
import ProductList from '@/components/pages/main/product/ProductList';
import ProductListServer from '@/components/pages/main/product/ProductListServer';
import FitImage from '@/components/ui/FitImage';
import React from 'react';

async function Page({ params }: { params: { eventId: string } }) {
  const eventName = await getEventName(params.eventId);
  const eventDetailImage = (await getAllImageData(params.eventId))[1];
  const productUuidList = await getProductUuidListByEvent(params.eventId);
  return (
    <>
      <SimpleHeader title={eventName.promotionName} />
      <FitImage src={eventDetailImage.s3url} alt={eventDetailImage.imageName} />
      <ProductListServer productUuidList={productUuidList} />
    </>
  );
}

export default Page;
