import { forwardRef, useState } from 'react';
import { InputMessage } from '../../helpers/InputMessage/InputMessage';
import RequiredMarker from '../../helpers/RequiredMarker';
import {
  Input,
  SingleLineLabel as Label,
  InputContainer,
  OuterInputContainer,
  InputProps
} from '../../helpers/Input';
import * as CSS from 'csstype';
import styled from 'styled-components';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator
} from '../../utils';
import { typographyTokens } from '../Typography/Typography.tokens';
import CalendarIcon from '../../assets/svg/calendar_today.svg';
import { datepickerTokens as tokens } from './Datepicker.tokens';

const getWidth = (type: string): CSS.Property.Width<string> => {
  return type === 'date'
    ? '205px'
    : type === 'datetime-local'
    ? '235px'
    : '320px';
};

const StyledInput = styled(Input)`
  min-height: 76px;
  ::-webkit-calendar-picker-indicator {
    // disable eslint to ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
    // eslint-disable-next-line
    // prettier-ignore
    background-image: url("${CalendarIcon}");
    ${tokens.calendarIndicator.base}
    margin-left: 0px;
    padding: 0;
    top: 50%;
    transform: translate(0, -50%);
    box-sizing: border-box;
  }

  ::-webkit-calendar-picker-indicator:focus-visible {
    ${tokens.calendarIndicator.focus.base}
  }

  ::-webkit-inner-spin-button {
    display: none;
  }

  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    transition: 0.2s;
  }

  ::-webkit-datetime-edit-day-field:focus,
  ::-webkit-datetime-edit-month-field:focus,
  ::-webkit-datetime-edit-year-field:focus {
    ${typographyTokens.selection.base}
  }
`;

export type DatepickerProps = InputProps;

let nextUniqueId = 0;

export const Datepicker = forwardRef<HTMLInputElement, DatepickerProps>(
  (
    {
      id,
      type = 'date',
      required,
      readOnly,
      disabled,
      label,
      width,
      errorMessage,
      tip,
      style,
      className,
      'aria-describedby': ariaDescribedby,
      ...rest
    },
    ref
  ) => {
    const [uniqueId] = useState<string>(
      id ?? `datepickerInput-${nextUniqueId++}`
    );

    const componentWidth = width ? width : getWidth(type);
    const hasErrorMessage = !!errorMessage;
    const errorMessageId = derivativeIdGenerator(
      uniqueId,
      'errorMessage',
      errorMessage
    );
    const tipId = derivativeIdGenerator(uniqueId, 'tip', tip);

    const inputProps = {
      id: uniqueId,
      label,
      hasErrorMessage,
      ref,
      readOnly,
      tabIndex: readOnly ? -1 : 0,
      required,
      disabled,
      type,
      'aria-describedby': spaceSeparatedIdListGenerator([
        tipId,
        errorMessageId,
        ariaDescribedby
      ]),
      'aria-invalid': hasErrorMessage ? true : undefined,
      ...rest
    };

    const outerInputContainerProps = {
      width: componentWidth,
      style,
      className
    };

    const labelProps = {
      htmlFor: uniqueId,
      disabled
    };

    return (
      <OuterInputContainer {...outerInputContainerProps}>
        <InputContainer>
          <StyledInput {...inputProps} />
          {label && (
            <Label
              {...labelProps}
              typographyType="supportingStyleLabel01"
              forwardedAs="label"
            >
              {label} {required && <RequiredMarker />}
            </Label>
          )}
        </InputContainer>
        {errorMessage && (
          <InputMessage
            message={errorMessage}
            messageId={errorMessageId}
            messageType="error"
          />
        )}
        {tip && !errorMessage && (
          <InputMessage message={tip} messageId={tipId} messageType="tip" />
        )}
      </OuterInputContainer>
    );
  }
);
