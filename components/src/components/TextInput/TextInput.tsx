import React, { useState, useEffect, useRef, forwardRef, useId } from 'react';
import { InputSize, RequiredMarker } from '../../helpers';
import { InputMessage } from '../InputMessage';
import CharCounter from './CharCounter';
import { TextInputProps } from './TextInput.types';
import {
  StatefulInput,
  InputContainer,
  OuterInputContainer,
} from '../../helpers';
import {
  MessageContainer,
  TextArea,
  StyledIcon,
  StyledInput,
} from './TextInput.styles';
import { Label } from '../Typography';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { Property } from 'csstype';
import { getFormInputIconSize } from '../../helpers/Input/Input.utils';

const defaultWidth: Property.Width<string> = '320px';

const getWidth = (
  size: InputSize,
  width?: Property.Width<string>
): Property.Width<string> => {
  if (width) return width;
  if (size === 'tiny') {
    return '210px';
  }
  return defaultWidth;
};

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
      width,
      componentSize = 'medium',
      type = 'text',
      withCharacterCounter = true,
      className,
      style,
      value,
      defaultValue,
      'aria-describedby': ariaDescribedby,
      icon,
      ...rest
    },
    ref
  ) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState<string>(
      getDefaultText(value, defaultValue)
    );

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

    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-textInput`;

    const hasErrorMessage = !!errorMessage;
    const hasTip = !!tip;
    const hasLabel = !!label;
    const hasMessage = hasErrorMessage || hasTip || !!maxLength;
    const hasIcon = !!icon;

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
      errorMessage,
      hasErrorMessage,
      required,
      disabled,
      readOnly,
      tabIndex: readOnly ? -1 : 0,
      maxLength,
      value,
      defaultValue,
      'aria-describedby': spaceSeparatedIdListGenerator([
        tipId,
        errorMessageId,
        characterCounterId,
        ariaDescribedby,
      ]),
      'aria-invalid': hasErrorMessage ? true : undefined,
      ...rest,
    };

    const outerInputContainerProps = {
      multiline,
      className,
      style,
      width: getWidth(componentSize, width),
    };

    return (
      <OuterInputContainer {...outerInputContainerProps}>
        {hasLabel && (
          <Label htmlFor={uniqueId}>
            {label}
            {required && <RequiredMarker />}
          </Label>
        )}
        {multiline ? (
          <TextArea
            ref={textAreaRef}
            as="textarea"
            onChange={onChangeHandlerMultiline}
            {...generalInputProps}
          />
        ) : hasIcon ? (
          <InputContainer>
            {
              <StyledIcon
                icon={icon}
                iconSize={getFormInputIconSize(componentSize)}
                size={componentSize}
              />
            }
            <StyledInput
              ref={ref}
              onChange={onChangeHandler}
              type={type}
              componentSize={componentSize}
              hasIcon={hasIcon}
              {...generalInputProps}
            />
          </InputContainer>
        ) : (
          <StatefulInput
            ref={ref}
            onChange={onChangeHandler}
            type={type}
            componentSize={componentSize}
            {...generalInputProps}
          />
        )}
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

function getDefaultText(
  value?: string | number | readonly string[],
  defaultValue?: string | number | readonly string[]
): string {
  if (typeof value === 'string') {
    return value;
  }

  if (typeof defaultValue === 'string') {
    return defaultValue;
  }

  return '';
}
