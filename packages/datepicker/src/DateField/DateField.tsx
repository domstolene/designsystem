import { useRef } from 'react';
import { AriaDateFieldOptions, useDateField } from '@react-aria/datepicker';
import { useDateFieldState } from '@react-stately/datepicker';
import { DateValue, createCalendar } from '@internationalized/date';
import styled, { css } from 'styled-components';
import {
  CalendarIcon,
  Icon,
  InputMessage,
  Label,
  normalizeButton,
  selection,
} from '@norges-domstoler/dds-components';
import {
  InputProps,
  StatefulInput,
  focusDangerInputfield,
  focusInputfield,
  focusVisible,
  hoverDangerInputfield,
  hoverInputfield,
} from '@norges-domstoler/dds-form';

import { DateSegment } from './DateSegment';
import { datepickerTokens } from '../Datepicker.tokens';
import { locale } from '../constants';

export type DateFieldProps<T extends DateValue> = AriaDateFieldOptions<T> & {
  className?: string;
} & Pick<InputProps, 'componentSize' | 'errorMessage' | 'tip' | 'errorMessage'>;

const DateFieldContainer = styled.div``;

interface DateSegmentContainerProps {
  hasErrorMessage: boolean;
}

const InputDiv = styled(StatefulInput).attrs({
  as: 'div',
})<DateSegmentContainerProps>`
  min-width: ${datepickerTokens.datefield.minWidth};
  display: flex;
  flex-direction: row;
  gap: ${datepickerTokens.gap};
  align-items: center;
  padding: ${datepickerTokens.datefield.padding};

  &:hover {
    ${hoverInputfield}
  }

  &:focus-within,
  &:active {
    ${focusInputfield}
  }

  ${({ hasErrorMessage }) =>
    hasErrorMessage &&
    css`
      &:hover {
        ${hoverDangerInputfield}
      }
      &:focus-within,
      &:active {
        ${focusDangerInputfield}
      }
    `}
`;

const DateSegmentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CalendarButton = styled.button`
  ${normalizeButton}
  position: relative;
  height: ${datepickerTokens.calendarButton.size};
  width: ${datepickerTokens.calendarButton.size};
  border: 0;
  padding: 0;
  margin: -${datepickerTokens.calendarButton.size} 0;
  border-radius: ${datepickerTokens.calendarButton.borderRadius};

  background-color: ${datepickerTokens.calendarButton.background};
  color: ${datepickerTokens.calendarButton.color};

  transition: 50ms;

  > svg {
    position: absolute
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  &:hover {
    background-color: ${datepickerTokens.calendarButton.hover.background};
    color: ${datepickerTokens.calendarButton.hover.color};
  }

  &:focus-visible {
    ${focusVisible}
    outline-offset: 0;
  }

  *::selection {
    ${selection}
  }
`;

export function DateField<T extends DateValue>({
  errorMessage,
  tip,
  componentSize,
  ...props
}: DateFieldProps<T>) {
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef<HTMLInputElement>(null);
  const { labelProps, fieldProps } = useDateField(props, state, ref);

  const hasErrorMessage = !!errorMessage;
  const hasTip = !!tip;
  const hasLabel = props.label != null;
  const hasMessage = hasErrorMessage || hasTip;

  return (
    <DateFieldContainer className={props.className}>
      {hasLabel && <Label {...labelProps}>{props.label}</Label>}
      <InputDiv
        {...fieldProps}
        // @ts-expect-error styled-components 6 har dårlige typer
        componentSize={componentSize}
        ref={ref}
        hasErrorMessage={hasErrorMessage}
      >
        <CalendarButton aria-label="Åpne kalender">
          <Icon icon={CalendarIcon} />
        </CalendarButton>
        <DateSegmentContainer>
          {state.segments.map((segment, i) => (
            <DateSegment key={i} segment={segment} state={state} />
          ))}
        </DateSegmentContainer>
      </InputDiv>
      {hasMessage && (
        <InputMessage
          messageType={hasErrorMessage ? 'error' : 'tip'}
          message={errorMessage ?? tip ?? ''}
        />
      )}
    </DateFieldContainer>
  );
}
