import { type Time } from '@internationalized/date';
import { type AriaTimeFieldProps, useTimeField } from '@react-aria/datepicker';
import { useTimeFieldState } from '@react-stately/datepicker';
import { type Ref, forwardRef, useRef } from 'react';

import { cn } from '../../../utils';
import { type InputProps } from '../../helpers/Input/Input.types';
import { Icon } from '../../Icon';
import { TimeIcon } from '../../Icon/icons';
import { DateInput } from '../common/DateInput';
import styles from '../common/DateInput.module.css';
import { locale } from '../DatePicker/constants';
import { DateSegment } from '../DatePicker/DateField/DateSegment';

export type TimePickerProps = Omit<AriaTimeFieldProps<Time>, 'hideTimeZone'> &
  Pick<
    InputProps,
    'componentSize' | 'errorMessage' | 'tip' | 'style' | 'width' | 'className'
  >;

function _TimePicker(
  { componentSize = 'medium', width, ...props }: TimePickerProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  const ref = useRef<HTMLInputElement>(null);
  const state = useTimeFieldState({
    ...props,
    locale,
  });
  const { labelProps, fieldProps } = useTimeField(
    { ...props, hideTimeZone: true, granularity: 'hour' },
    state,
    ref,
  );

  const iconSize = componentSize === 'xsmall' ? 'small' : 'medium';
  const disabled = props.isDisabled || !!fieldProps['aria-disabled'];

  return (
    <DateInput
      {...props}
      width={width}
      disabled={disabled}
      required={props.isRequired}
      componentSize={componentSize}
      ref={forwardedRef}
      internalRef={ref}
      readOnly={props.isReadOnly}
      labelProps={labelProps}
      fieldProps={fieldProps}
      prefix={
        <span
          className={cn(
            styles['icon-wrapper'],
            disabled && styles['icon-wrapper--disabled'],
            props.isReadOnly && styles['icon-wrapper--readonly'],
            styles[`icon-wrapper--${iconSize}`],
          )}
        >
          <Icon icon={TimeIcon} iconSize={iconSize} />
        </span>
      }
    >
      {state.segments.map((segment, i) => (
        <DateSegment
          componentSize={componentSize}
          key={i}
          segment={segment}
          state={state}
        />
      ))}
    </DateInput>
  );
}

export const TimePicker = forwardRef(_TimePicker);

TimePicker.displayName = 'TimePicker';
