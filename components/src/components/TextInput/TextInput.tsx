import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { textInputTokens as tokens } from './TextInput.tokens';
import RequiredMarker from '../../helpers/RequiredMarker';
import { InputMessage } from '../../helpers/InputMessage/InputMessage';
import CharCounter from './CharCounter';
import { TextInputProps } from './TextInput.types';
import { Input, OuterInputContainer } from '../../helpers/Input';
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

    const hasErrorMessage = !!errorMessage;
    const hasTip = !!tip;

    const characterCounterId = maxLength
      ? `${uniqueId}-characterCounter`
      : undefined;
    const tipId = hasTip ? `${uniqueId}-tip` : undefined;
    const errorMessageId = hasErrorMessage
      ? `${uniqueId}-errorMessage`
      : undefined;

    const describedByIds = [];
    if (characterCounterId) describedByIds.push(characterCounterId);
    if (tipId) describedByIds.push(tipId);

    const generalInputProps = {
      id: uniqueId,
      label,
      errorMessage,
      hasErrorMessage,
      disabled,
      readOnly,
      tabIndex: readOnly ? -1 : 0,
      maxLength,
      'aria-describedby':
        describedByIds.length > 0 ? describedByIds.join(' ') : undefined,
      'aria-errormessage': errorMessageId,
      'aria-invalid': hasErrorMessage ? true : undefined,
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
          {hasErrorMessage && (
            <InputMessage
              message={errorMessage}
              messageType="error"
              messageId={errorMessageId}
            />
          )}
          {hasTip && !errorMessage && (
            <InputMessage message={tip} messageType="tip" messageId={tipId} />
          )}
          {maxLength && Number.isInteger(maxLength) && maxLength > 0 && (
            <CharCounter
              id={characterCounterId}
              current={text.length}
              max={maxLength}
            />
          )}
        </MessageContainer>
      </OuterInputContainer>
    );
  }
);
