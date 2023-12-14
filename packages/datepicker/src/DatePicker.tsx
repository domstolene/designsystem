import { useDatePickerState } from '@react-stately/datepicker';
import { useDatePicker } from '@react-aria/datepicker';
import type { DateValue, AriaDatePickerProps } from '@react-types/datepicker';
import { Ref, forwardRef, useRef } from 'react';
import { useCombinedRef } from '@norges-domstoler/dds-components';
import { DateField, DateFieldProps } from './DateField/DateField';
import { Calendar } from './Calendar/Calendar';
import {
  CalendarPopover,
  CalendarPopoverAnchor,
  CalendarPopoverContent,
} from './CalendarPopover';
import { CalendarDate } from '@internationalized/date';
import {
  FocusableRefValue,
  useFocusManagerRef,
} from './utils/useFocusManagerRef';

export interface DatePickerProps
  extends AriaDatePickerProps<CalendarDate>,
    Pick<DateFieldProps<CalendarDate>, 'componentSize' | 'tip' | 'style'> {
  label?: string;
  errorMessage?: string;
}

export const DatePicker = forwardRef<FocusableRefValue, DatePickerProps>(
  ({ errorMessage, componentSize, tip, style, ...props }, forwardedRef) => {
    const state = useDatePickerState(props);
    const domRef = useFocusManagerRef(forwardedRef);
    const ref = useRef<HTMLElement>(null);
    const combinedRef = useCombinedRef(ref, domRef);
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
            ref={combinedRef}
            componentSize={componentSize}
            tip={tip}
            label={props.label}
            errorMessage={errorMessage}
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
  },
);

DatePicker.displayName = 'DatePicker';
