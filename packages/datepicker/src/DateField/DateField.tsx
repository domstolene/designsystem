import { forwardRef, useRef } from 'react';
import {
  AriaDateFieldOptions,
  useDateField,
  useDatePicker,
} from '@react-aria/datepicker';
import { useDateFieldState } from '@react-stately/datepicker';
import {
  CalendarDate,
  DateValue,
  createCalendar,
} from '@internationalized/date';
import styled from 'styled-components';
import {
  InputMessage,
  Label,
  cn,
  InputProps,
  StatefulInput,
  StyledInputProps,
} from '@norges-domstoler/dds-components';

import { DateSegment } from './DateSegment';
import { datePickerTokens } from '../DatePicker.tokens';
import { locale } from '../constants';
import { CalendarButton } from './CalendarButton';

export type DateFieldProps<T extends DateValue = CalendarDate> =
  AriaDateFieldOptions<T> & {
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

export const DateField = forwardRef<HTMLDivElement, DateFieldProps>(
  (
    {
      errorMessage,
      tip,
      componentSize = 'medium',
      style,
      buttonProps,
      ...props
    },
    forwardedRef,
  ) => {
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
              componentSize={componentSize}
              {...buttonProps}
              isDisabled={disabled}
            />
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
  },
);

DateField.displayName = 'DateField';
