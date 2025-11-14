import { type ComponentPropsWithRef } from 'react';

import styles from './InlineIconButton.module.css';
import { type ExtractStrict } from '../../../types';
import { type TextColor, cn } from '../../../utils';
import { type ButtonProps, type ButtonSize } from '../../Button';
import { Icon } from '../../Icon';
import { StylelessButton } from '../StylelessButton';
import { focusable } from '../styling/focus.module.css';

export type InlineIconButtonProps = Required<Pick<ButtonProps, 'icon'>> &
  ComponentPropsWithRef<'button'> & {
    size: ExtractStrict<ButtonSize, 'large' | 'medium' | 'small'>;
    color?: TextColor;
  };

export const InlineIconButton = ({
  className,
  size,
  icon,
  color,
  ...rest
}: InlineIconButtonProps) => (
  <StylelessButton
    className={cn(className, styles.button, focusable)}
    {...rest}
  >
    <Icon icon={icon} iconSize={size} color={color} />
  </StylelessButton>
);

InlineIconButton.displayName = 'InlineIconButton';
