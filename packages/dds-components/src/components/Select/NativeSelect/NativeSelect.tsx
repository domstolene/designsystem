import { type Properties } from 'csstype';
import { forwardRef, useId } from 'react';
import type { ComponentProps } from 'react';

import styles from './NativeSelect.module.css';
import {
  cn,
  derivativeIdGenerator,
  readOnlyKeyDownHandler,
  readOnlyMouseDownHandler,
  spaceSeparatedIdListGenerator,
} from '../../../utils';
import {
  type CommonInputProps,
  type InputProps,
  inputTypographyTypes,
} from '../../helpers';
import inputStyles from '../../helpers/Input/Input.module.css';
import { focusable } from '../../helpers/styling/focus.module.css';
import { scrollbar } from '../../helpers/styling/utilStyles.module.css';
import { Icon } from '../../Icon';
import { ChevronDownIcon } from '../../Icon/icons';
import { renderInputMessage } from '../../InputMessage';
import { Label, getTypographyCn } from '../../Typography';
import typographyStyles from '../../Typography/typographyStyles.module.css';

export type NativeSelectProps = CommonInputProps &
  Pick<InputProps, 'componentSize' | 'readOnly'> &
  ComponentProps<'select'>;

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (props, ref) => {
    const {
      id,
      children,
      componentSize = 'medium',
      label,
      multiple,
      readOnly,
      errorMessage,
      tip,
      required,
      'aria-required': ariaRequired,
      'aria-describedby': ariaDescribedby,
      width,
      className,
      style,
      ...rest
    } = props;

    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-native-select`;

    const hasErrorMessage = !!errorMessage;
    const hasTip = !!tip;
    const hasLabel = !!label;

    const tipId = derivativeIdGenerator(uniqueId, 'tip');
    const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');

    const showRequiredStyling = !!(required || ariaRequired);

    const styleVariables: Properties = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-native-select-width' as any]: width
        ? width
        : componentSize === 'xsmall'
          ? '210px'
          : 'var(--dds-input-default-width)',
    };

    return (
      <div>
        {hasLabel && (
          <Label
            className={inputStyles.label}
            htmlFor={uniqueId}
            showRequiredStyling={showRequiredStyling}
            readOnly={readOnly}
          >
            {label}
          </Label>
        )}
        <div className={styles.container}>
          <select
            ref={ref}
            id={uniqueId}
            multiple={multiple}
            className={cn(
              className,
              styles.select,
              readOnly && styles['select--readonly'],
              inputStyles.input,
              inputStyles[`input--${componentSize}`],
              styles[`select--${componentSize}`],
              scrollbar,
              focusable,
              typographyStyles[
                getTypographyCn(inputTypographyTypes[componentSize])
              ],
              hasErrorMessage && inputStyles['input--stateful-danger'],
              multiple && styles['select--multiple'],
            )}
            style={{ ...style, ...styleVariables }}
            aria-readonly={readOnly}
            aria-invalid={hasErrorMessage}
            aria-describedby={spaceSeparatedIdListGenerator([
              hasTip ? tipId : undefined,
              hasErrorMessage ? errorMessageId : undefined,
              ariaDescribedby,
            ])}
            required={required}
            onKeyDown={readOnlyKeyDownHandler(
              'select',
              readOnly,
              props.onKeyDown,
            )}
            onMouseDown={readOnlyMouseDownHandler(readOnly, props.onMouseDown)}
            {...rest}
          >
            {children}
          </select>
          {!multiple && (
            <Icon
              icon={ChevronDownIcon}
              iconSize={componentSize === 'xsmall' ? 'small' : 'medium'}
              className={styles.icon}
            />
          )}
        </div>
        {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
      </div>
    );
  },
);

export type NativeSelectPlaceholderProps = ComponentProps<'option'>;

export const NativeSelectPlaceholder = forwardRef<
  HTMLOptionElement,
  NativeSelectPlaceholderProps
>((props, ref) => {
  const { children = '-- Velg fra listen --', value, ...rest } = props;
  return (
    <option ref={ref} value={value ?? ''} selected {...rest}>
      {children}
    </option>
  );
});

NativeSelectPlaceholder.displayName = 'NativeSelectPlaceholder';
