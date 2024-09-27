import Link from 'next/link';
import React from 'react';
import FitImage from '../ui/FitImage';
import { trendTagData } from '@/datas/main/trendtagData';

async function TrendTagItem({ tag, index }: { tag: string; index: number }) {
  return (
    <Link
      href={{
        pathname: '/result',
        query: { query: tag },
      }}
      scroll={false}
      className="w-24 min-w-24 h-auto mr-4 pb-4 flex flex-col items-center gap-2 "
    >
      <FitImage src={trendTagData[index].s3url} alt={tag} />
      <span className="text-sm">#{tag}</span>
    </Link>
  );
}

export default TrendTagItem;
