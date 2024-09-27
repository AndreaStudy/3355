'use server';
import { commonResType, imageDataType } from '@/types/ResponseTypes';
import { redirect } from 'next/navigation';

// 메인(썸네일) 이미지 조회
export async function getMainImageData(uuid: string): Promise<imageDataType> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/image/${uuid}/mainMedia`
  );

  if (res.status === 404)
    return {
      s3url: '',
      imageName: '',
      thumbnailPath: null,
      imageUuid: '',
      otherUuid: null,
    };
  if (!res.ok) {
    return redirect('/error?message=Image_fetch_error');
  }
  const data = (await res.json()) as commonResType<imageDataType>;
  return data.result as imageDataType;
}

// 이미지 목록 조회
export async function getAllImageData(uuid: string): Promise<imageDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/image/${uuid}/allMedias`
  );
  if (!res.ok) {
    return redirect('/error?message=Failed to fetch all images');
  }
  const data = (await res.json()) as commonResType<imageDataType[]>;
  return data.result as imageDataType[];
}
