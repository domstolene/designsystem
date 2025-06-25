import { type ComponentPropsWithRef } from 'react';

import styles from './InlineIconButton.module.css';
import { type ExtractStrict } from '../../../types';
import { cn } from '../../../utils';
import { type ButtonProps, type ButtonSize } from '../../Button';
import { Icon } from '../../Icon';
import { StylelessButton } from '../StylelessButton';
import { focusable } from '../styling/focus.module.css';

type InlineIconButtonProps = Required<Pick<ButtonProps, 'size' | 'icon'>> &
  ComponentPropsWithRef<'button'> & {
    size: ExtractStrict<ButtonSize, 'large' | 'medium' | 'small'>;
  };

export const InlineIconButton = ({
  className,
  size,
  icon,
  ...rest
}: InlineIconButtonProps) => (
  <StylelessButton
    className={cn(className, styles.button, focusable)}
    {...rest}
  >
    <Icon icon={icon} iconSize={size} />
  </StylelessButton>
);

InlineIconButton.displayName = 'InlineIconButton';
