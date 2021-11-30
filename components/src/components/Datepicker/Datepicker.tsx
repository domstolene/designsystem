import { forwardRef, useState } from 'react';
import InputMessage from '../../helpers/InputMessage/InputMessage';
import RequiredMarker from '../../helpers/RequiredMarker';
import {
  Input,
  SingleLineLabel as Label,
  InputContainer,
  OuterInputContainer
} from '../../helpers/Input/Input.styles';
import { InputProps } from '../../helpers/Input/Input.types';
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

    const inputProps = {
      label,
      errorMessage,
      ref,
      readOnly,
      tabIndex: readOnly ? -1 : 0,
      required,
      disabled,
      type,
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
          <InputMessage message={errorMessage} messageType="error" />
        )}
        {tip && !errorMessage && (
          <InputMessage message={tip} messageType="tip" />
        )}
      </OuterInputContainer>
    );
  }
);
