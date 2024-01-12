import { useDatePickerState } from '@react-stately/datepicker';
import { useDatePicker } from '@react-aria/datepicker';
import type { AriaDatePickerProps } from '@react-types/datepicker';
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
import { FocusableRef, useFocusManagerRef } from '../utils/useFocusManagerRef';

export interface DatePickerProps
  extends Omit<AriaDatePickerProps<CalendarDate>, 'granularity'>,
    Pick<DateFieldProps<CalendarDate>, 'componentSize' | 'tip' | 'style'> {
  label?: string;
  errorMessage?: string;
}

const refIsFocusable = (ref: Ref<unknown>): ref is FocusableRef => {
  return typeof ref === 'object' && ref !== null && 'focus' in ref;
};

export function _DatePicker(
  { errorMessage, componentSize, tip, style, ...props }: DatePickerProps,
  forwardedRef: Ref<HTMLElement>,
) {
  const state = useDatePickerState(props);
  const domRef = useFocusManagerRef(
    refIsFocusable(forwardRef) ? forwardedRef : null,
  );
  const ref = useRef<HTMLElement>(null);
  const combinedRef = useCombinedRef(ref, domRef);
  const { buttonProps, calendarProps, fieldProps } = useDatePicker(
    { ...props, granularity: 'day' },
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
}

export const DatePicker = forwardRef(_DatePicker);

DatePicker.displayName = 'DatePicker';
