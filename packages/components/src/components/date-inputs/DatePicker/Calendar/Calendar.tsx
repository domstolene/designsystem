import { GregorianCalendar } from '@internationalized/date';
import {
  type AriaCalendarProps,
  type DateValue,
  useCalendar,
} from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import { useCalendarState } from '@react-stately/calendar';
import {
  type KeyboardEvent,
  type KeyboardEventHandler,
  useContext,
} from 'react';

import { CalendarGrid } from './CalendarGrid';
import { Button } from '../../../Button';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../Icon/icons';
import { Heading } from '../../../Typography';
import styles from '../../common/DateInput.module.css';
import { CalendarPopoverContext } from '../CalendarPopover';

function createCalendar(identifier: string) {
  switch (identifier) {
    case 'gregory':
      return new GregorianCalendar();
    default:
      throw new Error(`Unsupported calendar ${identifier}`);
  }
}

export type CalendarProps<T extends DateValue> = AriaCalendarProps<T>;

export function Calendar<T extends DateValue>(props: CalendarProps<T>) {
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    createCalendar,
    locale,
  });
  const {
    calendarProps,
    prevButtonProps: { onPress: onPrev, 'aria-label': prevAriaLabel },
    nextButtonProps: { onPress: onNext, 'aria-label': nextAriaLabel },
    title,
  } = useCalendar(props, state);

  const { onClose } = useContext(CalendarPopoverContext);

  const closeOnKeyboardBlurBack: KeyboardEventHandler<HTMLButtonElement> = (
    event: KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === 'Tab' && event.shiftKey === true) {
      onClose();
    }
  };

  return (
    <div {...calendarProps} className={styles.calendar}>
      <div className={styles.calendar__header}>
        <Button
          type="button"
          aria-label={prevAriaLabel}
          onClick={e => onPrev?.(e as never)}
          size="small"
          purpose="tertiary"
          icon={ArrowLeftIcon}
          htmlProps={{ onKeyDown: closeOnKeyboardBlurBack }}
          className={styles['calendar__month-button']}
        />
        <Heading
          level={2}
          typographyType="headingSans02"
          className={styles.calendar__header__month}
        >
          {title}
        </Heading>
        <Button
          type="button"
          aria-label={nextAriaLabel}
          onClick={e => onNext?.(e as never)}
          size="small"
          purpose="tertiary"
          icon={ArrowRightIcon}
          className={styles['calendar__month-button']}
        />
      </div>
      <CalendarGrid state={state} />
    </div>
  );
}

Calendar.displayName = 'Calendar';
