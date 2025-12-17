import { type CalendarDate } from '@internationalized/date';
import { useDatePicker } from '@react-aria/datepicker';
import { I18nProvider } from '@react-aria/i18n';
import { useDatePickerState } from '@react-stately/datepicker';
import type { AriaDatePickerProps } from '@react-types/datepicker';
import { type Ref, useId, useRef } from 'react';

import { Calendar } from './Calendar/Calendar';
import {
  CalendarPopover,
  CalendarPopoverAnchor,
  CalendarPopoverContent,
} from './CalendarPopover';
import { LOCALE } from './constants';
import { DateField, type DateFieldProps } from './DateField/DateField';
import { useCombinedRef } from '../../../hooks';
import { useLanguage } from '../../../i18n';
import { type Breakpoint } from '../../layout';
import { type ResponsiveProps } from '../../layout/common/Responsive.types';
import {
  type FocusableRef,
  useFocusManagerRef,
} from '../utils/useFocusManagerRef';

export interface DatePickerProps
  extends
    Omit<AriaDatePickerProps<CalendarDate>, 'granularity'>,
    Pick<DateFieldProps<CalendarDate>, 'componentSize' | 'tip' | 'style'>,
    Pick<ResponsiveProps, 'width'> {
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
   * Brekkpunkt for å vise versjon for liten skjerm.
   */
  smallScreenBreakpoint?: Breakpoint;
  /**
   * Om brukeren kan fjerne valgt dato med en tømmeknapp, inkludert delvis utfylte verdier (f.eks. kun måned).
   * @default false
   */
  clearable?: boolean;
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
  clearable = false,
  ref,
  ...props
}: DatePickerProps) {
  const lang = useLanguage();

  if (!lang) {
    throw new Error('DatePicker must be used within a DdsProvider');
  }

  const state = useDatePickerState(props);
  const domRef = useFocusManagerRef(ref && refIsFocusable(ref) ? ref : null);
  const internalRef = useRef<HTMLElement>(null);
  const combinedRef = useCombinedRef(internalRef, domRef);
  const { buttonProps, calendarProps, fieldProps, groupProps } = useDatePicker(
    { ...props, granularity: 'day' },
    state,
    internalRef,
  );
  const hasErrorMessage = !!errorMessage;
  const hasTip = !!tip;
  const uniqueId = props.id ?? useId();
  const errorMessageId = hasErrorMessage
    ? `${uniqueId}-errorMessage`
    : undefined;
  const tipId = hasTip ? `${uniqueId}-tip` : undefined;
  return (
    <I18nProvider locale={LOCALE[lang]}>
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
            id={uniqueId}
            label={props.label}
            errorMessage={errorMessage}
            errorMessageId={errorMessageId}
            tipId={tipId}
            buttonProps={buttonProps}
            style={style}
            width={width}
            clearable={clearable}
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
