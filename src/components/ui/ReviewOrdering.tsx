import { ArrowUpDown } from 'lucide-react';
import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

function ReviewOrdering({
  ordering,
  setOrdering,
}: {
  ordering: string;
  setOrdering: Dispatch<SetStateAction<string>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (ordering: string) => {
    setOrdering(ordering);
    setIsOpen(!isOpen);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="flex gap-2">
        <div>
          <span>{ordering}</span>
          <ArrowUpDown width={10} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-3">
        <DropdownMenuItem
          className={`border-b border-gray-300 px-4 py-3 ${ordering === '추천순' && 'bg-gray-700 text-white'}`}
          onClick={() => handleClick('추천순')}
        >
          추천순
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`border-b border-gray-300 px-4 py-3 ${ordering === '최신순' && 'bg-gray-700 text-white'}`}
          onClick={() => handleClick('최신순')}
        >
          최신순
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`border-b border-gray-300 px-4 py-3 ${ordering === '평점높은순' && 'bg-gray-700 text-white'}`}
          onClick={() => handleClick('평점높은순')}
        >
          평점높은순
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`border-b border-gray-300 px-4 py-3 ${ordering === '평점낮은순' && 'bg-gray-700 text-white'}`}
          onClick={() => handleClick('평점낮은순')}
        >
          평점낮은순
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ReviewOrdering;
