import { type AriaButtonProps, useButton } from '@react-aria/button';
import { useRef } from 'react';

import type { DateFieldProps } from './DateField';
import { cn } from '../../../../utils';
import { InlineIconButton } from '../../../helpers/InlineIconButton';
import inputStyles from '../../../helpers/Input/Input.module.css';
import { focusable } from '../../../helpers/styling/focus.module.css';
import { CalendarIcon } from '../../../Icon/icons';
import styles from '../../common/DateInput.module.css';

interface CalendarButtonProps extends AriaButtonProps {
  componentSize: DateFieldProps['componentSize'];
  isReadOnly?: DateFieldProps['isReadOnly'];
}

export function CalendarButton({
  componentSize = 'medium',
  isReadOnly,
  ...props
}: CalendarButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <InlineIconButton
      {...buttonProps}
      ref={ref}
      type="button"
      className={cn(
        buttonProps.className,
        styles['popover-button'],
        isReadOnly && styles['popover-button--readonly'],
        !props.isDisabled && focusable,
        inputStyles['input-group__absolute-el'],
        inputStyles[`input-group__absolute-el--${componentSize}`],
      )}
      icon={CalendarIcon}
      size="component"
    />
  );
}
