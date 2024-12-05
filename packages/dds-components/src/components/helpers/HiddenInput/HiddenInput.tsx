import { type InputHTMLAttributes, forwardRef } from 'react';

import { cn } from '../../../utils';
import utilStyles from '../styling/utilStyles.module.css';

type HiddenInputProps = InputHTMLAttributes<HTMLInputElement>;

export const HiddenInput = forwardRef<HTMLInputElement, HiddenInputProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    return (
      <input
        ref={ref}
        className={cn(className, utilStyles['hide-input'])}
        {...rest}
      />
    );
  },
);
