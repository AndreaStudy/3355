'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { cartItemType } from '@/types/RequestTypes';
import { HrUi } from '@/components/ui/HrUi';
import {
  cartCheckUpdate,
  deleteAllCartItemList,
  deleteCartCheckedItemList,
  deleteCartItem,
  quantityDecreaseUpdate,
  quantityIncreaseUpdate,
} from '@/actions/cart/cartAction';
import CartControls from './CartControls';
import CartItem from './CartItem';
import { CartModal } from './CartModal';
import Image from 'next/image';

export default function CartListContainer({
  cartItemList,
  token,
}: {
  cartItemList: cartItemType[];
  token: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [curruntId, setCurruntId] = useState<string>('');
  const [cartList, setCartList] = useState<cartItemType[]>(cartItemList);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckAll = (checked: boolean) => {
    setIsLoading(true);
    setCurruntId('all');
    cartItemList.forEach((item) => cartCheckUpdate(token, item));
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const handleChangeChecked = async (item: cartItemType) => {
    setIsOpen(false);
    setIsLoading(true);
    setCurruntId(item.productUuid);
    const res = await cartCheckUpdate(token, item);
    if (res) {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
  };

  const handleDelete = (id: string) => {
    setIsLoading(true);
    setCurruntId(id);
    deleteCartItem(token, id);
  };

  const handleDeleteCheckList = () => {
    deleteCartCheckedItemList(token);
  };

  const handleDeleteAll = () => {
    deleteAllCartItemList(token);
  };

  const handleIncrease = (item: cartItemType) => {
    quantityIncreaseUpdate(token, item);
  };

  const handleDecrease = (item: cartItemType) => {
    quantityDecreaseUpdate(token, item);
  };

  const handleConfirm = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setCartList(cartItemList);
  }, [cartItemList]);

  return (
    <main>
      <CartControls
        isLoading={isLoading}
        curruntId={curruntId}
        cartItemList={cartList}
        handleCheckAll={handleCheckAll}
        handleConfirm={handleConfirm}
        handleDeleteCheckList={handleDeleteCheckList}
      />
      <HrUi />
      {cartItemList.map((item) => (
        <Suspense
          key={item.productUuid}
          fallback={
            <Image
              src="/assets/images/gifs/loading.gif"
              alt="loading"
              width={100}
              height={100}
            />
          }
        >
          <CartItem
            item={item}
            isLoading={isLoading}
            curruntId={curruntId}
            handleChangeChecked={handleChangeChecked}
            handleDelete={handleDelete}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
        </Suspense>
      ))}
      <CartModal
        className="w-[350px] rounded-lg"
        open={isOpen}
        onClose={onClose}
        handleDeleteList={handleDeleteAll}
        title="주의"
        description="선택한 상품을 전체 삭제하시겠습니까?"
        cancelText="취소"
        confirmText="삭제"
      />
    </main>
  );
}
