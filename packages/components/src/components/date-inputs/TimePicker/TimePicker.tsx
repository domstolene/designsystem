import { Ref, forwardRef, useRef } from 'react';
import {
  AriaTimeFieldProps,
  TimeValue,
  useTimeField,
} from '@react-aria/datepicker';
import { useTimeFieldState } from '@react-stately/datepicker';
import { Icon, InputProps, TimeIcon } from '@norges-domstoler/dds-components';
import { DateSegment } from '../DatePicker/DateField/DateSegment';
import { locale } from '../DatePicker/constants';
import { DateInput } from '../common/DateInput';
import styled from 'styled-components';
import { datePickerTokens } from '../DatePicker/DatePicker.tokens';

const TimePickerIcon = styled(Icon)<{
  $componentSize: Exclude<TimePickerProps['componentSize'], undefined>;
}>`
  color: ${datePickerTokens.calendarButton.color};
  width: ${({ $componentSize }) =>
    datePickerTokens.calendarButton[$componentSize].size};
  margin-left: -1px; // To align with TextInputs icons
`;

export type TimePickerProps<T extends TimeValue = TimeValue> =
  AriaTimeFieldProps<T> & {
    className?: string;
  } & Pick<
      InputProps,
      'componentSize' | 'errorMessage' | 'tip' | 'disabled' | 'style'
    >;

function _TimePicker<T extends TimeValue>(
  { componentSize = 'medium', style, ...props }: TimePickerProps<T>,
  forwardedRef: Ref<HTMLDivElement>,
) {
  const ref = useRef<HTMLInputElement>(null);
  const state = useTimeFieldState({
    ...props,
    locale,
  });
  const { labelProps, fieldProps } = useTimeField(props, state, ref);

  const disabled = props.isDisabled || !!fieldProps['aria-disabled'];

  return (
    <DateInput
      {...props}
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
