import { type HTMLAttributes, type LabelHTMLAttributes } from 'react';

import styles from './SelectionControl.module.css';
import { cn, RequiredMarker } from '../../utils';
import typographyStyles from '../Typography/typographyStyles.module.css';
import { Box } from '../layout';
import { Typography } from '../Typography';
import { Icon } from '../Icon';
import { LockIcon } from '../Icon/icons';

import labelStyles from '../Typography/Label/Label.module.css';
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
    <Box
      as="label"
      position="relative"
      display="flex"
      alignItems="center"
      width="fit-content"
      paddingInline="calc(18px + var(--dds-spacing-x0-5)) 0"
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

type SelectionControlGroupLabelProps = {
  id?: string;
  showRequiredMarker?: boolean;
  readOnly?: boolean;
  children?: string;
};

export const GroupLabel = ({
  id,
  showRequiredMarker,
  readOnly,
  children,
}: SelectionControlGroupLabelProps) => {
  return (
    <Typography
      as="span"
      typographyType="labelMedium"
      id={id}
      className={readOnly ? labelStyles['read-only'] : undefined}
    >
      {readOnly && (
        <Icon
          icon={LockIcon}
          className={labelStyles['read-only__icon']}
          iconSize="small"
        />
      )}
      {children} {showRequiredMarker && <RequiredMarker />}
    </Typography>
  );
};
