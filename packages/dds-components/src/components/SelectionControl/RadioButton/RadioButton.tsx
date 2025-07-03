import { type ChangeEvent, useId } from 'react';

import { type RadioButtonProps, type RadioValue } from './RadioButton.types';
import { useRadioButtonGroup } from './RadioButtonGroupContext';
import { getBaseHTMLProps } from '../../../types';
import {
  cn,
  readOnlyChangeHandler,
  readOnlyClickHandler,
  readOnlyKeyDownHandler,
} from '../../../utils';
import focusStyles from '../../helpers/styling/focus.module.css';
import utilStyles from '../../helpers/styling/utilStyles.module.css';
import { Typography } from '../../Typography';
import { Label, SelectionControl } from '../SelectionControl.styles';
import { selectionControlTypographyProps } from '../SelectionControl.utils';

const getIsChecked = ({
  value,
  groupValue,
  checked,
}: {
  value: RadioValue;
  groupValue: RadioValue;
  checked: boolean | undefined;
}): boolean => {
  if (checked !== undefined) return checked;
  if (typeof value !== 'undefined' && value !== null && groupValue !== null) {
    if (typeof value === 'number') {
      return value === Number(groupValue);
    }
    return value === groupValue;
  }
  return !!value;
};

export const RadioButton = ({
  id,
  name,
  label,
  disabled = false,
  readOnly = false,
  error = false,
  checked,
  value,
  children,
  required = false,
  onChange,
  'aria-describedby': ariaDescribedby,
  className,
  htmlProps = {},
  ...rest
}: RadioButtonProps) => {
  const { className: htmlPropsClassName, style, ...restHtmlProps } = htmlProps;

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-radioButton`;
  const hasChildren = !!children;
  const hasLabel = !!label;

  const radioButtonGroup = useRadioButtonGroup();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    radioButtonGroup?.onChange?.(event, event.target.value);
  };

  const describedByIds = [];
  if (radioButtonGroup?.errorMessageId)
    describedByIds.push(radioButtonGroup?.errorMessageId);
  if (ariaDescribedby) describedByIds.push(ariaDescribedby);

  const isReadOnly = readOnly || radioButtonGroup?.readOnly;
  const isDisabled = disabled || radioButtonGroup?.disabled;
  const hasError = error || radioButtonGroup?.error;
  const isChecked = getIsChecked({
    value,
    groupValue: radioButtonGroup?.value,
    checked,
  });

  return (
    <Label
      disabled={isDisabled}
      style={style}
      className={cn(className, htmlPropsClassName)}
      hasText={hasLabel || hasChildren}
      htmlFor={uniqueId}
      controlType="radio"
    >
      <input
        {...getBaseHTMLProps(uniqueId, restHtmlProps, rest)}
        type="radio"
        name={name ?? radioButtonGroup?.name}
        disabled={isDisabled}
        required={required || !!radioButtonGroup?.required}
        checked={isChecked}
        onChange={readOnlyChangeHandler(isReadOnly, handleChange)}
        value={value}
        aria-describedby={
          describedByIds.length > 0 ? describedByIds.join(' ') : undefined
        }
        aria-invalid={hasError ? true : undefined}
        aria-readonly={isReadOnly}
        className={cn(
          utilStyles['hide-input'],
          focusStyles['focusable-sibling'],
        )}
        onKeyDown={readOnlyKeyDownHandler(
          'selectionControl',
          isReadOnly,
          htmlProps.onKeyDown,
        )}
        onClick={readOnlyClickHandler(isReadOnly, htmlProps.onClick)}
      />
      <SelectionControl
        controlType="radio"
        className={focusStyles['focus-styled-sibling']}
      />
      {hasChildren ? (
        children
      ) : hasLabel ? (
        <Typography {...selectionControlTypographyProps}>{label}</Typography>
      ) : null}
    </Label>
  );
};

RadioButton.displayName = 'RadioButton';
