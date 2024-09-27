import React from 'react';
import MainBanner from '@/components/pages/main/home/MainBanner';
import TrendTags from '@/components/pages/main/home/TrendTags';
import ReviewBest from '@/components/pages/main/home/ReviewBest';
import StarbucksBest from '@/components/pages/main/home/StarbucksBest';
import ProductsByEventList from '@/components/pages/main/home/ProductsByEventList';
import { getTopCategories } from '@/actions/category/categoryActions';
import { getEventUuidList } from '@/actions/event/eventActions';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

export default async function Page() {
  const topCategories = await getTopCategories();

  const eventUuidList = await getEventUuidList();
  const session = await getServerSession(options);

  return (
    <main className="bg-white">
      <MainBanner eventUuidList={eventUuidList} />
      <TrendTags />
      <ProductsByEventList eventUuidList={eventUuidList} />
      <ReviewBest />
      <StarbucksBest categoryList={topCategories} />
    </main>
  );
}
