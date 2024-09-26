import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva('font-bold', {
  variants: {
    variant: {
      default: 'text-primary-foreground rounded-md bg-starbucks-green',
      link: 'text-primary underline-offset-4 hover:underline',
      clear:
        'absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      outline: 'border border-input bg-background',
      orderlist: 'border bg-white text-slate-600 rounded-md',
      calendar: 'border bg-slate-100 text-black rounded-md',
      logout: 'bg-none',
    },
    size: {
      default: 'h-10 px-4 py-2',
      submit: 'h-10 px-4 py-2 w-full rounded-full disabled:bg-slate-300',
      kakao:
        'grid grid-cols-10 mt-2 items-center w-full h-10 bg-[#FAE300] text-black relative rounded-full',
      clear: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
