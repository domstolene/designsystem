import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { type Property } from 'csstype';
import React, {
  forwardRef,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import CharCounter from './CharCounter';
import styles from './TextInput.module.css';
import { type TextInputProps } from './TextInput.types';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { getFormInputIconSize } from '../../utils/icon';
import { StatefulInput, getDefaultText } from '../helpers';
import inputStyles from '../helpers/Input/Input.module.css';
import { Icon } from '../Icon';
import { renderInputMessage } from '../InputMessage';
import { Label } from '../Typography';

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
    ref,
  ) => {
    const [text, setText] = useState<string>(
      getDefaultText(value, defaultValue),
    );
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
    }, [prefix, suffix, readOnly]);

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
    const hasCharCounter =
      !!maxLength &&
      Number.isInteger(maxLength) &&
      maxLength > 0 &&
      withCharacterCounter;

    const characterCounterId = derivativeIdGenerator(
      uniqueId,
      'characterCounter',
    );
    const tipId = derivativeIdGenerator(uniqueId, 'tip');
    const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');

    const widthCn = componentSize === 'tiny' ? componentSize : 'medium';

    const generalInputProps = {
      id: uniqueId,
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

    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    const showRequiredStyling = !!(required || ariaRequired);

    const preffixPaddingInlineStart: Property.PaddingInlineStart | undefined =
      readOnly && prefixLength
        ? prefixLength + 'px'
        : prefixLength
          ? ddsBaseTokens.spacing.SizesDdsSpacingX1NumberPx +
            prefixLength +
            'px'
          : undefined;

    const suffixPaddingInlineEnd: Property.PaddingInlineEnd | undefined =
      readOnly && suffixLength
        ? suffixLength + 'px'
        : suffixLength
          ? ddsBaseTokens.spacing.SizesDdsSpacingX1NumberPx +
            suffixLength +
            'px'
          : undefined;

    let extendedInput = null;

    if (hasIcon) {
      extendedInput = (
        <div className={inputStyles['input-group']}>
          {
            <Icon
              icon={icon}
              iconSize={getFormInputIconSize(componentSize)}
              className={cn(styles.icon, styles[`icon--${componentSize}`])}
            />
          }
          <StatefulInput
            ref={ref}
            onChange={onChangeHandler}
            type={type}
            componentSize={componentSize}
            className={cn(styles.input, styles[`with-icon--${componentSize}`])}
            {...generalInputProps}
          />
        </div>
      );
    } else if (hasAffix) {
      extendedInput = (
        <div className={styles['affix-container']}>
          {prefix && (
            <span
              ref={prefixRef}
              aria-hidden
              className={cn(
                styles.affix,
                styles.prefix,
                readOnly && styles['prefix--readonly'],
              )}
            >
              {prefix}
            </span>
          )}
          <StatefulInput
            ref={ref}
            onChange={onChangeHandler}
            type={type}
            componentSize={componentSize}
            {...generalInputProps}
            style={{
              paddingInlineStart: preffixPaddingInlineStart,
              paddingInlineEnd: suffixPaddingInlineEnd,
            }}
          />
          {suffix && (
            <span
              ref={suffixRef}
              aria-hidden
              className={cn(
                styles.affix,
                styles.suffix,
                readOnly && styles['suffix--readonly'],
              )}
            >
              {suffix}
            </span>
          )}
        </div>
      );
    }

    return (
      <div
        className={cn(
          className,
          inputStyles.container,
          styles[`container--${widthCn}`],
        )}
        style={{ ...style, width }}
      >
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
          <div className={styles['message-container']}>
            {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
            {hasCharCounter && (
              <CharCounter
                id={characterCounterId}
                current={text.length}
                max={maxLength}
              />
            )}
          </div>
        )}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
