import { ComponentProps, RefObject, useRef } from 'react';
import {
  AriaDateFieldOptions,
  useDateField,
  useDatePicker,
} from '@react-aria/datepicker';
import { useDateFieldState } from '@react-stately/datepicker';
import { DateValue, createCalendar } from '@internationalized/date';
import styled, { css } from 'styled-components';
import {
  CalendarIcon,
  Icon,
  InputMessage,
  Label,
  cn,
  normalizeButton,
  selection,
} from '@norges-domstoler/dds-components';
import {
  InputProps,
  StatefulInput,
  StyledInputProps,
  focusVisible,
} from '@norges-domstoler/dds-form';

import { DateSegment } from './DateSegment';
import { datePickerTokens } from '../DatePicker.tokens';
import { locale } from '../constants';

export type DateFieldProps<T extends DateValue> = AriaDateFieldOptions<T> & {
  className?: string;
  containerRef?: RefObject<HTMLDivElement>;
  buttonProps?: ReturnType<typeof useDatePicker>['buttonProps'];
} & Pick<InputProps, 'componentSize' | 'errorMessage' | 'tip' | 'disabled'>;

const DateFieldContainer = styled.div``;

const InputDiv = styled(StatefulInput).attrs({
  as: 'div',
})<StyledInputProps>`
  min-width: ${({ componentSize = 'medium' }) =>
    datePickerTokens.datefield[componentSize].minWidth};
  display: inline-flex;
  flex-direction: row;
  gap: ${datePickerTokens.gap};
  align-items: center;
  padding-left: ${datePickerTokens.datefield.paddingX};
  padding-right: ${datePickerTokens.datefield.paddingX};
  /* ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${datePickerTokens.datefield.disabled.background};
      color: ${datePickerTokens.datefield.disabled.color};
    `} */
`;

const DateSegmentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CalendarButton = styled.button<{
  $componentSize: DateFieldProps<DateValue>['componentSize'];
  $isDisabled: DateFieldProps<DateValue>['disabled'];
}>`
  ${normalizeButton}
  position: relative;
  ${({ $componentSize = 'medium' }) => css`
    height: ${datePickerTokens.calendarButton[$componentSize].size};
    width: ${datePickerTokens.calendarButton[$componentSize].size};
    margin: calc(0px - ${datePickerTokens.calendarButton[$componentSize].size})
      0;
  `}
  border: 0;
  padding: 0;
  border-radius: ${datePickerTokens.calendarButton.borderRadius};

  background-color: ${datePickerTokens.calendarButton.background};
  color: ${({ $isDisabled }) =>
    $isDisabled
      ? datePickerTokens.calendarButton.disabled.color
      : datePickerTokens.calendarButton.color};

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
  componentSize = 'medium',
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
  const disabled = props.isDisabled || !!fieldProps['aria-disabled'];

  return (
    <DateFieldContainer className={props.className} ref={containerRef}>
      {hasLabel && <Label {...labelProps}>{props.label}</Label>}
      <InputDiv
        {...fieldProps}
        disabled={disabled}
        componentSize={componentSize}
        ref={ref}
        hasErrorMessage={hasErrorMessage}
        className={cn(
          fieldProps.className,
          disabled && 'disabled',
          props.isOpen && 'active',
          props.isReadOnly && 'read-only',
        )}
      >
        {!props.isReadOnly && (
          <CalendarButton
            {...buttonProps}
            $isDisabled={disabled}
            $componentSize={componentSize}
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
            <Icon
              icon={CalendarIcon}
              iconSize={componentSize === 'medium' ? 'medium' : 'small'}
            />
          </CalendarButton>
        )}
        <DateSegmentContainer>
          {state.segments.map((segment, i) => (
            <DateSegment
              componentSize={componentSize}
              key={i}
              segment={segment}
              state={state}
            />
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
