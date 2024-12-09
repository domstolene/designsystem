import { type AnchorHTMLAttributes, forwardRef } from 'react';

import styles from './InternalHeader.module.css';
import { cn } from '../../utils';
import { focusable } from '../helpers/styling/focus.module.css';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type NavigationItemProps = {
  isCurrent?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavigationItem = forwardRef<
  HTMLAnchorElement,
  NavigationItemProps
>(({ isCurrent, ...rest }, ref) => {
  return (
    <a
      {...rest}
      ref={ref}
      aria-current={isCurrent ? 'page' : undefined}
      className={cn(
        styles['nav-list__item__link'],
        isCurrent && styles['nav-list__item__link--active'],
        typographyStyles['body-medium'],
        focusable,
      )}
    />
  );
});
