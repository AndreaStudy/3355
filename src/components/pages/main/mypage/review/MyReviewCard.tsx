import { getMainImageData } from '@/actions/image/imageActions';
import StarRatingBlack from '@/components/ui/StarRatingBlack';
import { imageDataType, myReviewDataType } from '@/types/ResponseTypes';
import Image from 'next/image';
import Link from 'next/link';

async function MyReviewCard({ myReview }: { myReview: myReviewDataType }) {
  const image: imageDataType = (await getMainImageData(
    myReview.reviewUuid
  )) as imageDataType;

  return (
    <Link
      href={`product/${myReview.productUuid}/reviewdetail?reviewId=${myReview.reviewUuid}`}
    >
      <div className="grid grid-cols-4 py-2">
        <div className="col-span-1 p-2">
          <Image
            src={image.s3url}
            alt="상품에 대한 review 이미지"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="col-span-3 ml-2">
          <p className="text-md font-bold">{image.imageName}</p>
          <StarRatingBlack reviewScore={myReview.reviewScore} />
          <p className="text-sm text-slate-500">{myReview.content}</p>
          <p className="float-right text-sm text-slate-500">
            {myReview.modDate}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MyReviewCard;
