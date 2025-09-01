import { type ComponentPropsWithRef } from 'react';

import styles from './InlineButton.module.css';
import { cn } from '../../utils';
import { StylelessButton } from '../helpers';
import focusStyles from '../helpers/styling/focus.module.css';
import { type BaseTypographyProps, getColorCn } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type InlineButtonProps = Pick<BaseTypographyProps, 'color'> &
  Omit<ComponentPropsWithRef<'button'>, 'color'>;

export const InlineButton = ({
  className,
  color,
  ...rest
}: InlineButtonProps) => (
  <StylelessButton
    className={cn(
      className,
      focusStyles.focusable,
      typographyStyles.a,
      styles.button,
      getColorCn(color),
    )}
    {...rest}
  />
);
