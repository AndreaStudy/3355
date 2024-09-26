'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

function ReviewFiltering({
  filtering,
  setFiltering,
}: {
  filtering: string;
  setFiltering: Dispatch<SetStateAction<string>>;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = (val: string) => {
    setFiltering(val);
    setIsOpen(!isOpen);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="flex gap-2">
        <div>
          <span>{filtering}</span>
          <ChevronDown width={14} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-3">
        <DropdownMenuItem
          className={`border-b border-gray-300 px-4 py-3 ${filtering === '전체' && 'bg-gray-700 text-white'}`}
          onClick={() => handleClick('전체')}
        >
          전체
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`border-b border-gray-300 px-4 py-3 ${filtering === '포토' && 'bg-gray-700 text-white'}`}
          onClick={() => handleClick('포토')}
        >
          포토
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`border-b border-gray-300 px-4 py-3 ${filtering === '동영상' && 'bg-gray-700 text-white'}`}
          onClick={() => handleClick('동영상')}
        >
          동영상
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`border-b border-gray-300 px-4 py-3 ${filtering === '선물' && 'bg-gray-700 text-white'}`}
          onClick={() => handleClick('선물')}
        >
          선물
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ReviewFiltering;
