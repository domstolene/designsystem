import { useRef } from 'react';
import { AriaDateFieldOptions, useDateField } from '@react-aria/datepicker';
import { useDateFieldState } from '@react-stately/datepicker';
import { DateValue, createCalendar } from '@internationalized/date';
import styled, { css } from 'styled-components';
import { InputMessage, Label } from '@norges-domstoler/dds-components';
import {
  InputProps,
  StatefulInput,
  dangerInputfield,
  focusDangerInputfield,
  focusInputfield,
  hoverDangerInputfield,
  hoverInputfield,
} from '@norges-domstoler/dds-form';

import { DateSegment } from './DateSegment';
import { datepickerTokens } from './Datepicker.tokens';
import { locale } from './constants';

export type DateFieldProps<T extends DateValue> = AriaDateFieldOptions<T> & {
  className?: string;
} & Pick<InputProps, 'componentSize' | 'errorMessage' | 'tip' | 'errorMessage'>;

const DateFieldContainer = styled.div``;

interface DateSegmentContainerProps {
  hasErrorMessage: boolean;
}

const DateSegmentContainer = styled(StatefulInput).attrs({
  as: 'div',
})<DateSegmentContainerProps>`
  min-width: ${datepickerTokens.datefield.minWidth};
  display: flex;
  flex-direction: row;

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
      <DateSegmentContainer
        {...fieldProps}
        // @ts-expect-error styled-components 6 har dårlige typer
        componentSize={componentSize}
        ref={ref}
        hasErrorMessage={hasErrorMessage}
      >
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </DateSegmentContainer>
      {hasMessage && (
        <InputMessage
          messageType={hasErrorMessage ? 'error' : 'tip'}
          message={errorMessage ?? tip ?? ''}
        />
      )}
    </DateFieldContainer>
  );
}
