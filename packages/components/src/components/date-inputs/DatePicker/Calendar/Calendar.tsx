import { GregorianCalendar } from '@internationalized/date';
import {
  type AriaCalendarProps,
  type DateValue,
  useCalendar,
} from '@react-aria/calendar';
import { useCalendarState } from '@react-stately/calendar';
import { type FC, type PropsWithChildren } from 'react';
import styled from 'styled-components';

import { CalendarGrid } from './CalendarGrid';
import { Button } from '../../../Button';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../Icon/icons';
import { Heading } from '../../../Typography';
import { locale } from '../constants';

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

  return (
    <CalendarContainer {...calendarProps}>
      <CalendarHeader>
        <Button
          type="button"
          aria-label={prevAriaLabel}
          onClick={e => onPrev?.(e as never)}
          size="small"
          purpose="secondary"
          appearance="borderless"
          icon={ArrowLeftIcon}
        />
        <Month>{title}</Month>
        <Button
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
