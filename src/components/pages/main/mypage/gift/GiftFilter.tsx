'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { startOfToday, subMonths } from 'date-fns';
import { PeriodFilter } from '../orderlist/PeriodFilter';
import { CalendarPopover } from '../orderlist/CalendarPopover';
import { GiftStatusSelect } from './GiftStatusSelect';

function GiftFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [orderType, setOrderType] = useState('전체');
  const [orderStatus, setOrderStatus] = useState('전체');
  const [startDate, setStartDate] = useState<Date>(
    subMonths(startOfToday(), 1)
  );
  const [endDate, setEndDate] = useState<Date>(startOfToday());

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setOrderType('전체');
  }, []);

  return (
    <section className="p-4 relative">
      <div className="flex justify-between items-baseline text-md relative height-[56px]">
        <p>{orderType}</p>
        <p onClick={handleToggle} className="flex gap-x-2">
          최근 3개월 동안 구매한 상품
          <span>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
        </p>
      </div>
      {isOpen && (
        <form className="absolute grid gap-y-4 top-[56px] left-0 right-0 bg-white z-10 p-4 mt-4 shadow-md">
          <div className="grid grid-cols-3 gap-x-2">
            <PeriodFilter setStartDate={setStartDate} setEndDate={setEndDate} />
          </div>
          <div className="grid grid-cols-11 gap-2 text-center">
            <CalendarPopover date={startDate} setDate={setStartDate} />
            <p className="font-bold text-3xl mt-1">~</p>
            <CalendarPopover date={endDate} setDate={setEndDate} />
          </div>
          <div className="grid grid-cols-1 gap-x-2">
            <GiftStatusSelect
              orderStatus={orderStatus}
              setOrderStatus={setOrderStatus}
            />
          </div>
          {/* todo:onSubmit으로 바꿔서 데이터 받아오는 걸로 바꿔야함. */}
          <Button onClick={handleToggle} size={'submit'} type="submit">
            조회
          </Button>
        </form>
      )}
    </section>
  );
}

export default GiftFilter;
