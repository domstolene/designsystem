import { forwardRef, useState } from 'react';
import { InputMessage } from '../InputMessage';
import { LabelPresence, RequiredMarker } from '../../helpers';
import {
  StatefulInput,
  Label,
  InputContainer,
  OuterInputContainer,
  InputProps
} from '../../helpers';
import { Property } from 'csstype';
import styled from 'styled-components';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator
} from '../../utils';
import { typographyTokens } from '../Typography/Typography.tokens';
import CalendarIcon from '../../assets/svg/calendar_today.svg';
import { datepickerTokens as tokens } from './Datepicker.tokens';

const getWidth = (type: string): Property.Width<string> => {
  return type === 'date'
    ? '205px'
    : type === 'datetime-local'
    ? '235px'
    : '320px';
};

const StyledInput = styled(StatefulInput)`
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
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-calendar-picker-indicator:focus-visible {
    ${tokens.calendarIndicator.focus.base}
  }

  ::-webkit-inner-spin-button {
    display: none;
  }
  @media (prefers-reduced-motion: no-preference) {
    ::-webkit-datetime-edit-day-field,
    ::-webkit-datetime-edit-month-field,
    ::-webkit-datetime-edit-year-field,
    ::-webkit-datetime-edit-hour-field,
    ::-webkit-datetime-edit-minute-field {
      transition: 0.2s;
    }
  }

  ::-webkit-datetime-edit-day-field:focus,
  ::-webkit-datetime-edit-month-field:focus,
  ::-webkit-datetime-edit-year-field:focus,
  ::-webkit-datetime-edit-hour-field:focus,
  ::-webkit-datetime-edit-minute-field:focus {
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
      max,
      'aria-describedby': ariaDescribedby,
      ...rest
    },
    ref
  ) => {
    const [uniqueId] = useState<string>(
      id ?? `datepickerInput-${nextUniqueId++}`
    );

    const componentWidth = width ? width : getWidth(type);
    const hasLabel = !!label;
    const labelPresence: LabelPresence = hasLabel ? 'hasLabel' : 'noLabel';
    const hasErrorMessage = !!errorMessage;
    const errorMessageId = derivativeIdGenerator(
      uniqueId,
      'errorMessage',
      errorMessage
    );
    const tipId = derivativeIdGenerator(uniqueId, 'tip', tip);

    const inputProps = {
      id: uniqueId,
      hasLabel: labelPresence,
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
      max: max || '9999-12-31', // Limit the year-part to only four digits by default
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
          {hasLabel && (
            <Label
              {...labelProps}
              typographyType="supportingStyleLabel01"
              forwardedAs="label"
            >
              {label} {required && <RequiredMarker />}
            </Label>
          )}
        </InputContainer>
        {hasErrorMessage && (
          <InputMessage
            message={errorMessage}
            id={errorMessageId}
            messageType="error"
          />
        )}
        {tip && !hasErrorMessage && (
          <InputMessage message={tip} id={tipId} messageType="tip" />
        )}
      </OuterInputContainer>
    );
  }
);
