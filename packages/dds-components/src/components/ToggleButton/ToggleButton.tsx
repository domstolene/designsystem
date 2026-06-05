import { useId } from 'react';

import styles from './ToggleButton.module.css';
import { type ToggleButtonProps } from './ToggleButton.types';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import buttonStyles from '../Button/Button.module.css';
import { HiddenInput } from '../helpers';
import focusStyles from '../helpers/styling/focus.module.css';
import { Icon } from '../Icon';
import { Box, Paper } from '../layout';
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
      <Paper
        as="span"
        border="border-default"
        background="surface-default"
        borderRadius="rounded"
        width="fit-content"
        display="inline-flex"
        alignItems="center"
        className={cn(
          styles.content,
          typographyStyles[`body-short-${size}`],
          focusStyles['focus-styled-sibling'],
          buttonStyles[`button--${size}`],
          buttonStyles['just-text'],
          ...(hasIcon
            ? [
                buttonStyles['with-text-and-icon'],
                buttonStyles['with-icon-left'],
              ]
            : []),
        )}
      >
        {hasIcon && <Icon icon={icon} iconSize="component" />}
        <span>{label}</span>
      </Paper>
    </Box>
  );
};

ToggleButton.displayName = 'ToggleButton';
