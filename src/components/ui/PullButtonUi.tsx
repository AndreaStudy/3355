import React from 'react';

function PullButtonUi({
  className,
  color,
  isOpen,
}: {
  className?: string;
  color?: string;
  isOpen?: boolean;
}) {
  return (
    <svg
      className={`w-full h-auto ${className}`}
      viewBox="0 0 375 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clipPath="url(#clip0_339_11)"
        // className={`${isOpen ? 'rotate-180' : ''}`}
      >
        <path
          d="M-1 -11V0H154.746C155.677 -7.43078e-05 156.584 0.288389 157.344 0.825662C158.104 1.36293 158.679 2.12259 158.989 3H158.999L163.391 12.514C163.871 13.5549 164.64 14.4364 165.605 15.0542C166.571 15.672 167.694 16.0002 168.84 16H205.162C206.308 16 207.43 15.6717 208.396 15.0539C209.361 14.4362 210.13 13.5547 210.61 12.514L215 3H215.02C215.33 2.12259 215.905 1.36293 216.665 0.825662C217.425 0.288389 218.332 -7.43078e-05 219.263 0H376V-11H-1Z"
          fill={color ? color : '#F0F0F0'}
        />
        <path
          d={isOpen ? 'M193 6.5L188 1.5L183 6.5' : 'M183 1.5L188 6.5L193 1.5'}
          stroke="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_339_11">
          <rect width="375" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PullButtonUi;
