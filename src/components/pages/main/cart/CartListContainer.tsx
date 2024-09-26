'use client';
import React from 'react';
import { cartItemType } from '@/types/RequestTypes';
import { HrUi } from '@/components/ui/HrUi';
import { cartCheckUpdate } from '@/actions/cart/cartAction';
import CartCard from './CartCard';
import { Layout } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';

export default function CartListContainer({
  cartItemList,
}: {
  cartItemList: cartItemType[] | [];
}) {
  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    cartItemList.map((item) => cartCheckUpdate(item, e.target.checked));
  };

  const handleItemCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: cartItemType,
    checked: boolean
  ) => {
    cartCheckUpdate(item, checked);
  };
  const totalPrice = cartItemList.reduce((acc, item) => {
    return item.checked ? acc + item.limitQuantity * item.currentQuantity : acc;
  }, 0);

  const checkedItemCount = cartItemList.filter((item) => item.checked).length;

  return (
    <form className="w-full">
      <fieldset className="flex justify-between gap-4 px-4 pt-4 pb-2">
        <input
          type="checkbox"
          name="전체선택"
          id="all"
          className="hidden"
          checked={cartItemList.every((item) => item.checked)}
          onChange={handleCheckAll}
        />
        <label htmlFor="all" className="flex items-center cursor-pointer">
          <span className="relative flex items-center font-bold">
            <span
              className={`w-7 h-7 border-starbucks-green b-2 rounded-sm flex items-center justify-center mr-2 ${cartItemList.every((item) => item.checked) ? 'bg-starbucks-green' : 'bg-white'}`}
            >
              <span
                className={`w-5 h-5 text-white ml-[6px] mb-[4px] text-lg ${cartItemList.every((item) => item.checked) ? 'block' : 'hidden'}`}
              >
                {'✓'}
              </span>
            </span>
            전체선택
          </span>
        </label>
        <p className="flex gap-x-2">
          <span className="text-starbucks-green">선택삭제</span>
          <span>|</span>
          <span className="text-gray-400">전체삭제</span>
        </p>
      </fieldset>
      <HrUi />
      {cartItemList.map((item, idx) => (
        <React.Fragment key={idx}>
          <fieldset className="flex items-start gap-4 px-6 pt-6 pb-4 border-b-2 border-slate-200">
            <input
              type="checkbox"
              name={item.productUuid.toString()}
              id={item.productUuid.toString()}
              className="hidden"
              checked={item.checked}
              onChange={(e) => handleItemCheck(e, item, e.target.checked)}
            />
            <label
              htmlFor={item.productUuid.toString()}
              className="flex items-center cursor-pointer font-bold"
            >
              <span className="relative flex items-center">
                <span
                  className={`w-7 h-7 border-starbucks-green b-2 rounded-sm flex items-center justify-center mr-2 ${cartItemList.every((item) => item.checked) ? 'bg-starbucks-green' : 'bg-white'}`}
                >
                  <span
                    className={`w-5 h-5 text-white ml-[6px] mb-[4px] text-lg ${cartItemList.every((item) => item.checked) ? 'block' : 'hidden'}`}
                  >
                    {'✓'}
                  </span>
                </span>
              </span>
            </label>
            <CartCard item={item} />
          </fieldset>
        </React.Fragment>
      ))}
      {cartItemList.length > 0 ? (
        <section className="mb-[120px]">
          <div className="w-full flex flex-col text-center py-4 bg-starbucks-lightgray text-sm">
            <p>
              상품 <span className="font-semibold">{checkedItemCount}</span>건{' '}
              <span className="font-semibold">{totalPrice}</span>원 + 배송비{' '}
              <span className="font-semibold">{0}</span>원 = 총{' '}
              <span className="font-semibold">{totalPrice}</span>원<br />
            </p>
            <p className="font-semibold py-1">무료배송</p>
            <span className="text-amber-800 underline underline-offset-4 py-2">
              더 담으러 가기
            </span>
          </div>
          <div className="text-md p-4">
            <p className="flex justify-between">
              <span>상품 금액</span>
              <span className="text-lg font-bold">{totalPrice}원</span>
            </p>
            <p className="flex justify-between">
              <span>할인 금액</span>
              <span className="text-lg font-bold">{}원</span>
            </p>
            <p className="flex justify-between">
              <span>배송비</span>
              <span className="text-lg font-bold">{}원</span>
            </p>
            <p className="flex justify-between">
              <span>총 결제예정금액</span>
              <span className="text-lg font-bold">{totalPrice}원</span>
            </p>
            <p className="bg-starbucks-lightgray 0 p-4 text-sm">
              장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대
              2개월간 보관됩니다.
              <br />
              총 결제예정금액은 결제 단계에서 추가 할인 수단 적용으로 달라질 수
              있습니다.
              <br />
              가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
            </p>
          </div>
        </section>
      ) : (
        <div>장바구니가 비었습니다.</div>
      )}
      <Layout className="" variant={'submitDiv'}>
        <div className="flex justify-between p-2 font-bold">
          <p className="text-lg">
            총{' '}
            <span className="text-starbucks-green">{checkedItemCount}건</span>
          </p>
          <p className="text-2xl">{totalPrice}원</p>
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <Button size={'submit'} type="button">
            선물하기
          </Button>
          <Button size={'submit'} type="submit">
            구매하기
          </Button>
        </div>
      </Layout>
    </form>
  );
}
