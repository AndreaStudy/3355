import { getTrendTag } from '@/actions/tag/tagActions';
import TrendTagItem from '@/components/cards/TrendTagItem';
import React from 'react';

async function TrendTags() {
  const trendTags = await getTrendTag();

  return (
    <section className="w-full pt-10 px-4">
      <h1 className="text-2xl font-bold">TREND TAG</h1>
      <div className="pt-2 overflow-x-auto flex">
        {trendTags.map((tag, index) => {
          return (
            <TrendTagItem
              key={`tag-${index}`}
              tag={tag.tagName}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
}

export default TrendTags;
