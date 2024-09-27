import Image from 'next/image';
import React from 'react';

function FitImage({ src, alt }: { src: string; alt: string }) {
  // todo: fit image div 크기 맞추기
  return (
    <div className="w-full h-auto overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        priority
        className="object-fit"
      />
    </div>
  );
}

export default FitImage;
