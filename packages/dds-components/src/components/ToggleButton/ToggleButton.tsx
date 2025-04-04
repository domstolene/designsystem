import { useId } from 'react';

import styles from './ToggleButton.module.css';
import { type ToggleButtonProps } from './ToggleButton.types';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import focusStyles from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { Icon } from '../Icon';
import { Box } from '../layout';
import typographyStyles from '../Typography/typographyStyles.module.css';

export const ToggleButton = ({
  id,
  label,
  icon,
  size = 'small',
  className,
  htmlProps,
  ...rest
}: ToggleButtonProps) => {
  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-toggleButton`;
  const hasIcon = !!icon;

  return (
    <Box as="label" htmlFor={uniqueId} width="fit-content">
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
        type="checkbox"
      />
      <span
        className={cn(
          styles.content,
          styles[size],
          hasIcon && styles['content--with-icon'],
          typographyStyles[`body-${size}`],
          focusStyles['focus-styled-sibling'],
        )}
      >
        {hasIcon && <Icon icon={icon} iconSize="inherit" />} {label}
      </span>
    </Box>
  );
};

ToggleButton.displayName = 'ToggleButton';
