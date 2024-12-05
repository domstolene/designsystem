import { forwardRef } from 'react';

import { cn } from '../../../utils';
import { Icon } from '../../Icon';
import typographyStyles from '../../Typography/typographyStyles.module.css';
import styles from '../OverflowMenu.module.css';
import { type OverflowMenuSpanProps } from '../OverflowMenu.types';

export const OverflowMenuSpan = forwardRef<
  HTMLButtonElement,
  OverflowMenuSpanProps
>((props, ref) => {
  const { icon, children, className, ...rest } = props;

  return (
    <li>
      <span
        ref={ref}
        className={cn(
          className,
          styles.list__item,
          typographyStyles['body-small'],
        )}
        {...rest}
      >
        {icon && <Icon iconSize="inherit" icon={icon} />}
        {children}
      </span>
    </li>
  );
});

OverflowMenuSpan.displayName = 'OverflowMenuSpan';
