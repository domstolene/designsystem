import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { textInputTokens as tokens } from './TextInput.tokens';
import { LabelPresence, RequiredMarker } from '../../helpers';
import { InputMessage } from '../InputMessage';
import CharCounter from './CharCounter';
import { TextInputProps } from './TextInput.types';
import {
  StatefulInput,
  InputContainer,
  OuterInputContainer
} from '../../helpers';
import { Label, MessageContainer, TextArea } from './TextInput.styles';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator
} from '../../utils';

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
      withCharacterCounter = true,
      className,
      style,
      'aria-describedby': ariaDescribedby,
      ...rest
    },
    ref
  ) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState('');

    useEffect(() => {
      if (textAreaRef && textAreaRef.current) {
        textAreaRef.current.style.height = `${
          textAreaRef.current.scrollHeight + 2
        }px`;
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

    const onChangeHandlerMultiline: React.ChangeEventHandler<
      HTMLTextAreaElement
    > = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);

      if (onChange) {
        onChange(event);
      }
    };

    const [uniqueId] = useState<string>(id ?? `textInput-${nextUniqueId++}`);

    const hasErrorMessage = !!errorMessage;
    const hasTip = !!tip;
    const hasLabel = !!label;
    const labelPresence: LabelPresence = hasLabel ? 'hasLabel' : 'noLabel';
    const hasMessage = hasErrorMessage || hasTip || !!maxLength;

    const characterCounterId = derivativeIdGenerator(
      uniqueId,
      'characterCounter',
      maxLength && withCharacterCounter
    );
    const tipId = derivativeIdGenerator(uniqueId, 'tip', tip);
    const errorMessageId = derivativeIdGenerator(
      uniqueId,
      'errorMessage',
      errorMessage
    );

    const generalInputProps = {
      id: uniqueId,
      hasLabel: labelPresence,
      errorMessage,
      hasErrorMessage,
      required,
      disabled,
      readOnly,
      tabIndex: readOnly ? -1 : 0,
      maxLength,
      'aria-describedby': spaceSeparatedIdListGenerator([
        tipId,
        errorMessageId,
        characterCounterId,
        ariaDescribedby
      ]),
      'aria-invalid': hasErrorMessage ? true : undefined,
      ...rest
    };

    const labelProps = {
      multiline,
      disabled,
      readOnly
    };

    const inputContainerProps = {
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
              as="textarea"
              onChange={onChangeHandlerMultiline}
              {...generalInputProps}
            />
          ) : (
            <StatefulInput
              ref={ref}
              onChange={onChangeHandler}
              type={type}
              {...generalInputProps}
            />
          )}
          {hasLabel && (
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
        {hasMessage && (
          <MessageContainer>
            {hasErrorMessage && (
              <InputMessage
                message={errorMessage}
                messageType="error"
                id={errorMessageId}
              />
            )}
            {hasTip && !errorMessage && (
              <InputMessage message={tip} messageType="tip" id={tipId} />
            )}
            {maxLength &&
              Number.isInteger(maxLength) &&
              maxLength > 0 &&
              withCharacterCounter && (
                <CharCounter
                  id={characterCounterId}
                  current={text.length}
                  max={maxLength}
                />
              )}
          </MessageContainer>
        )}
      </OuterInputContainer>
    );
  }
);
