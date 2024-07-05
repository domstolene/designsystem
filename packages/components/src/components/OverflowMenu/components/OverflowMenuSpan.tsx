import { forwardRef } from 'react';

import { getBaseHTMLProps } from '../../../types';
import { cn } from '../../../utils';
import { Icon } from '../../Icon';
import typographyStyles from '../../Typography/typographyStyles.module.css';
import styles from '../OverflowMenu.module.css';
import { type OverflowMenuSpanProps } from '../OverflowMenu.types';

export const OverflowMenuSpan = forwardRef<
  HTMLButtonElement,
  OverflowMenuSpanProps
>((props, ref) => {
  const { id, icon, children, className, htmlProps, ...rest } = props;

  return (
    <li>
      <span
        ref={ref}
        {...getBaseHTMLProps(
          id,
          cn(className, styles.list__item, typographyStyles['body-sans-01']),
          htmlProps,
          rest,
        )}
      >
        {icon && <Icon iconSize="inherit" icon={icon} />}
        {children}
      </span>
    </li>
  );
});

OverflowMenuSpan.displayName = 'OverflowMenuSpan';
