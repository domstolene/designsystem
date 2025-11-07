import { useEffect, useId, useRef, useState } from 'react';
import type { ChangeEvent, ComponentPropsWithRef } from 'react';

import styles from './NativeSelect.module.css';
import { useCombinedRef } from '../../../hooks';
import { useTranslation } from '../../../i18n';
import { commonTexts } from '../../../i18n/commonTexts';
import {
  cn,
  derivativeIdGenerator,
  getFormInputIconSize,
  readOnlyKeyDownHandler,
  readOnlyMouseDownHandler,
  spaceSeparatedIdListGenerator,
} from '../../../utils';
import { createClearChangeEvent } from '../../../utils/createClearChangeEvent';
import { ClearButton } from '../../helpers/ClearButton';
import {
  type CommonInputProps,
  type InputIconProps,
  type InputProps,
  getInputWidth,
} from '../../helpers/Input';
import inputStyles from '../../helpers/Input/Input.module.css';
import { focusable } from '../../helpers/styling/focus.module.css';
import { scrollbar } from '../../helpers/styling/utilStyles.module.css';
import utilStyles from '../../helpers/styling/utilStyles.module.css';
import { Icon } from '../../Icon';
import { ChevronDownIcon } from '../../Icon/icons';
import { renderInputMessage } from '../../InputMessage';
import { Box } from '../../layout';
import { renderLabel } from '../../Typography/Label/Label.utils';
import typographyStyles from '../../Typography/typographyStyles.module.css';

export type NativeSelectProps = {
  /** Om brukeren kan fjerne verdien med en tømmeknapp. */
  clearable?: boolean;
  /** Implementerer `readOnly` oppførsel etter standard for `<input>` og setter `readOnly` styling. */
  readOnly?: InputProps['readOnly'];
} & CommonInputProps &
  Pick<InputProps, 'componentSize'> &
  InputIconProps &
  ComponentPropsWithRef<'select'>;

export const NativeSelect = ({
  ref,
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
  onKeyDown,
  onMouseDown,
  clearable,
  afterLabelContent,
  onChange,
  icon,
  ...rest
}: NativeSelectProps) => {
  const { t } = useTranslation();
  const selectRef = useRef<HTMLSelectElement>(null);

  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    const selectedIndex = selectRef.current?.selectedIndex ?? -1;
    setHasValue(selectedIndex !== 0);
  }, []);

  useEffect(() => {
    if (clearable) {
      const firstOption = selectRef.current?.options[0];
      if (firstOption?.value !== '') {
        throw new Error(
          `Invalid configuration: The first <option> in <NativeSelect> must have value="" to support the clearable feature. 
      Please ensure the empty option is defined as:
      <option value=""></option>`,
        );
      }
    }
  }, [clearable]);

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-native-select`;

  const hasErrorMessage = !!errorMessage;
  const hasTip = !!tip;

  const tipId = derivativeIdGenerator(uniqueId, 'tip');
  const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');

  const showRequiredStyling = !!(required || ariaRequired);

  const inputWidth = getInputWidth(
    width,
    componentSize === 'xsmall' && 'var(--dds-input-default-width-xsmall)',
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setHasValue(e.target.selectedIndex !== 0);
    onChange?.(e);
  };

  const clearInput = () => {
    const clearChangeEvent =
      createClearChangeEvent<HTMLSelectElement>(uniqueId);
    setHasValue(false);
    onChange?.(clearChangeEvent);
  };

  const iconSize = componentSize === 'medium' ? 'medium' : 'small';
  const showClearButton = clearable && hasValue && !readOnly && !rest.disabled;
  const hasIcon = !!icon;

  return (
    <div className={className} style={style}>
      {renderLabel({
        label,
        htmlFor: uniqueId,
        showRequiredStyling,
        readOnly,
        afterLabelContent,
      })}
      <Box position="relative" width={inputWidth}>
        {hasIcon && (
          <Icon
            icon={icon}
            className={cn(
              inputStyles['input-group__absolute-el'],
              inputStyles[`input-group__absolute-el--${componentSize}`],
            )}
            iconSize={getFormInputIconSize(componentSize)}
          />
        )}
        <select
          ref={useCombinedRef(ref, selectRef)}
          id={uniqueId}
          multiple={multiple}
          className={cn(
            styles.select,
            readOnly && styles['select--readonly'],
            inputStyles.input,
            inputStyles[`input--${componentSize}`],
            hasIcon && inputStyles[`input-with-icon--${componentSize}`],
            styles[`select--${componentSize}`],
            scrollbar,
            focusable,
            typographyStyles[`body-${componentSize}`],
            hasErrorMessage && inputStyles['input--stateful-danger'],
            multiple && styles['select--multiple'],
            hasValue &&
              clearable &&
              styles[`select--with-clear-button-${iconSize}`],
          )}
          onChange={handleChange}
          aria-readonly={readOnly}
          aria-invalid={hasErrorMessage}
          aria-describedby={spaceSeparatedIdListGenerator([
            hasTip ? tipId : undefined,
            hasErrorMessage ? errorMessageId : undefined,
            ariaDescribedby,
          ])}
          required={required}
          onKeyDown={readOnlyKeyDownHandler('select', readOnly, onKeyDown)}
          onMouseDown={readOnlyMouseDownHandler(readOnly, onMouseDown)}
          {...rest}
        >
          {children}
        </select>
        {showClearButton && (
          <ClearButton
            aria-label={t(commonTexts.clearSelect)}
            onClick={clearInput}
            size={iconSize}
            className={styles[`clear-button--${iconSize}`]}
          />
        )}
        {!multiple && (
          <Icon
            icon={ChevronDownIcon}
            iconSize={iconSize}
            className={cn(utilStyles['center-absolute-y'], styles.icon)}
          />
        )}
      </Box>
      {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
    </div>
  );
};

export type NativeSelectPlaceholderProps = ComponentPropsWithRef<'option'>;

export const NativeSelectPlaceholder = ({
  children = '-- Velg fra listen --',
  value,
  ...rest
}: NativeSelectPlaceholderProps) => (
  <option value={value ?? ''} selected {...rest}>
    {children}
  </option>
);

NativeSelectPlaceholder.displayName = 'NativeSelectPlaceholder';
