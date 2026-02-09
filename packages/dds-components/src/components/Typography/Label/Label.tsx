import { type LabelHTMLAttributes, type ReactNode } from 'react';

import styles from './Label.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { RequiredMarker, cn } from '../../../utils';
import { Icon } from '../../Icon';
import { LockFilledIcon } from '../../Icon/icons';
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
  /**Innhold som står etter ledeteksten (knapp med ekstra info e.l.). */
  afterLabelContent?: ReactNode;
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
  style,
  htmlProps,
  children,
  afterLabelContent,
  ...rest
}: LabelProps) => {
  const content = (
    <>
      {readOnly && (
        <Icon
          icon={LockFilledIcon}
          iconSize="small"
          className={styles['read-only__icon']}
        />
      )}
      {children}
      {showRequiredStyling && <RequiredMarker />}
    </>
  );
  const labelProps = {
    ...getBaseHTMLProps(
      id,
      cn(className, readOnly && styles['read-only']),
      style,
      htmlProps,
      rest,
    ),
  };
  const render = afterLabelContent ? (
    <Typography
      typographyType="labelMedium"
      as="div"
      withMargins={rest.withMargins}
    >
      <Typography
        {...labelProps}
        typographyType="labelMedium"
        withMargins={false}
      >
        {content}
      </Typography>
      {afterLabelContent}
    </Typography>
  ) : (
    <Typography {...labelProps} typographyType="labelMedium">
      {content}
    </Typography>
  );
  return render;
};

Label.displayName = 'Label';
