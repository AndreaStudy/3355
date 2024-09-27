import Link from 'next/link';
import React from 'react';
import FitImage from '@/components/ui/FitImage';
import { Minus, Plus, X } from 'lucide-react';
import { cartItemType } from '@/types/RequestTypes';
import { shippingProductDataType } from '@/types/ResponseTypes';
import { Button } from '@/components/ui/button';

function CartCard({
  item,
  product,
  handleDelete,
  handleIncrease,
  handleDecrease,
}: {
  item: cartItemType;
  product: shippingProductDataType | null;
  handleDelete: (id: string) => void;
  handleIncrease: (item: cartItemType) => void;
  handleDecrease: (item: cartItemType) => void;
}) {
  return (
    <div className={'grid grid-cols-4 h-auto pb-4 gap-2 w-full'}>
      <Link href={`/product/${item.productUuid}`}>
        {product?.image ? (
          <FitImage src={product.image.s3url} alt={product.image.imageName} />
        ) : (
          <div className="h-32 w-full flex items-center justify-center">
            <p>이미지 로딩 중...</p>
          </div>
        )}
      </Link>
      <div className="col-span-3 flex flex-col gap-1 text-sm text-[#222222]">
        <div className="flex flex-row justify-between">
          <Link href={`/product/${item.productUuid}`}>
            <p className="line-clamp-2">{product?.basicInfo.productName}</p>
          </Link>
          <X
            onClick={() => handleDelete(item.productUuid)}
            className="text-gray-300 border border-gray-300 rounded-full p-[2px]"
            size={20}
          />
        </div>
        <div className="flex justify-between mt-2 text-base font-bold text-black">
          <div className="flex justify-start items-center gap-x-3">
            <Button
              size={'xs'}
              variant={'update'}
              disabled={item.currentQuantity === 1}
            >
              <Minus
                onClick={() => handleDecrease(item)}
                className={` border  rounded-full p-[2px] ${item.currentQuantity === 1 && 'text-gray-300 border-gray-300'}`}
                size={20}
              />
            </Button>

            <p>{item.currentQuantity}</p>
            <Button
              size={'xs'}
              variant={'update'}
              disabled={item.currentQuantity === 3}
            >
              <Plus
                onClick={() => handleIncrease(item)}
                className={`border  rounded-full p-[2px] ${item.currentQuantity === 3 && 'text-gray-300 border-gray-300'}`}
                size={20}
              />
            </Button>
          </div>
          <p>{product?.price.price.toLocaleString()}원</p>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
