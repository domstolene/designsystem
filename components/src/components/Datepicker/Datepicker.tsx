import { forwardRef, InputHTMLAttributes, useState } from 'react';
import styled, { css } from 'styled-components';
import * as CSS from 'csstype';
import InputMessage from '../../helpers/InputMessage/InputMessage';
import RequiredMarker from '../../helpers/RequiredMarker';
import {
  Input as StyledInput,
  SingleLineLabel as Label
} from '../TextInput/TextInput.styles';

type InputWrapperProps = Pick<DatepickerProps, 'width'>;

const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`;

export type DatepickerProps = {
  label?: string;
  tip?: string;
  width?: CSS.WidthProperty<string>;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

let nextUniqueId = 0;

export const Datepicker = forwardRef<HTMLInputElement, DatepickerProps>(
  (
    { id, required, label, width = '200px', errorMessage, tip, ...rest },
    ref
  ) => {
    const [uniqueId] = useState<string>(
      id ?? `datepickerInput-${nextUniqueId++}`
    );

    const inputProps = {
      label,
      errorMessage,
      ref,

      required,
      type: 'date',
      ...rest
    };

    const inputWrapperProps = {
      width
    };

    const labelProps = {};

    return (
      <InputWrapper {...inputWrapperProps}>
        <StyledInput {...inputProps} />
        {label && (
          <Label
            {...labelProps}
            typographyType="supportingStyleLabel01"
            forwardedAs="label"
            htmlFor={uniqueId}
          >
            {label} {required && <RequiredMarker />}
          </Label>
        )}
        {errorMessage && (
          <InputMessage message={errorMessage} messageType="error" />
        )}
        {tip && !errorMessage && (
          <InputMessage message={tip} messageType="tip" />
        )}
      </InputWrapper>
    );
  }
);
