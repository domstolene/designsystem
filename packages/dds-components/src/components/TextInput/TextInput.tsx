import { type Properties, type Property } from 'csstype';
import React, {
  forwardRef,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import styles from './TextInput.module.css';
import { type TextInputProps } from './TextInput.types';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { getFormInputIconSize } from '../../utils/icon';
import { StatefulInput, getDefaultText, renderCharCounter } from '../helpers';
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

    const styleVariables: Properties = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-textinput-width' as any]: width
        ? width
        : componentSize === 'xsmall'
          ? '210px'
          : 'var(--dds-input-default-width)',
    };

    const generalInputProps = {
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
        <div
          className={cn(styles['input-width'], inputStyles['input-group'])}
          style={styleVariables}
        >
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
            ref={ref}
            onChange={onChangeHandler}
            type={type}
            componentSize={componentSize}
            className={cn(
              styles.input,
              styles[`with-icon--${componentSize}`],
              styles['input--extended'],
            )}
            {...generalInputProps}
          />
        </div>
      );
    } else if (hasAffix) {
      extendedInput = (
        <div
          className={cn(styles['affix-container'], styles['input-width'])}
          style={styleVariables}
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
            ref={ref}
            onChange={onChangeHandler}
            type={type}
            componentSize={componentSize}
            {...generalInputProps}
            style={{
              paddingInlineStart: preffixPaddingInlineStart,
              paddingInlineEnd: suffixPaddingInlineEnd,
            }}
            className={styles['input--extended']}
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
        </div>
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
          <Label
            htmlFor={uniqueId}
            showRequiredStyling={showRequiredStyling}
            className={inputStyles.label}
            readOnly={readOnly}
          >
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
            style={styleVariables}
            className={styles['input-width']}
          />
        )}
        {hasMessage && (
          <div className={styles['message-container']}>
            {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
            {renderCharCounter(
              characterCounterId,
              withCharacterCounter,
              text.length,
              maxLength,
            )}
          </div>
        )}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
