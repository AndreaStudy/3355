import React from 'react';
import StarIcon from '/public/assets/images/icons/starIcon.svg';

function StarRating({ rating, w }: { rating: number; w: number }) {
  const getStarPercentage = (starIndex: number) => {
    const starValue = starIndex + 1;
    if (rating >= starValue) {
      return 100; // 별이 완전히 채워진 경우
    } else if (rating < starValue - 1) {
      return 0; // 별이 전혀 채워지지 않은 경우
    } else {
      return (rating - starIndex) * 100 * 1.25; // 별이 부분적으로 채워진 경우
    }
  };
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="relative -ml-1 w-6">
          <StarIcon width={w} height={w} fill="#C6C6C6" />
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${getStarPercentage(index)}%` }}
          >
            <StarIcon width={w} height={w} fill="#FF5452" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default StarRating;
