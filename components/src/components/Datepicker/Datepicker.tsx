import { forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';
import InputMessage from '../../helpers/InputMessage/InputMessage';
import RequiredMarker from '../../helpers/RequiredMarker';
import { Input } from '../../helpers/Input/Input.styles';
import {
  SingleLineLabel as Label,
  InputContainer,
  OuterInputContainer
} from '../../helpers/Input/Input.styles';
import { InputProps } from '../../helpers/Input/Input.types';

type InputWrapperProps = Pick<DatepickerProps, 'width'>;

const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`;

export type DatepickerProps = {} & InputProps;

let nextUniqueId = 0;

export const Datepicker = forwardRef<HTMLInputElement, DatepickerProps>(
  (
    {
      id,
      required,
      readOnly,
      label,
      width = '200px',
      errorMessage,
      tip,
      ...rest
    },
    ref
  ) => {
    const [uniqueId] = useState<string>(
      id ?? `datepickerInput-${nextUniqueId++}`
    );

    const inputProps = {
      label,
      errorMessage,
      ref,
      readOnly,
      tabIndex: readOnly ? -1 : 0,
      required,
      type: 'date',
      ...rest
    };

    const outerInputContainerProps = {
      width
    };

    const labelProps = {
      htmlFor: uniqueId
    };

    return (
      <OuterInputContainer {...outerInputContainerProps}>
        <InputContainer>
          <Input {...inputProps} />
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
