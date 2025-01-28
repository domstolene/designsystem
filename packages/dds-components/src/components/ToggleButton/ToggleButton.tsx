import { forwardRef, useId } from 'react';

import styles from './ToggleButton.module.css';
import { type ToggleButtonProps } from './ToggleButton.types';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import focusStyles from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { Icon } from '../Icon';
import typographyStyles from '../Typography/typographyStyles.module.css';

export const ToggleButton = forwardRef<HTMLInputElement, ToggleButtonProps>(
  ({ id, label, icon, size = 'small', className, htmlProps, ...rest }, ref) => {
    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-toggleButton`;
    const hasIcon = !!icon;
    const hasSize = size ? size : 'small';

    return (
      <label htmlFor={uniqueId} className={styles.container}>
        <input
          {...getBaseHTMLProps(
            uniqueId,
            cn(
              className,
              focusStyles['focusable-sibling'],
              utilStyles['hide-input'],
            ),
            htmlProps,
            rest,
          )}
          ref={ref}
          type="checkbox"
        />
        <span
          className={cn(
            styles.content,
            styles[size],
            hasIcon && styles['content--with-icon'],
            typographyStyles[`body-${hasSize}`],
            focusStyles['focus-styled-sibling'],
          )}
        >
          {hasIcon && <Icon icon={icon} iconSize="inherit" />} {label}
        </span>
      </label>
    );
  },
);

ToggleButton.displayName = 'ToggleButton';
