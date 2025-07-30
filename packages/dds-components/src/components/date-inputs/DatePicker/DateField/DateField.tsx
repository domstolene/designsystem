import {
  type CalendarDate,
  type DateValue,
  createCalendar,
} from '@internationalized/date';
import {
  type AriaDateFieldOptions,
  useDateField,
  type useDatePicker,
} from '@react-aria/datepicker';
import { useLocale } from '@react-aria/i18n';
import { useDateFieldState } from '@react-stately/datepicker';
import { type Ref, useRef } from 'react';

import { CalendarButton } from './CalendarButton';
import { DateSegment } from './DateSegment';
import { type InputProps } from '../../../helpers/Input';
import { DateInput } from '../../common/DateInput';

export type DateFieldProps<T extends DateValue = CalendarDate> =
  AriaDateFieldOptions<T> & {
    buttonProps?: ReturnType<typeof useDatePicker>['buttonProps'];
    buttonOnClick?: () => void;
    groupProps?: ReturnType<typeof useDatePicker>['groupProps'];
  } & Pick<
      InputProps,
      | 'componentSize'
      | 'errorMessage'
      | 'tip'
      | 'disabled'
      | 'style'
      | 'width'
      | 'className'
    > & {
      ref?: Ref<HTMLDivElement>;
    };

export function DateField({
  componentSize = 'medium',
  buttonProps,
  groupProps,
  ref,
  ...props
}: DateFieldProps) {
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const internalRef = useRef<HTMLInputElement>(null);
  const { labelProps, fieldProps } = useDateField(props, state, internalRef);

  const disabled = props.isDisabled || !!fieldProps['aria-disabled'];

  return (
    <DateInput
      {...props}
      groupProps={groupProps}
      componentSize={componentSize}
      label={props.label}
      disabled={disabled}
      required={props.isRequired}
      ref={ref}
      internalRef={internalRef}
      readOnly={props.isReadOnly}
      prefix={
        <CalendarButton
          componentSize={componentSize}
          {...buttonProps}
          isReadOnly={props.isReadOnly}
          isDisabled={disabled || props.isReadOnly}
        />
      }
      labelProps={labelProps}
      fieldProps={fieldProps}
    >
      {state.segments.map((segment, i) => (
        <DateSegment
          aria-readonly={props.isReadOnly}
          componentSize={componentSize}
          key={i}
          segment={segment}
          state={state}
        />
      ))}
    </DateInput>
  );
}

DateField.displayName = 'DateField';
