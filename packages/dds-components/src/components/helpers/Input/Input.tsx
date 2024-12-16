import { type InputHTMLAttributes, forwardRef } from 'react';

import styles from './Input.module.css';
import {
  type InputTypographyTypes,
  type StatefulInputProps,
} from './Input.types';
import { cn } from '../../../utils';
import { getTypographyCn } from '../../Typography';
import typographtStyles from '../../Typography/typographyStyles.module.css';
import { focusable } from '../styling/focus.module.css';

export const inputTypographyTypes: InputTypographyTypes = {
  medium: 'bodyMedium',
  small: 'bodySmall',
  xsmall: 'bodyXsmall',
};

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <input
      ref={ref}
      className={cn(className, styles.input, focusable)}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export const StatefulInput = forwardRef<HTMLInputElement, StatefulInputProps>(
  (props, ref) => {
    const {
      className,
      componentSize = 'medium',
      hasErrorMessage,
      ...rest
    } = props;

    return (
      <Input
        ref={ref}
        className={cn(
          className,
          styles['input--stateful'],
          styles[`input--${componentSize}`],
          typographtStyles[
            getTypographyCn(inputTypographyTypes[componentSize])
          ],
          hasErrorMessage && styles['input--stateful-danger'],
        )}
        {...rest}
      />
    );
  },
);

StatefulInput.displayName = 'StatefulInput';
