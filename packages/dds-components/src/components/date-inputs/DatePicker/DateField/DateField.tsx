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
import {
  type ForwardRefExoticComponent,
  type Ref,
  type RefAttributes,
  forwardRef,
  useRef,
} from 'react';

import { CalendarButton } from './CalendarButton';
import { DateSegment } from './DateSegment';
import { type InputProps } from '../../../helpers';
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
    >;

function _DateField(
  {
    componentSize = 'medium',
    buttonProps,
    groupProps,
    ...props
  }: DateFieldProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef<HTMLInputElement>(null);
  const { labelProps, fieldProps } = useDateField(props, state, ref);

  const disabled = props.isDisabled || !!fieldProps['aria-disabled'];

  return (
    <DateInput
      {...props}
      groupProps={groupProps}
      componentSize={componentSize}
      label={props.label}
      disabled={disabled}
      required={props.isRequired}
      ref={forwardedRef}
      internalRef={ref}
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

export const DateField: ForwardRefExoticComponent<
  DateFieldProps & RefAttributes<HTMLDivElement>
> = forwardRef(_DateField);

DateField.displayName = 'DateField';
