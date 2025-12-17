import { type ComponentPropsWithRef } from 'react';

import styles from './InternalHeader.module.css';
import { cn } from '../../utils';
import { focusable } from '../helpers/styling/focus.module.css';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type NavigationItemProps = {
  isCurrent?: boolean;
} & ComponentPropsWithRef<'a'>;

export const NavigationItem = ({ isCurrent, ...rest }: NavigationItemProps) => (
  <a
    {...rest}
    aria-current={isCurrent ? 'page' : undefined}
    className={cn(
      styles['nav-list__item__link'],
      isCurrent && styles['nav-list__item__link--active'],
      typographyStyles['body-short-medium'],
      focusable,
    )}
  />
);
