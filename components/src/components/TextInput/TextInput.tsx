import React, { useState, useEffect, useRef, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { inputTokens as tokens } from './TextInput.tokens';
import RequiredMarker from '../../helpers/RequiredMarker';
import InputMessage from '../../helpers/InputMessage/InputMessage';
import { inputFieldStylingBase } from '../../helpers/inputFieldStylingBase';
import scrollbarStyling from '../../helpers/scrollbarStyling';
import CharCounter from './CharCounter';
import { Typography } from '../Typography';
import { TextInputProps } from './TextInput.types';

type GeneralInputProps = Pick<
  TextInputProps,
  'readOnly' | 'errorMessage' | 'label' | 'disabled'
>;

const InputStyling = ({
  readOnly,
  errorMessage,
  label,
  disabled
}: GeneralInputProps) => {
  return css`
    ${inputFieldStylingBase}
    ${tokens.base}
    box-sizing: border-box;
    ${label
      ? css`
          ${tokens.withLabel.base}
        `
      : css`
          ${tokens.noLabel.base}
        `};

    &:hover:enabled ~ label {
      ${tokens.label.hover.base}
    }
    &:focus:enabled ~ label {
      ${tokens.label.focus.base}
    }

    ${disabled &&
    css`
      cursor: not-allowed;
      ${tokens.disabled.base}
    `}
    ${errorMessage &&
    css`
      ${tokens.error.base}
      &:hover:enabled {
        ${tokens.error.hover.base}
      }
      &:focus:enabled,
      &:active:enabled {
        ${tokens.error.focus.base}
      }
    `}
        ${readOnly &&
    css`
      cursor: default;
      ${tokens.readOnly.base}
    `}
  `;
};

type LabelProps = Pick<TextInputProps, 'multiline' | 'disabled' | 'readOnly'>;

const Label = styled(Typography)<LabelProps>`
  position: absolute;
  top: 0;
  left: 0;
  transition: color 0.2s, background-color 0.2s;
  ${tokens.label.base}
  ${({ multiline }) =>
    multiline &&
    css`
      margin: 1px;
      width: calc(100% - 20px);
      ${tokens.label.multiline.base}
    `}
    ${({ disabled, multiline }) =>
    disabled &&
    multiline &&
    css`
      background-color: ${tokens.disabled.base.backgroundColor};
    `}
    ${({ readOnly, multiline }) =>
    readOnly &&
    multiline &&
    css`
      background-color: ${tokens.readOnly.base.backgroundColor};
    `}
`;

type InputFieldWrapperProps = Pick<TextInputProps, 'width'>;

const InputFieldWrapper = styled.div<InputFieldWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
`;

type InputFieldContainerProps = Pick<TextInputProps, 'multiline' | 'label'>;

const InputFieldContainer = styled.div<InputFieldContainerProps>`
  position: relative;
  width: 100%;
  ${({ multiline }) =>
    multiline &&
    css`
      display: inline-block;
    `}
  height: ${({ multiline, label }) => {
    if (multiline) {
      if (label) {
        return tokens.container.multiline.withLabel.height;
      }
      return tokens.container.multiline.noLabel.height;
    }
  }};
`;

const Input = styled.input<GeneralInputProps>`
  ${({ label, disabled, readOnly, errorMessage }) =>
    InputStyling({ readOnly, errorMessage, label, disabled })}
`;

const TextArea = styled.textarea<GeneralInputProps>`
  ${({ label, disabled, readOnly, errorMessage }) =>
    InputStyling({ readOnly, errorMessage, label, disabled })}
  resize: vertical;
  height: auto;
  ${scrollbarStyling}
  min-height: ${({ label }) =>
    label
      ? tokens.container.multiline.withLabel.height
      : tokens.container.multiline.noLabel.height};
  ${tokens.multiline.base}
  ${({ label }) =>
    label
      ? css`
          ${tokens.multiline.withLabel.base}
        `
      : css`
          ${tokens.multiline.noLabel.base}
        `}

   &:hover:enabled ~ label {
    background-color: ${({ errorMessage }) =>
      errorMessage
        ? tokens.error.hover.base.backgroundColor
        : tokens.general.input.hover.backgroundColor};
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
      disabled: disabled || readOnly,
      readOnly,
      maxLength,
      ...rest
    };

    const wrapperProps = {
      className,
      style,
      width
    };

    const labelProps = {
      multiline,
      disabled,
      readOnly
    };

    return (
      <InputFieldWrapper {...wrapperProps}>
        <InputFieldContainer
          style={multiline ? { minHeight: parentHeight } : {}}
          multiline={multiline}
          label={label}
        >
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
        </InputFieldContainer>
        <FlexContainer>
          {errorMessage ? (
            <InputMessage message={errorMessage} messageType={'error'} />
          ) : tip ? (
            <InputMessage message={tip} messageType={'tip'} />
          ) : (
            ''
          )}
          {maxLength && Number.isInteger(maxLength) && maxLength > 0 ? (
            <CharCounter current={text.length} max={maxLength} />
          ) : (
            ''
          )}
        </FlexContainer>
      </InputFieldWrapper>
    );
  }
);
