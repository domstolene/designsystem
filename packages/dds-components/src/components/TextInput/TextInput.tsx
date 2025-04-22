import { type Property } from 'csstype';
import React, { useId, useLayoutEffect, useRef, useState } from 'react';

import styles from './TextInput.module.css';
import { type TextInputProps } from './TextInput.types';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { getFormInputIconSize } from '../../utils/icon';
import {
  StatefulInput,
  getDefaultText,
  getInputWidth,
  renderCharCounter,
} from '../helpers';
import inputStyles from '../helpers/Input/Input.module.css';
import { Icon } from '../Icon';
import { renderInputMessage } from '../InputMessage';
import { Box } from '../layout';
import { Label } from '../Typography';

export const TextInput = ({
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
  ref,
  ...rest
}: TextInputProps) => {
  const [text, setText] = useState<string>(getDefaultText(value, defaultValue));
  const prefixRef = useRef<HTMLSpanElement>(null);
  const suffixRef = useRef<HTMLSpanElement>(null);
  const [prefixLength, setPrefixLength] = useState(0);
  const [suffixLength, setSuffixLength] = useState(0);

  useLayoutEffect(() => {
    if (prefixRef.current) {
      setPrefixLength(prefixRef.current.offsetWidth);
    }
    if (suffixRef.current) {
      setSuffixLength(suffixRef.current.offsetWidth);
    }
  }, [prefix, suffix]);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>,
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
  const hasAffix = !!(prefix ?? suffix);

  const characterCounterId = derivativeIdGenerator(
    uniqueId,
    'characterCounter',
  );
  const tipId = derivativeIdGenerator(uniqueId, 'tip');
  const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');

  const inputWidth = getInputWidth(
    width,
    componentSize === 'xsmall' && 'var(--dds-input-default-width-xsmall)',
  );

  const generalInputProps = {
    ref,
    type,
    onChange: onChangeHandler,
    componentSize,
    id: uniqueId,
    hasErrorMessage,
    required,
    disabled,
    readOnly,
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

  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const showRequiredStyling = !!(required || ariaRequired);

  const preffixPaddingInlineStart: Property.PaddingInlineStart | undefined =
    prefixLength
      ? `calc(var(--dds-spacing-x1) + ${prefixLength}px)`
      : undefined;

  const suffixPaddingInlineEnd: Property.PaddingInlineEnd | undefined =
    suffixLength
      ? `calc(var(--dds-spacing-x1) + ${suffixLength}px)`
      : undefined;

  let extendedInput = null;

  if (hasIcon) {
    extendedInput = (
      <Box className={inputStyles['input-group']} width={inputWidth}>
        {
          <Icon
            icon={icon}
            iconSize={getFormInputIconSize(componentSize)}
            className={cn(
              inputStyles['input-group__absolute-element'],
              styles[`icon--${componentSize}`],
            )}
          />
        }
        <StatefulInput
          className={cn(
            styles.input,
            styles[`with-icon--${componentSize}`],
            styles['input--extended'],
          )}
          {...generalInputProps}
        />
      </Box>
    );
  } else if (hasAffix) {
    extendedInput = (
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        width={inputWidth}
      >
        {prefix && (
          <span
            ref={prefixRef}
            aria-hidden
            className={cn(
              styles.affix,
              styles.prefix,
              disabled && styles['affix--disabled'],
            )}
          >
            {prefix}
          </span>
        )}
        <StatefulInput
          style={{
            paddingInlineStart: preffixPaddingInlineStart,
            paddingInlineEnd: suffixPaddingInlineEnd,
          }}
          className={styles['input--extended']}
          {...generalInputProps}
        />
        {suffix && (
          <span
            ref={suffixRef}
            aria-hidden
            className={cn(
              styles.affix,
              styles.suffix,
              disabled && styles['affix--disabled'],
            )}
          >
            {suffix}
          </span>
        )}
      </Box>
    );
  }

  return (
    <div
      className={cn(
        className,
        inputStyles.container,
        styles.container,
        readOnly && styles['container--readonly'],
        disabled && styles['container--disabled'],
      )}
      style={style}
    >
      {hasLabel && (
        <Box
          as={Label}
          display="block"
          htmlFor={uniqueId}
          showRequiredStyling={showRequiredStyling}
          readOnly={readOnly}
        >
          {label}
        </Box>
      )}
      {extendedInput ? (
        extendedInput
      ) : (
        <Box as={StatefulInput} width={inputWidth} {...generalInputProps} />
      )}
      {hasMessage && (
        <Box display="flex" justifyContent="space-between" gap="x0.5">
          {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
          {renderCharCounter(
            characterCounterId,
            withCharacterCounter,
            text.length,
            maxLength,
          )}
        </Box>
      )}
    </div>
  );
};

TextInput.displayName = 'TextInput';
