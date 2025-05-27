import { type HTMLAttributes, type LabelHTMLAttributes } from 'react';

import styles from './SelectionControl.module.css';
import { RequiredMarker, cn } from '../../utils';
import { Icon } from '../Icon';
import { LockIcon } from '../Icon/icons';
import { Box } from '../layout';
import { Typography } from '../Typography';
import labelStyles from '../Typography/Label/Label.module.css';
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
  hasText?: boolean;
  controlType: SelectionControlType;
} & LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({
  disabled,
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
      paddingInline="calc(var(--dds-selection-control-height) + var(--dds-spacing-x0-5)) 0"
      className={cn(
        className,
        styles.label,
        styles[`label--${controlType}`],
        !hasText && styles['label--no-text'],
        typographyStyles['text-color--default'],
        disabled && typographyStyles['text-color--subtle'],
      )}
      {...rest}
    />
  );
};

interface SelectionControlGroupLabelProps {
  id?: string;
  showRequiredMarker?: boolean;
  readOnly?: boolean;
  children?: string;
}

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
