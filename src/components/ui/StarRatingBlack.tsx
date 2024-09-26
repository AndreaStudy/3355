import React from 'react';

function StarRatingBlack({ reviewScore }: { reviewScore: number }) {
  return (
    <div>
      {[...Array(reviewScore)].map((_, index) => (
        <span key={index}>★</span>
      ))}
      {[...Array(5 - reviewScore)].map((_, index) => (
        <span key={index} className="text-gray-300">
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRatingBlack;
