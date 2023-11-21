import { ComponentProps, RefObject, useRef } from 'react';
import {
  AriaDateFieldOptions,
  useDateField,
  useDatePicker,
} from '@react-aria/datepicker';
import { useDateFieldState } from '@react-stately/datepicker';
import { DateValue, createCalendar } from '@internationalized/date';
import styled from 'styled-components';
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
  focusVisible,
} from '@norges-domstoler/dds-form';

import { DateSegment } from './DateSegment';
import { datePickerTokens } from '../DatePicker.tokens';
import { locale } from '../constants';

export type DateFieldProps<T extends DateValue> = AriaDateFieldOptions<T> & {
  className?: string;
  containerRef?: RefObject<HTMLDivElement>;
  buttonProps?: ReturnType<typeof useDatePicker>['buttonProps'];
} & Pick<InputProps, 'componentSize' | 'errorMessage' | 'tip'>;

const DateFieldContainer = styled.div``;

const InputDiv = styled(StatefulInput).attrs({
  as: 'div',
})`
  min-width: ${datePickerTokens.datefield.minWidth};
  display: flex;
  flex-direction: row;
  gap: ${datePickerTokens.gap};
  align-items: center;
  padding: ${datePickerTokens.datefield.padding};
`;

const DateSegmentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CalendarButton = styled.button`
  ${normalizeButton}
  position: relative;
  height: ${datePickerTokens.calendarButton.size};
  width: ${datePickerTokens.calendarButton.size};
  border: 0;
  padding: 0;
  margin: -${datePickerTokens.calendarButton.size} 0;
  border-radius: ${datePickerTokens.calendarButton.borderRadius};

  background-color: ${datePickerTokens.calendarButton.background};
  color: ${datePickerTokens.calendarButton.color};

  transition: 50ms;

  > svg {
    position: absolute
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  &:hover:not(.disabled) {
    background-color: ${datePickerTokens.calendarButton.hover.background};
    color: ${datePickerTokens.calendarButton.hover.color};
  }

  &:focus-visible:not(.disabled) {
    ${focusVisible}
    outline-offset: 0;
  }

  &.disabled {
    outline: none;
  }

  *::selection {
    ${selection}
  }
`;

export function DateField<T extends DateValue>({
  errorMessage,
  tip,
  componentSize,
  containerRef,
  buttonProps: { onPress, ...buttonProps } = {},
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
  const disabled = props.isDisabled || fieldProps['aria-disabled'];

  return (
    <DateFieldContainer className={props.className} ref={containerRef}>
      {hasLabel && <Label {...labelProps}>{props.label}</Label>}
      <InputDiv
        {...fieldProps}
        // @ts-expect-error styled-components 6 har dårlige typer
        componentSize={componentSize}
        ref={ref}
        hasErrorMessage={hasErrorMessage}
        className={[
          fieldProps.className,
          disabled ? 'disabled' : false,
          props.isOpen ? 'active' : false,
          props.isReadOnly ? 'read-only' : false,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {!props.isReadOnly && (
          <CalendarButton
            {...buttonProps}
            onClick={e => {
              if (!disabled) {
                const onClick = onPress as ComponentProps<'button'>['onClick'];
                onClick?.(e);
              }
            }}
            aria-label="Åpne kalender"
            className={[disabled ? 'disabled' : false]
              .filter(Boolean)
              .join(' ')}
          >
            <Icon icon={CalendarIcon} />
          </CalendarButton>
        )}
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

DateField.displayName = 'DateField';
