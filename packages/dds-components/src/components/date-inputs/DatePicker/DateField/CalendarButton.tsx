import { type AriaButtonProps, useButton } from '@react-aria/button';
import { useRef } from 'react';

import type { DateFieldProps } from './DateField';
import { cn } from '../../../../utils';
import { focusable } from '../../../helpers/styling/focus.module.css';
import { Icon } from '../../../Icon';
import { CalendarIcon } from '../../../Icon/icons';
import styles from '../../common/DateInput.module.css';

interface CalendarButtonProps extends AriaButtonProps {
  componentSize: DateFieldProps['componentSize'];
  isReadOnly?: DateFieldProps['isReadOnly'];
}

export function CalendarButton({
  componentSize,
  isReadOnly,
  ...props
}: CalendarButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  const size = componentSize === 'xsmall' ? 'small' : 'medium';

  return (
    <button
      {...buttonProps}
      ref={ref}
      type="button"
      className={cn(
        buttonProps.className,
        styles['icon-wrapper'],
        styles[`icon-wrapper--${size}`],
        styles['popover-button'],
        isReadOnly && styles['popover-button--readonly'],
        !props.isDisabled && focusable,
        props.isDisabled && 'disabled',
      )}
    >
      <Icon icon={CalendarIcon} iconSize={size} />
    </button>
  );
}
