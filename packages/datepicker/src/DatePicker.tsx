import { useDatePickerState } from '@react-stately/datepicker';
import { DateField, DateFieldProps } from './DateField/DateField';
import { useDatePicker } from '@react-aria/datepicker';
import type { DateValue, AriaDatePickerProps } from '@react-types/datepicker';
import { useRef } from 'react';
import { Calendar } from './Calendar/Calendar';
import {
  CalendarPopover,
  CalendarPopoverAnchor,
  CalendarPopoverContent,
} from './CalendarPopover';

export interface DatePickerProps<T extends DateValue>
  extends AriaDatePickerProps<T>,
    Pick<DateFieldProps<T>, 'componentSize' | 'tip' | 'style'> {
  label?: string;
  errorMessage?: string;
}

export function DatePicker<T extends DateValue>({
  errorMessage,
  componentSize,
  tip,
  style,
  ...props
}: DatePickerProps<T>) {
  const state = useDatePickerState(props);
  const ref = useRef<HTMLDivElement>(null);
  const { buttonProps, calendarProps, fieldProps } = useDatePicker(
    props,
    state,
    ref,
  );

  return (
    <CalendarPopover isOpen={state.isOpen} onClose={state.close}>
      <CalendarPopoverAnchor>
        <DateField
          {...fieldProps}
          componentSize={componentSize}
          tip={tip}
          label={props.label}
          errorMessage={errorMessage}
          containerRef={ref}
          buttonProps={buttonProps}
          isOpen={state.isOpen}
          style={style}
        />
      </CalendarPopoverAnchor>
      <CalendarPopoverContent>
        <Calendar {...calendarProps} />
      </CalendarPopoverContent>
    </CalendarPopover>
  );
}

DatePicker.displayName = 'DatePicker';
