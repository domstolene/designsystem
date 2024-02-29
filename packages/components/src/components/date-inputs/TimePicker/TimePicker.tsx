import { type Time } from '@internationalized/date';
import { type AriaTimeFieldProps, useTimeField } from '@react-aria/datepicker';
import { useTimeFieldState } from '@react-stately/datepicker';
import type * as CSS from 'csstype';
import { type Ref, forwardRef, useRef } from 'react';
import styled from 'styled-components';

import { type InputProps } from '../../helpers/Input/Input.types';
import { Icon } from '../../Icon';
import { TimeIcon } from '../../Icon/icons';
import { DateInput } from '../common/DateInput';
import { locale } from '../DatePicker/constants';
import { DateSegment } from '../DatePicker/DateField/DateSegment';
import { datePickerTokens } from '../DatePicker/DatePicker.tokens';

const TimePickerIcon = styled(Icon)<{
  $componentSize: Exclude<TimePickerProps['componentSize'], undefined>;
}>`
  color: ${datePickerTokens.calendarButton.color};
  width: ${({ $componentSize }) =>
    datePickerTokens.calendarButton[$componentSize].size};
  margin-left: -1px; // To align with TextInputs icons
`;

export type TimePickerProps = Omit<AriaTimeFieldProps<Time>, 'hideTimeZone'> & {
  /**
   * Navn på egne klasser.
   */
  className?: string;
  /**
   * Egendefinert bredde på komponenten.
   */
  width?: CSS.Properties['width'];
} & Pick<InputProps, 'componentSize' | 'errorMessage' | 'tip' | 'style'>;

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
        !props.isReadOnly && (
          <TimePickerIcon
            $componentSize={componentSize}
            icon={TimeIcon}
            iconSize={componentSize == 'medium' ? 'medium' : 'small'}
          />
        )
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
