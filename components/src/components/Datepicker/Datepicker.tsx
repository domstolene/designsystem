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

const getWidth = (type: string): CSS.WidthProperty<string> => {
  return type === 'date'
    ? '205px'
    : type === 'datetime-local'
    ? '235px'
    : '320px';
};

const StyledInput = styled(Input)`
  ::-webkit-calendar-picker-indicator {
    margin-left: 0px;
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
      ...rest
    },
    ref
  ) => {
    const [uniqueId] = useState<string>(
      id ?? `datepickerInput-${nextUniqueId++}`
    );

    const componentWidth = width ? width : getWidth(type);
    const hasErrorMessage = !!errorMessage;
    const hasTip = !!tip;
    const errorMessageId = hasErrorMessage
      ? `${uniqueId}-errorMessage`
      : undefined;
    const tipId = hasTip ? `${uniqueId}-tip` : undefined;

    const inputProps = {
      label,
      hasErrorMessage,
      ref,
      readOnly,
      tabIndex: readOnly ? -1 : 0,
      required,
      disabled,
      type,
      'aria-describedby': tipId,
      'aria-errormessage': errorMessageId,
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
