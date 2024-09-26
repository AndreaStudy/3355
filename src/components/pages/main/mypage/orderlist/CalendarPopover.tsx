import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format, startOfToday } from 'date-fns';

interface CalendarPopoverProps {
  date: Date;
  setDate: (date: Date) => void;
}

export const CalendarPopover: React.FC<CalendarPopoverProps> = ({
  date,
  setDate,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="calendar" className="col-span-5">
          {date ? format(date, 'yyyy.MM.dd') : <span>{date}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            if (selectedDate) {
              setDate(selectedDate);
            }
          }}
          initialFocus
          defaultMonth={date}
          disabled={[{ after: startOfToday() }]}
        />
      </PopoverContent>
    </Popover>
  );
};
