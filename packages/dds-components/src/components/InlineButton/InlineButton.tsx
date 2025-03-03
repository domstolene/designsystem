import { type ComponentPropsWithRef } from 'react';

import styles from './InlineButton.module.css';
import { cn } from '../../utils';
import focusStyles from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type InlineButtonProps = ComponentPropsWithRef<'button'>;

export const InlineButton = ({ className, ...rest }: InlineButtonProps) => (
  <button
    className={cn(
      className,
      utilStyles['normalize-button'],
      utilStyles['remove-button-styling'],
      focusStyles.focusable,
      typographyStyles.a,
      styles.button,
    )}
    {...rest}
  />
);
