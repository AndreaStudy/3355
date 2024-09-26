'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

function ImgSwiper({ imgList }: { imgList: string[] }) {
  return (
    <>
      <Swiper
        pagination={{ type: 'fraction' }}
        loop={true}
        modules={[Pagination, Navigation]}
        className="w-full h-full"
      >
        {imgList.map((img, index) => {
          return (
            <SwiperSlide
              key={index}
              className="justify-center items-center text-center"
            >
              <Image
                src={img}
                alt={`image${index}`}
                width={640}
                height={480}
                className="block object-cover w-full"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default ImgSwiper;
