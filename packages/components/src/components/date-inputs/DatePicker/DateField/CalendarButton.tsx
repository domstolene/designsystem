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
}

export function CalendarButton({
  componentSize,
  ...props
}: CalendarButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  const size = componentSize === 'medium' ? 'medium' : 'small';

  return (
    <button
      {...buttonProps}
      ref={ref}
      type="button"
      onClick={e => {
        if (!props.isDisabled) {
          buttonProps.onClick?.(e);
        }
      }}
      className={cn(
        buttonProps.className,
        styles['icon-wrapper'],
        styles[`icon-wrapper--${size}`],
        styles['popover-button'],
        !props.isDisabled && focusable,
        props.isDisabled && 'disabled',
      )}
    >
      <Icon icon={CalendarIcon} iconSize={size} />
    </button>
  );
}
