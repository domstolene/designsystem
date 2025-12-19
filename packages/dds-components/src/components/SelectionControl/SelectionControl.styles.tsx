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
      paddingInline="calc(var(--dds-size-icon-component) + var(--dds-spacing-x0-25)) 0"
      className={cn(
        className,
        styles.label,
        styles[`label--${controlType}`],
        !hasText && styles['label--no-text'],
        typographyStyles['body-short-medium'],
        disabled && typographyStyles['text-color--subtle'],
      )}
      {...rest}
    />
  );
};

interface SelectionControlGroupLabelProps {
  id?: string;
  showRequiredStyling?: boolean;
  readOnly?: boolean;
  label?: string;
}

export const renderGroupLabel = ({
  id,
  showRequiredStyling,
  readOnly,
  label,
}: SelectionControlGroupLabelProps) => {
  const hasLabel = !!label;
  if (hasLabel)
    return (
      <Typography
        as="span"
        typographyType="labelMedium"
        id={id}
        className={readOnly ? labelStyles['read-only'] : undefined}
        withMargins
      >
        {readOnly && (
          <Icon
            icon={LockIcon}
            className={labelStyles['read-only__icon']}
            iconSize="small"
          />
        )}
        {label} {showRequiredStyling && <RequiredMarker />}
      </Typography>
    );
  else return null;
};
