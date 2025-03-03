import { type ComponentPropsWithRef } from 'react';

import styles from './Input.module.css';
import { type StatefulInputProps } from './Input.types';
import { cn } from '../../../utils';
import typographyStyles from '../../Typography/typographyStyles.module.css';
import { focusable } from '../styling/focus.module.css';

export const Input = ({
  className,
  ...rest
}: ComponentPropsWithRef<'input'>) => (
  <input className={cn(className, styles.input, focusable)} {...rest} />
);

Input.displayName = 'Input';

export const StatefulInput = ({
  className,
  componentSize = 'medium',
  hasErrorMessage,
  ...rest
}: StatefulInputProps) => (
  <Input
    className={cn(
      className,
      styles['input--stateful'],
      styles[`input--${componentSize}`],
      typographyStyles[`body-${componentSize}`],
      hasErrorMessage && styles['input--stateful-danger'],
    )}
    {...rest}
  />
);

StatefulInput.displayName = 'StatefulInput';
