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
import styled from 'styled-components';
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

const Prefix = styled.span<TextAffixProps>`
  position: absolute;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: 1;
  margin-left: 8px;
  padding-right: 8px;
  border-right: ${({ readOnly }) =>
    !readOnly && `1px solid ${textInputTokens.affix.border.color}`};
`;

const Suffix = styled.span<TextAffixProps>`
  position: absolute;
  height: 100%;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: 1;
  margin-right: 8px;
  padding-left: 8px;
  border-left: ${({ readOnly }) =>
    !readOnly && `1px solid ${textInputTokens.affix.border.color}`};
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
    const [prefixLength, setPrefixLength] = useState<number>(0);
    const [suffixLength, setSuffixLength] = useState<number>(0);

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

    useLayoutEffect(() => {
      if (prefixRef.current) {
        setPrefixLength(prefixRef.current.offsetWidth);
      }
      if (suffixRef.current) {
        setSuffixLength(suffixRef.current.offsetWidth);
      }
    }, []);

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
            prefixLength={prefixLength}
            suffixLength={suffixLength}
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
