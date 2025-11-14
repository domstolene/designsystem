import { type ComponentPropsWithRef } from 'react';

import styles from './InlineButton.module.css';
import { cn } from '../../utils';
import { StylelessButton } from '../helpers';
import focusStyles from '../helpers/styling/focus.module.css';
import { Icon, type SvgIcon } from '../Icon';
import { type BaseTypographyProps, getColorCn } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type InlineButtonProps = {
  /**
   * Enestående ikon; bruk av denne propen sørge for riktig visning av ikonet.
   */
  icon?: SvgIcon;
} & Pick<BaseTypographyProps, 'color'> &
  Omit<ComponentPropsWithRef<'button'>, 'color'>;

export const InlineButton = ({
  className,
  color,
  icon,
  children,
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
  >
    {icon ? <Icon icon={icon} iconSize="inherit" /> : children}
  </StylelessButton>
);
