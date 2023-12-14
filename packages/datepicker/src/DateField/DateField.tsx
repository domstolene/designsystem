import { ComponentProps, Ref, forwardRef, useRef } from 'react';
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
  InputProps,
  StatefulInput,
  StyledInputProps,
  focusVisible,
} from '@norges-domstoler/dds-components';

import { DateSegment } from './DateSegment';
import { datePickerTokens } from '../DatePicker.tokens';
import { locale } from '../constants';

export type DateFieldProps<T extends DateValue> = AriaDateFieldOptions<T> & {
  className?: string;
  buttonProps?: ReturnType<typeof useDatePicker>['buttonProps'];
} & Pick<
    InputProps,
    'componentSize' | 'errorMessage' | 'tip' | 'disabled' | 'style'
  >;

const DateFieldContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const InputDiv = styled(StatefulInput).attrs({
  as: 'div',
})<StyledInputProps>`
  min-width: ${({ componentSize = 'medium' }) =>
    datePickerTokens.datefield[componentSize].minWidth};
  display: inline-flex;
  flex-direction: row;
  gap: ${datePickerTokens.gap};
  align-items: center;
  padding-left: ${({ componentSize = 'medium' }) =>
    datePickerTokens.datefield[componentSize].paddingX};
  padding-right: ${({ componentSize = 'medium' }) =>
    datePickerTokens.datefield[componentSize].paddingX};
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
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $componentSize = 'medium' }) => css`
    height: ${datePickerTokens.calendarButton[$componentSize].size};
    width: ${datePickerTokens.calendarButton[$componentSize].size};
    margin: calc(0px - ${datePickerTokens.calendarButton[$componentSize].size})
      0;
  `}
  margin-left: -1px; // To align with TextInputs icons
  border: 0;
  padding: 0;
  border-radius: ${datePickerTokens.calendarButton.borderRadius};

  background-color: ${datePickerTokens.calendarButton.background};
  color: ${({ $isDisabled }) =>
    $isDisabled
      ? datePickerTokens.calendarButton.disabled.color
      : datePickerTokens.calendarButton.color};

  transition: 50ms;

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

function _DateField<T extends DateValue>(
  {
    errorMessage,
    tip,
    componentSize = 'medium',
    style,
    buttonProps: { onPress, ...buttonProps } = {},
    ...props
  }: DateFieldProps<T>,
  forwardedRef: Ref<HTMLDivElement> = { current: null },
) {
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
    <DateFieldContainer className={props.className} ref={forwardedRef}>
      {hasLabel && (
        <Label {...labelProps} showRequiredStyling={props.isRequired}>
          {props.label}
        </Label>
      )}
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
        style={{
          ...(fieldProps.style ?? {}),
          ...(style ?? {}),
        }}
      >
        {!props.isReadOnly && (
          <CalendarButton
            {...buttonProps}
            type="button"
            $isDisabled={disabled}
            $componentSize={componentSize}
            onClick={e => {
              if (!disabled) {
                const onClick = onPress as ComponentProps<'button'>['onClick'];
                onClick?.(e);
              }
            }}
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

export const DateField = forwardRef(_DateField);
DateField.displayName = 'DateField';
