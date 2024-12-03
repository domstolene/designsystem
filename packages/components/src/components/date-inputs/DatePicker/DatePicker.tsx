import { type CalendarDate } from '@internationalized/date';
import { useDatePicker } from '@react-aria/datepicker';
import { I18nProvider } from '@react-aria/i18n';
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
import { locale } from './constants';
import { DateField, type DateFieldProps } from './DateField/DateField';
import { useCombinedRef } from '../../../hooks';
import { Modal } from '../../Modal';
import styles from '../common/DateInput.module.css';
import {
  type FocusableRef,
  useFocusManagerRef,
} from '../utils/useFocusManagerRef';

export interface DatePickerProps
  extends Omit<AriaDatePickerProps<CalendarDate>, 'granularity'>,
    Pick<DateFieldProps<CalendarDate>, 'componentSize' | 'tip' | 'style'> {
  /**
   * Ledetekst.
   */
  label?: string;
  /**
   * Feilmelding.
   */
  errorMessage?: string;
  /**
   * Egendefinert bredde på komponenten.
   */
  width?: CSS.Properties['width'];
  /**
   * Brekkpunkt for å vise versjon for liten skjerm.
   */
  smallScreen?: boolean;
}

const refIsFocusable = (ref: Ref<unknown>): ref is FocusableRef => {
  return typeof ref === 'object' && ref !== null && 'focus' in ref;
};

export function _DatePicker(
  {
    errorMessage,
    componentSize,
    tip,
    style,
    width,
    smallScreen,
    ...props
  }: DatePickerProps,
  forwardedRef: Ref<HTMLElement>,
) {
  const state = useDatePickerState(props);
  const domRef = useFocusManagerRef(
    refIsFocusable(forwardRef) ? forwardedRef : null,
  );
  const ref = useRef<HTMLElement>(null);
  const combinedRef = useCombinedRef(ref, domRef);
  const { buttonProps, calendarProps, fieldProps, groupProps } = useDatePicker(
    { ...props, granularity: 'day' },
    state,
    ref,
  );

  const dateField = (
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
  );

  return (
    <I18nProvider locale={locale}>
      {smallScreen ? (
        <>
          {dateField}
          <Modal
            isOpen={state.isOpen}
            onClose={state.close}
            className={styles.modal}
          >
            <Calendar {...calendarProps} />
          </Modal>
        </>
      ) : (
        <CalendarPopover isOpen={state.isOpen} onClose={state.close}>
          <CalendarPopoverAnchor>{dateField}</CalendarPopoverAnchor>
          <CalendarPopoverContent>
            <Calendar {...calendarProps} />
          </CalendarPopoverContent>
        </CalendarPopover>
      )}
    </I18nProvider>
  );
}

export const DatePicker = forwardRef(_DatePicker);

DatePicker.displayName = 'DatePicker';
