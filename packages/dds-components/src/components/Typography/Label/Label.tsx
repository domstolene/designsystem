import { type LabelHTMLAttributes } from 'react';

import styles from './Label.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { RequiredMarker, cn } from '../../../utils';
import { Icon } from '../../Icon';
import { LockIcon } from '../../Icon/icons';
import { type BaseTypographyProps, Typography } from '../Typography';

type PickedHTMLAttributes = Pick<
  LabelHTMLAttributes<HTMLLabelElement>,
  'htmlFor'
>;

export interface BaseLabelProps {
  /** Om input knyttet til ledeteksten er påkrevd; påvirker styling. */
  showRequiredStyling?: boolean;
  /** Om input knyttet til ledeteksten er `read-only`; påvirker styling. */
  readOnly?: boolean;
}

export type LabelProps = BaseComponentPropsWithChildren<
  HTMLLabelElement,
  BaseLabelProps & BaseTypographyProps & PickedHTMLAttributes,
  Omit<
    LabelHTMLAttributes<HTMLLabelElement>,
    keyof PickedHTMLAttributes | 'color'
  >
>;

export const Label = ({
  showRequiredStyling,
  readOnly,
  id,
  className,
  htmlProps,
  children,
  ...rest
}: LabelProps) => {
  return (
    <Typography
      {...getBaseHTMLProps(
        id,
        cn(className, readOnly && styles['read-only']),
        htmlProps,
        rest,
      )}
      typographyType="labelMedium"
    >
      {readOnly && (
        <Icon
          icon={LockIcon}
          iconSize="small"
          className={styles['read-only__icon']}
        />
      )}
      {children}
      {showRequiredStyling && <RequiredMarker />}
    </Typography>
  );
};

Label.displayName = 'Label';
