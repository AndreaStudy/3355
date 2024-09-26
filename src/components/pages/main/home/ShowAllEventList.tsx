'use client';
import React, { useEffect } from 'react';
import CloseIcon from '/public/assets/images/icons/closeIcon.svg';
import Link from 'next/link';
import FitImage from '@/components/ui/FitImage';
import { eventInfoDataType } from '@/types/ResponseTypes';

function ShowAllEventList({
  eventInfoList,
  handleShowAll,
  currentIndex,
}: {
  eventInfoList: eventInfoDataType[];
  handleShowAll: () => void;
  currentIndex: number;
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex]);

  return (
    <div className="flex flex-col fixed top-0 left-0 w-full h-full overflow-y-auto z-50">
      <header className="fixed w-full bg-white text-center font-bold py-4 items-center">
        <h1>전체보기</h1>
        <CloseIcon
          fill="black"
          onClick={handleShowAll}
          className="absolute top-3 right-2"
        />
      </header>
      <div className="mt-14">
        {eventInfoList.map((eventInfo) => {
          return (
            <Link
              key={eventInfo.eventUuid}
              href={`/event/${eventInfo.eventUuid}`}
            >
              <FitImage
                src={eventInfo.eventThumbnailPath}
                alt={eventInfo.eventThumbnailAlt}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ShowAllEventList;
