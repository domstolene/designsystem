import { type CalendarDate } from '@internationalized/date';
import { useDatePicker } from '@react-aria/datepicker';
import { I18nProvider } from '@react-aria/i18n';
import { useDatePickerState } from '@react-stately/datepicker';
import type { AriaDatePickerProps } from '@react-types/datepicker';
import type * as CSS from 'csstype';
import { type Ref, useRef } from 'react';

import { Calendar } from './Calendar/Calendar';
import {
  CalendarPopover,
  CalendarPopoverAnchor,
  CalendarPopoverContent,
} from './CalendarPopover';
import { locale } from './constants';
import { DateField, type DateFieldProps } from './DateField/DateField';
import { useCombinedRef } from '../../../hooks';
import { type ScreenSizeLiteral } from '../../helpers';
import {
  type FocusableRef,
  useFocusManagerRef,
} from '../utils/useFocusManagerRef';

export interface DatePickerProps
  extends Omit<AriaDatePickerProps<CalendarDate>, 'granularity'>,
    Pick<DateFieldProps<CalendarDate>, 'componentSize' | 'tip' | 'style'> {
  ref?: Ref<HTMLElement>;
  /**
   * Ledetekst.
   */
  label?: string;
  /**
   * Feilmelding.
   */
  errorMessage?: string;
  /**Om ukenummer skal vises.
   * @default true
   */
  showWeekNumbers?: boolean;
  /**
   * Egendefinert bredde på komponenten.
   */
  width?: CSS.Properties['width'];
  /**
   * Brekkpunkt for å vise versjon for liten skjerm.
   */
  smallScreenBreakpoint?: ScreenSizeLiteral;
}

const refIsFocusable = (ref: Ref<unknown>): ref is FocusableRef => {
  return typeof ref === 'object' && ref !== null && 'focus' in ref;
};

export function DatePicker({
  errorMessage,
  componentSize,
  tip,
  style,
  width,
  smallScreenBreakpoint,
  showWeekNumbers = true,
  ref,
  ...props
}: DatePickerProps) {
  const state = useDatePickerState(props);
  const domRef = useFocusManagerRef(ref && refIsFocusable(ref) ? ref : null);
  const internalRef = useRef<HTMLElement>(null);
  const combinedRef = useCombinedRef(internalRef, domRef);
  const { buttonProps, calendarProps, fieldProps, groupProps } = useDatePicker(
    { ...props, granularity: 'day' },
    state,
    internalRef,
  );

  return (
    <I18nProvider locale={locale}>
      <CalendarPopover
        isOpen={state.isOpen}
        onClose={state.close}
        showWeekNumbers={showWeekNumbers}
      >
        <CalendarPopoverAnchor>
          <DateField
            {...fieldProps}
            groupProps={groupProps}
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
        <CalendarPopoverContent smallScreenBreakpoint={smallScreenBreakpoint}>
          <Calendar {...calendarProps} />
        </CalendarPopoverContent>
      </CalendarPopover>
    </I18nProvider>
  );
}

DatePicker.displayName = 'DatePicker';
