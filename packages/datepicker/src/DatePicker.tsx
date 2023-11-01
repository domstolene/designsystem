import { useDatePickerState } from '@react-stately/datepicker';
import { DateField } from './DateField/DateField';
import {
  AriaDatePickerProps,
  DateValue,
  useDatePicker,
} from '@react-aria/datepicker';
import { useRef } from 'react';
import styled from 'styled-components';
import { Popover } from '@norges-domstoler/dds-components';
import { Calendar } from './Calendar/Calendar';
import {
  CalendarPopover,
  CalendarPopoverAnchor,
  CalendarPopoverContent,
} from './CalendarPopover';

export interface DatePickerProps<T extends DateValue>
  extends AriaDatePickerProps<T> {
  label?: string;
  errorMessage?: string;
}

export function DatePicker<T extends DateValue>({
  label,
  errorMessage,
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
          label={label}
          errorMessage={errorMessage}
          containerRef={ref}
          buttonProps={buttonProps}
          isOpen={state.isOpen}
        />
      </CalendarPopoverAnchor>
      <CalendarPopoverContent>
        <Calendar {...calendarProps} />
      </CalendarPopoverContent>
    </CalendarPopover>
  );
}
