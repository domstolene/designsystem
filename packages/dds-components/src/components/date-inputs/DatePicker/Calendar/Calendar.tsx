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
import { createTexts, useTranslation } from '../../../../i18n';
import { Button } from '../../../Button';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../Icon/icons';
import { HStack, VStack } from '../../../layout';
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
  const { t } = useTranslation();
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    createCalendar,
    locale,
  });
  const {
    calendarProps,
    prevButtonProps: { onPress: onPrev },
    nextButtonProps: { onPress: onNext },
    title,
  } = useCalendar(props, state);

  const { onClose, closeButtonRef } = useContext(CalendarPopoverContext);

  const closeOnKeyboardBlurBack: KeyboardEventHandler<HTMLButtonElement> = (
    event: KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === 'Tab' && event.shiftKey === true) {
      if (!closeButtonRef?.current?.checkVisibility()) {
        onClose();
      }
    }
  };

  return (
    <VStack {...calendarProps} gap="x0.25" height="337px">
      <HStack justifyContent="space-between" alignItems="center">
        <Button
          type="button"
          aria-label={t(texts.previousMonth)}
          onClick={e => onPrev?.(e as never)}
          size="small"
          purpose="tertiary"
          icon={ArrowLeftIcon}
          htmlProps={{ onKeyDown: closeOnKeyboardBlurBack }}
          className={styles['calendar__month-button']}
        />
        <Heading
          level={2}
          typographyType="headingXsmall"
          className={styles.calendar__header__month}
        >
          {title}
        </Heading>
        <Button
          type="button"
          aria-label={t(texts.nextMonth)}
          onClick={e => onNext?.(e as never)}
          size="small"
          purpose="tertiary"
          icon={ArrowRightIcon}
          className={styles['calendar__month-button']}
        />
      </HStack>
      <CalendarGrid state={state} />
    </VStack>
  );
}

Calendar.displayName = 'Calendar';

const texts = createTexts({
  nextMonth: {
    nb: 'Neste måned',
    no: 'Neste måned',
    nn: 'Neste månad',
    en: 'Next month',
    se: 'Boahte mánu',
  },
  previousMonth: {
    nb: 'Forrige måned',
    no: 'Forrige måned',
    nn: 'Førre månad',
    en: 'Previous month',
    se: 'Ovddit mánu',
  },
});
