import { useId } from 'react';

import styles from './ToggleButton.module.css';
import { type ToggleButtonProps } from './ToggleButton.types';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { HiddenInput } from '../helpers';
import focusStyles from '../helpers/styling/focus.module.css';
import { Icon } from '../Icon';
import { Box } from '../layout';
import typographyStyles from '../Typography/typographyStyles.module.css';

export const ToggleButton = ({
  id,
  label,
  icon,
  size = 'small',
  className,
  style,
  htmlProps,
  ...rest
}: ToggleButtonProps) => {
  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-toggleButton`;
  const hasIcon = !!icon;

  return (
    <Box as="label" htmlFor={uniqueId} width="fit-content">
      <HiddenInput
        {...getBaseHTMLProps(
          uniqueId,
          cn(className, focusStyles['focusable-sibling']),
          style,
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
          typographyStyles[`body-short-${size}`],
          focusStyles['focus-styled-sibling'],
        )}
      >
        {hasIcon && <Icon icon={icon} iconSize="component" />} {label}
      </span>
    </Box>
  );
};

ToggleButton.displayName = 'ToggleButton';
