'use client';
import React, { useEffect, useState } from 'react';
import CloseIcon from '/public/assets/images/icons/closeIcon.svg';
import Link from 'next/link';
import FitImage from '@/components/ui/FitImage';
import { eventItemDataType, eventUuidDataType } from '@/types/ResponseTypes';
import { getEventItem } from '@/actions/event/eventActions';
import EventItem from '@/components/cards/EventItem';

function ShowAllEventList({
  eventUuidList,
  handleShowAll,
}: {
  eventUuidList: eventUuidDataType[];
  handleShowAll: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="flex flex-col fixed top-0 left-0 w-full h-full min-h-screen bg-white overflow-y-auto z-50">
      <header className="fixed w-full bg-white text-center font-bold py-4 items-center">
        <h1>전체보기</h1>
        <CloseIcon
          fill="black"
          onClick={handleShowAll}
          className="absolute top-3 right-2"
        />
      </header>
      <div className="mt-14">
        {eventUuidList.map((eventUuid) => (
          <EventItem key={eventUuid.promotionUuid} eventUuid={eventUuid} />
        ))}
      </div>
    </div>
  );
}

export default ShowAllEventList;
