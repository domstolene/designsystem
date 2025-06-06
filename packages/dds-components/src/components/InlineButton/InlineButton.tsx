import { type ComponentPropsWithRef } from 'react';

import styles from './InlineButton.module.css';
import { cn } from '../../utils';
import { StylelessButton } from '../helpers';
import focusStyles from '../helpers/styling/focus.module.css';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type InlineButtonProps = ComponentPropsWithRef<'button'>;

export const InlineButton = ({ className, ...rest }: InlineButtonProps) => (
  <StylelessButton
    className={cn(
      className,
      focusStyles.focusable,
      typographyStyles.a,
      styles.button,
    )}
    {...rest}
  />
);
