import { type ChangeEvent, useId } from 'react';

import { type RadioButtonProps, type RadioValue } from './RadioButton.types';
import { useRadioButtonGroup } from './RadioButtonGroupContext';
import { getBaseHTMLProps } from '../../../types';
import {
  readOnlyChangeHandler,
  readOnlyClickHandler,
  readOnlyKeyDownHandler,
} from '../../../utils';
import { HiddenInput } from '../../helpers';
import focusStyles from '../../helpers/styling/focus.module.css';
import { Label, SelectionControl } from '../SelectionControl.styles';

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
  size,
  style,
  ...rest
}: RadioButtonProps) => {
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
  const controlSize = size || radioButtonGroup?.size || 'medium';

  return (
    <Label
      disabled={isDisabled}
      style={style}
      className={className}
      hasText={hasLabel || hasChildren}
      htmlFor={uniqueId}
      controlType="radio"
      size={controlSize}
    >
      <HiddenInput
        {...getBaseHTMLProps(uniqueId, undefined, undefined, htmlProps, rest)}
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
        className={focusStyles['focusable-sibling']}
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
      {hasChildren ? children : hasLabel ? <span>{label}</span> : null}
    </Label>
  );
};

RadioButton.displayName = 'RadioButton';
