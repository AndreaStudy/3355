import React from 'react';
import MainBanner from '@/components/pages/main/home/MainBanner';
import TrendTags from '@/components/pages/main/home/TrendTags';
import ReviewBest from '@/components/pages/main/home/ReviewBest';
import StarbucksBest from '@/components/pages/main/home/StarbucksBest';
import ProductsByEventList from '@/components/pages/main/home/ProductsByEventList';
import { getTopCategories } from '@/actions/category/categoryActions';
import {
  eventInfoDataType,
  eventUuidDataType,
  topCategoryDataType,
} from '@/types/ResponseTypes';
import {
  getEventInfoList,
  getEventUuidList,
} from '@/actions/event/eventActions';

export default async function Page() {
  const topCategories: topCategoryDataType[] = await getTopCategories();

  const eventUuidList: eventUuidDataType[] = await getEventUuidList();
  const eventInfoList: eventInfoDataType[] =
    await getEventInfoList(eventUuidList);

  return (
    <main className="bg-white">
      <MainBanner eventInfoList={eventInfoList} />
      <TrendTags />
      <ProductsByEventList />
      <ReviewBest />
      <StarbucksBest categoryList={topCategories} />
    </main>
  );
}
