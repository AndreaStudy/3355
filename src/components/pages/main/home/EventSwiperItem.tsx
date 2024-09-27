import FitImage from '@/components/ui/FitImage';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { eventItemDataType, eventUuidDataType } from '@/types/ResponseTypes';
import { getEventItem } from '@/actions/event/eventActions';

function EventSwiperItem({ eventUuid }: { eventUuid: eventUuidDataType }) {
  const [eventInfo, setEventInfo] = useState<eventItemDataType>();

  useEffect(() => {
    const getData = async () => {
      const res = await getEventItem(eventUuid);
      setEventInfo(res);
    };
    getData();
  }, [eventUuid]);

  return (
    <Link href={`/event/${eventUuid.promotionUuid}`}>
      {eventInfo && (
        <FitImage src={eventInfo.image.s3url} alt={eventInfo.image.imageName} />
      )}
    </Link>
  );
}

export default EventSwiperItem;
