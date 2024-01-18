import { type CalendarDate } from '@internationalized/date';
import { useDatePicker } from '@react-aria/datepicker';
import { useDatePickerState } from '@react-stately/datepicker';
import type { AriaDatePickerProps } from '@react-types/datepicker';
import type * as CSS from 'csstype';
import { type Ref, forwardRef, useRef } from 'react';

import { Calendar } from './Calendar/Calendar';
import {
  CalendarPopover,
  CalendarPopoverAnchor,
  CalendarPopoverContent,
} from './CalendarPopover';
import { DateField, type DateFieldProps } from './DateField/DateField';
import { useCombinedRef } from '../../../hooks';
import {
  type FocusableRef,
  useFocusManagerRef,
} from '../utils/useFocusManagerRef';

export interface DatePickerProps
  extends Omit<AriaDatePickerProps<CalendarDate>, 'granularity'>,
    Pick<DateFieldProps<CalendarDate>, 'componentSize' | 'tip' | 'style'> {
  label?: string;
  errorMessage?: string;
  /**
   * For å sette en egendefinert bredde på komponenten.
   */
  width?: CSS.Properties['width'];
}

const refIsFocusable = (ref: Ref<unknown>): ref is FocusableRef => {
  return typeof ref === 'object' && ref !== null && 'focus' in ref;
};

export function _DatePicker(
  { errorMessage, componentSize, tip, style, width, ...props }: DatePickerProps,
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
          width={width}
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
