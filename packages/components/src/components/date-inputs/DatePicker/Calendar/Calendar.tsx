import { GregorianCalendar } from '@internationalized/date';
import {
  type AriaCalendarProps,
  type DateValue,
  useCalendar,
} from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import { useCalendarState } from '@react-stately/calendar';
import {
  type FC,
  type KeyboardEvent,
  type KeyboardEventHandler,
  type PropsWithChildren,
  useContext,
} from 'react';
import styled from 'styled-components';

import { CalendarGrid } from './CalendarGrid';
import { Button } from '../../../Button';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../Icon/icons';
import { Heading } from '../../../Typography';
import { CalendarPopoverContext } from '../CalendarPopover';

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Month: FC<PropsWithChildren> = styled(Heading).attrs({
  level: 2,
  typographyType: 'headingSans02',
})`
  text-transform: capitalize;
`;

const StyledButton = styled(Button)`
  user-select: none;
`;

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
    <CalendarContainer {...calendarProps}>
      <CalendarHeader>
        <StyledButton
          type="button"
          aria-label={prevAriaLabel}
          onClick={e => onPrev?.(e as never)}
          size="small"
          purpose="secondary"
          appearance="borderless"
          icon={ArrowLeftIcon}
          htmlProps={{ onKeyDown: closeOnKeyboardBlurBack }}
        />
        <Month>{title}</Month>
        <StyledButton
          type="button"
          aria-label={nextAriaLabel}
          onClick={e => onNext?.(e as never)}
          size="small"
          purpose="secondary"
          appearance="borderless"
          icon={ArrowRightIcon}
        />
      </CalendarHeader>
      <CalendarGrid state={state} />
    </CalendarContainer>
  );
}

Calendar.displayName = 'Calendar';
