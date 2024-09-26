import { Button } from '@/components/ui/button';
import { startOfToday, subMonths } from 'date-fns';
import { useState } from 'react';

interface PeriodFilterProps {
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
}

export const PeriodFilter: React.FC<PeriodFilterProps> = ({
  setStartDate,
  setEndDate,
}) => {
  const [activeButton, setActiveButton] = useState('1개월');

  const handlePeriodSelect = (period: string) => {
    const today = startOfToday();
    setActiveButton(period);

    if (period === '1개월') {
      setStartDate(subMonths(today, 1));
      setEndDate(today);
    } else if (period === '1년') {
      setStartDate(subMonths(today, 12));
      setEndDate(today);
    }
  };

  return (
    <>
      <Button
        type="button"
        variant="orderlist"
        onClick={() => {
          handlePeriodSelect('1개월');
        }}
        className={
          activeButton === '1개월' ? 'bg-starbucks-green text-white' : ''
        }
      >
        1개월
      </Button>
      <Button
        type="button"
        variant="orderlist"
        onClick={() => {
          handlePeriodSelect('1년');
        }}
        className={
          activeButton === '1년' ? 'bg-starbucks-green text-white' : ''
        }
      >
        1년
      </Button>
      <Button
        type="button"
        variant="orderlist"
        onClick={() => {
          handlePeriodSelect('기간 설정');
        }}
        className={
          activeButton === '기간 설정' ? 'bg-starbucks-green text-white' : ''
        }
      >
        기간 설정
      </Button>
    </>
  );
};
