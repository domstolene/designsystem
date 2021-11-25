import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { textInputTokens as tokens } from './TextInput.tokens';
import RequiredMarker from '../../helpers/RequiredMarker';
import InputMessage from '../../helpers/InputMessage/InputMessage';
import CharCounter from './CharCounter';
import { TextInputProps } from './TextInput.types';
import { Input, OuterInputContainer } from '../../helpers/Input/Input.styles';
import {
  Label,
  InputContainer,
  MessageContainer,
  TextArea
} from './TextInput.styles';

let nextUniqueId = 0;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      disabled,
      readOnly,
      errorMessage,
      tip,
      required,
      maxLength,
      multiline,
      onChange,
      id,
      width = tokens.wrapper.defaultWidth,
      type = 'text',
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState('');
    const [textAreaHeight, setTextAreaHeight] = useState('auto');
    const [parentHeight, setParentHeight] = useState('auto');

    useEffect(() => {
      if (textAreaRef && textAreaRef.current) {
        setParentHeight(`${textAreaRef.current.scrollHeight}px`);
        setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
      }
    }, [text]);

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setText(event.target.value);

      if (onChange) {
        onChange(event);
      }
    };

    const onChangeHandlerMultiline: React.ChangeEventHandler<HTMLTextAreaElement> = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setTextAreaHeight('auto');
      if (textAreaRef && textAreaRef.current) {
        setParentHeight(`${textAreaRef.current.scrollHeight}px`);
      }

      setText(event.target.value);

      if (onChange) {
        onChange(event);
      }
    };

    const [uniqueId] = useState<string>(id ?? `textInput-${nextUniqueId++}`);

    const generalInputProps = {
      id: uniqueId,
      label,
      errorMessage,
      disabled,
      readOnly,
      tabIndex: readOnly ? -1 : 0,
      maxLength,
      ...rest
    };

    const labelProps = {
      multiline,
      disabled,
      readOnly
    };

    const inputContainerProps = {
      style: multiline ? { minHeight: parentHeight } : {},
      multiline,
      label
    };

    const outerInputContainerProps = {
      className,
      style,
      width
    };

    return (
      <OuterInputContainer {...outerInputContainerProps}>
        <InputContainer {...inputContainerProps}>
          {multiline ? (
            <TextArea
              ref={textAreaRef}
              style={{ height: textAreaHeight }}
              onChange={onChangeHandlerMultiline}
              required={required}
              {...generalInputProps}
            />
          ) : (
            <Input
              ref={ref}
              onChange={onChangeHandler}
              type={type}
              required={required}
              {...generalInputProps}
            />
          )}
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
        </InputContainer>
        <MessageContainer>
          {errorMessage && (
            <InputMessage message={errorMessage} messageType="error" />
          )}
          {tip && !errorMessage && (
            <InputMessage message={tip} messageType="tip" />
          )}
          {maxLength && Number.isInteger(maxLength) && maxLength > 0 && (
            <CharCounter current={text.length} max={maxLength} />
          )}
        </MessageContainer>
      </OuterInputContainer>
    );
  }
);
