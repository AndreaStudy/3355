import React, { useEffect, useState } from 'react';
import FitImage from '../ui/FitImage';
import Link from 'next/link';
import { eventItemDataType, eventUuidDataType } from '@/types/ResponseTypes';
import { getEventItem } from '@/actions/event/eventActions';

function EventItem({ eventUuid }: { eventUuid: eventUuidDataType }) {
  const [eventInfo, setEventInfo] = useState<eventItemDataType>();
  useEffect(() => {
    const getData = async () => {
      const data = await getEventItem(eventUuid);
      setEventInfo(data);
    };
    getData();
  }, []);
  return (
    <>
      {eventInfo && (
        <Link href={`/event/${eventUuid.promotionUuid}`}>
          <FitImage
            src={eventInfo.image.s3url}
            alt={eventInfo.image.imageName}
          />
        </Link>
      )}
    </>
  );
}

export default EventItem;
