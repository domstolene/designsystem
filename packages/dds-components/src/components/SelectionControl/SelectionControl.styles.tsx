import { type HTMLAttributes, type LabelHTMLAttributes } from 'react';

import styles from './SelectionControl.module.css';
import { cn } from '../../utils';
import typographyStyles from '../Typography/typographyStyles.module.css';

type SelectionControlType = 'radio' | 'checkbox';

type SelectionControlProps = {
  controlType: SelectionControlType;
} & HTMLAttributes<HTMLSpanElement>;

export const SelectionControl = ({
  controlType,
  className,
  ...rest
}: SelectionControlProps) => (
  <span
    className={cn(
      className,
      styles['selection-control'],
      controlType === 'radio' && styles['selection-control--radio'],
    )}
    {...rest}
  />
);

type SelectionControlLabelProps = {
  disabled?: boolean;
  readOnly?: boolean;
  hasError?: boolean;
  hasText?: boolean;
  controlType: SelectionControlType;
} & LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({
  disabled,
  readOnly,
  hasError,
  hasText,
  controlType,
  className,
  ...rest
}: SelectionControlLabelProps) => {
  return (
    <label
      className={cn(
        className,
        styles.label,
        styles[`label--${controlType}`],
        !hasText && styles['label--no-text'],
        typographyStyles['text-color--default'],
        disabled && styles['label--disabled'],
        disabled && typographyStyles['text-color--subtle'],
        readOnly && styles['label--readonly'],
        hasError && styles['label--error'],
      )}
      {...rest}
    />
  );
};
