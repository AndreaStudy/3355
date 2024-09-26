import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

const hrVariant = cva('', {
  variants: {
    variant: {
      default: 'border-t border-gray-200',
      gray: 'border-t border-gray-300',
      lightGray: 'border-t border-gray-100',
      darkGray: 'border-t border-gray-400',
    },
    height: {
      default: 'my-4',
      sm: 'my-2',
      lg: 'my-6',
      xl: 'my-8',
      xxl: 'my-10',
    },
  },
  defaultVariants: {
    variant: 'default',
    height: 'default',
  },
});

export interface HrProps
  extends React.HTMLAttributes<HTMLHRElement>,
    VariantProps<typeof hrVariant> {
  asChild?: boolean;
}

const HrUi = React.forwardRef<HTMLHRElement, HrProps>(
  ({ className, variant, height, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'hr';
    return (
      <Comp
        className={cn(hrVariant({ variant, height, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

HrUi.displayName = 'HrUi';

export { HrUi, hrVariant };
