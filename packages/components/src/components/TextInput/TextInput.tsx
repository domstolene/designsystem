import React, { useState, forwardRef, useId } from 'react';
import { InputSize } from '../../helpers';
import CharCounter from './CharCounter';
import { TextInputProps } from './TextInput.types';
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
  getDefaultText,
  getFormInputIconSize,
  renderInputMessage,
} from '../../helpers/Input';

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
      ...rest
    },
    ref
  ) => {
    const [text, setText] = useState<string>(
      getDefaultText(value, defaultValue)
    );

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

    return (
      <OuterInputContainer {...outerInputContainerProps}>
        {hasLabel && (
          <Label htmlFor={uniqueId} showRequiredStyling={showRequiredStyling}>
            {label}
          </Label>
        )}
        {hasIcon ? (
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