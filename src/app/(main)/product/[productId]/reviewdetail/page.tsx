import React from 'react';

function Page({ params }: { params: { reviewId: string } }) {
  return <div>{params.reviewId}</div>;
}

export default Page;
