import React, {
  useState,
  forwardRef,
  useId,
  useRef,
  useLayoutEffect,
} from 'react';
import { InputSize } from '../../helpers';
import CharCounter from './CharCounter';
import { TextAffixProps, TextInputProps } from './TextInput.types';
import {
  StatefulInput,
  InputContainer,
  OuterInputContainer,
} from '../../helpers';
import { MessageContainer, StyledIcon, StyledInput } from './TextInput.styles';
import { Label } from '../Typography';
import {
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { Property } from 'csstype';
import {
  InputAffixContainer,
  getDefaultText,
  getFormInputIconSize,
  renderInputMessage,
} from '../../helpers/Input';
import styled, { css } from 'styled-components';
import { textInputTokens } from './TextInput.tokens';

const defaultWidth: Property.Width<string> = '320px';
const defaultTinyWidth: Property.Width<string> = '210px';

const getWidth = (
  size: InputSize,
  width?: Property.Width<string>
): Property.Width<string> => {
  if (width) return width;
  if (size === 'tiny') {
    return defaultTinyWidth;
  }
  return defaultWidth;
};

const Affix = styled.span<TextAffixProps>`
  position: absolute;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: 1;
`;

const Prefix = styled(Affix)`
  left: 0;
  margin-left: 8px;
  padding-right: 8px;
  border-right: 1px solid ${textInputTokens.affix.border.color};

  ${({ readOnly }) =>
    readOnly &&
    css`
      margin-left: 0;
      padding-right: 1ch;
      border-right: none;
    `};
`;

const Suffix = styled(Affix)`
  right: 0;
  margin-right: 8px;
  padding-left: 8px;
  border-left: 1px solid ${textInputTokens.affix.border.color};

  ${({ readOnly }) =>
    readOnly &&
    css`
      margin-right: 0;
      padding-left: 1ch;
      border-left: none;
    `};
`;

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
      'aria-required': ariaRequired,
      'aria-describedby': ariaDescribedby,
      icon,
      prefix,
      suffix,
      ...rest
    },
    ref
  ) => {
    const [text, setText] = useState<string>(
      getDefaultText(value, defaultValue)
    );
    const prefixRef = useRef<HTMLSpanElement>(null);
    const suffixRef = useRef<HTMLSpanElement>(null);

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
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
    const hasAffix = !!(prefix || suffix);

    const characterCounterId = derivativeIdGenerator(
      uniqueId,
      'characterCounter'
    );
    const tipId = derivativeIdGenerator(uniqueId, 'tip');
    const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');

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
      'aria-required': ariaRequired,
      'aria-describedby': spaceSeparatedIdListGenerator([
        hasTip ? tipId : undefined,
        hasErrorMessage ? errorMessageId : undefined,
        maxLength && withCharacterCounter ? characterCounterId : undefined,
        ariaDescribedby,
      ]),
      'aria-invalid': hasErrorMessage ? true : undefined,
      ...rest,
    };

    const outerInputContainerProps = {
      className,
      style,
      width: getWidth(componentSize, width),
    };

    const showRequiredStyling = !!(required || ariaRequired);

    let extendedInput = null;

    if (hasIcon) {
      extendedInput = (
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
      );
    } else if (hasAffix) {
      extendedInput = (
        <InputAffixContainer>
          {prefix && (
            <Prefix readOnly={readOnly} ref={prefixRef} aria-hidden>
              {prefix}
            </Prefix>
          )}
          <StatefulInput
            ref={ref}
            onChange={onChangeHandler}
            type={type}
            componentSize={componentSize}
            prefixLength={prefixRef.current?.offsetWidth ?? 0}
            suffixLength={suffixRef.current?.offsetWidth ?? 0}
            {...generalInputProps}
          />
          {suffix && (
            <Suffix readOnly={readOnly} ref={suffixRef} aria-hidden>
              {suffix}
            </Suffix>
          )}
        </InputAffixContainer>
      );
    }

    return (
      <OuterInputContainer {...outerInputContainerProps}>
        {hasLabel && (
          <Label htmlFor={uniqueId} showRequiredStyling={showRequiredStyling}>
            {label}
          </Label>
        )}
        {extendedInput ? (
          extendedInput
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
            {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
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
