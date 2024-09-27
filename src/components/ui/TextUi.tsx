'use client';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

const textVariants = cva('text-base leading-6 text-black', {
  variants: {
    variant: {
      default: 'text-primary',
      gray: 'text-gray-500',
      darkGray: 'text-gray-700',
      lightGray: 'text-[#a0a0a0]',
      white: 'text-white',
    },
    size: {
      default: 'text-base',
      xxs: 'text-[0.625rem]',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const TextUi = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'p';
    return (
      <Comp
        className={cn(textVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

TextUi.displayName = 'TextUi';

export { TextUi, textVariants };
