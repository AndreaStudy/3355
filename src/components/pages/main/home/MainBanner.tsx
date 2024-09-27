'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

import React, { Suspense, useRef, useState } from 'react';
import ArrowRightIcon from '/public/assets/images/icons/arrowRightIcon.svg';
import ShowAllEventList from './ShowAllEventList';
import PlayIcon from '/public/assets/images/icons/playIcon.svg';
import PauseIcon from '/public/assets/images/icons/pauseIcon.svg';
import SwiperCore from 'swiper';
import { eventUuidDataType } from '@/types/ResponseTypes';
import EventSwiperItem from './EventSwiperItem';
import { Skeleton } from '@/components/ui/skeleton';

function MainBanner({ eventUuidList }: { eventUuidList: eventUuidDataType[] }) {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentIndex(swiper.realIndex);
  };

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isAutoplay) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsAutoplay(!isAutoplay);
    }
  };
  return (
    <div className="w-full relative">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={'auto'}
      >
        {eventUuidList.map((eventUuid: eventUuidDataType) => (
          <SwiperSlide key={eventUuid.promotionUuid}>
            <Suspense fallback={<Skeleton />}>
              <EventSwiperItem eventUuid={eventUuid} />
            </Suspense>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-[2px] text-white font-bold text-xs absolute z-10 right-0 bottom-0">
        <div className="flex items-center gap-2 bg-gray-800 bg-opacity-60 px-2">
          {isAutoplay ? (
            <PauseIcon onClick={toggleAutoplay} />
          ) : (
            <PlayIcon onClick={toggleAutoplay} />
          )}
          <div className="tracking-widest">
            <span>{currentIndex + 1}</span>
            <span className="text-gray-400">/{eventUuidList.length}</span>
          </div>
        </div>
        <button
          className="flex items-center bg-gray-800 bg-opacity-60 p-2 pl-3"
          onClick={handleShowAll}
        >
          전체보기
          <ArrowRightIcon fill="white" width={16} height={16} />
        </button>
      </div>
      {showAll && (
        <ShowAllEventList
          eventUuidList={eventUuidList}
          handleShowAll={handleShowAll}
        />
      )}
    </div>
  );
}

export default MainBanner;
