import React from 'react';
import { cartItemType } from '@/types/RequestTypes';
import { CircleDashed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

function CartControls({
  isLoading,
  curruntId,
  cartItemList,
  handleCheckAll,
  handleConfirm,
  handleDeleteCheckList,
}: {
  isLoading: boolean;
  curruntId: string;
  cartItemList: cartItemType[];
  handleCheckAll: (checked: boolean) => void;
  handleConfirm: () => void;
  handleDeleteCheckList: () => void;
}) {
  return (
    <fieldset className="flex justify-between items-center py-4">
      <div className="flex justify-center items-center gap-2 text-sm">
        {isLoading && curruntId === 'all' ? (
          <CircleDashed className=" animate-spin size-[24px]" />
        ) : (
          <Checkbox
            className="size-[24px] data-[state=checked]:bg-starbucks-green"
            name="전체선택"
            id="all"
            checked={cartItemList.every((item) => item.checked)}
            onClick={() =>
              handleCheckAll(!cartItemList.every((item) => item.checked))
            }
          />
        )}
        <label htmlFor="all">전체선택</label>
      </div>
      <div className="flex justify-between items-center">
        <Button
          size={'sm'}
          variant={'ghost'}
          {...(!isLoading && { onClick: () => handleConfirm() })}
        >
          전체삭제
        </Button>
        <Button
          size={'sm'}
          variant={'ghost'}
          {...(!isLoading && { onClick: () => handleDeleteCheckList() })}
        >
          선택삭제
        </Button>
      </div>
    </fieldset>
  );
}

export default CartControls;
