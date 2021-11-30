import { forwardRef, useState } from 'react';
import InputMessage from '../../helpers/InputMessage/InputMessage';
import RequiredMarker from '../../helpers/RequiredMarker';
import { Input } from '../../helpers/Input/Input.styles';
import {
  SingleLineLabel as Label,
  InputContainer,
  OuterInputContainer
} from '../../helpers/Input/Input.styles';
import { InputProps } from '../../helpers/Input/Input.types';

export type DatepickerProps = {} & InputProps;

let nextUniqueId = 0;

export const Datepicker = forwardRef<HTMLInputElement, DatepickerProps>(
  (
    {
      id,
      required,
      readOnly,
      disabled,
      label,
      width = '200px',
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

    const inputProps = {
      label,
      errorMessage,
      ref,
      readOnly,
      tabIndex: readOnly ? -1 : 0,
      required,
      disabled,
      type: 'date',
      ...rest
    };

    const outerInputContainerProps = {
      width,
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
