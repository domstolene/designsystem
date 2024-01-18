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
import { useDateFieldState } from '@react-stately/datepicker';
import type * as CSS from 'csstype';
import { forwardRef, useRef } from 'react';

import { CalendarButton } from './CalendarButton';
import { DateSegment } from './DateSegment';
import { type InputProps } from '../../../helpers';
import { DateInput } from '../../common/DateInput';
import { locale } from '../constants';

export type DateFieldProps<T extends DateValue = CalendarDate> =
  AriaDateFieldOptions<T> & {
    className?: string;
    buttonProps?: ReturnType<typeof useDatePicker>['buttonProps'];
    /**
     * For å sette en egendefinert bredde på komponenten.
     */
    width?: CSS.Properties['width'];
  } & Pick<
      InputProps,
      'componentSize' | 'errorMessage' | 'tip' | 'disabled' | 'style'
    >;

export const DateField = forwardRef<HTMLDivElement, DateFieldProps>(
  ({ componentSize = 'medium', buttonProps, ...props }, forwardedRef) => {
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
        componentSize={componentSize}
        label={props.label}
        disabled={disabled}
        required={props.isRequired}
        ref={forwardedRef}
        internalRef={ref}
        readOnly={props.isReadOnly}
        prefix={
          !props.isReadOnly && (
            <CalendarButton
              componentSize={componentSize}
              {...buttonProps}
              isDisabled={disabled}
            />
          )
        }
        labelProps={labelProps}
        fieldProps={fieldProps}
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
  },
);

DateField.displayName = 'DateField';
