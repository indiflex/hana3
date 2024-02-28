import clsx from 'clsx';
import { InputHTMLAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ type, className, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={clsx('border border-sky-500 rounded px-1', className)}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
