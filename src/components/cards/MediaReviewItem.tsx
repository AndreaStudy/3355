import { getMainImageData } from '@/actions/image/imageActions';
import { reviewDataType } from '@/types/ResponseTypes';
import React from 'react';
import FitImage from '../ui/FitImage';

async function MediaReviewItem({
  mediaReviewUuid,
}: {
  mediaReviewUuid: string;
}) {
  const img = await getMainImageData(mediaReviewUuid);
  return (
    <>
      {img.s3url !== '' && (
        <div className="w-24 min-w-24 h-24 ">
          <FitImage src={img.s3url} alt={img.imageName} />
        </div>
      )}
    </>
  );
}

export default MediaReviewItem;
