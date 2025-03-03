import { type ComponentPropsWithRef } from 'react';

import { cn } from '../../../utils';
import typographyStyles from '../../Typography/typographyStyles.module.css';
import styles from '../OverflowMenu.module.css';

type OverflowMenuListHeaderProps = ComponentPropsWithRef<'h2'>;

export const OverflowMenuListHeader = ({
  className,
  ...rest
}: OverflowMenuListHeaderProps) => (
  <h2
    {...rest}
    className={cn(
      className,
      typographyStyles['heading-xxsmall'],
      styles['group-header'],
    )}
  />
);

OverflowMenuListHeader.displayName = 'OverflowMenuListHeader';
