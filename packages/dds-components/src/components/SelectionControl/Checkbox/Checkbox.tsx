import { useCallback, useId } from 'react';

import { useCombinedRef } from '../../../hooks';
import { getBaseHTMLProps } from '../../../types';
import {
  readOnlyChangeHandler,
  readOnlyClickHandler,
  readOnlyKeyDownHandler,
  spaceSeparatedIdListGenerator,
} from '../../../utils';
import { HiddenInput } from '../../helpers';
import focusStyles from '../../helpers/styling/focus.module.css';
import { Label, SelectionControl } from '../SelectionControl.styles';
import { type CheckboxProps } from './Checkbox.types';
import { useCheckboxGroup } from './CheckboxGroupContext';

export const Checkbox = ({
  id,
  ref,
  name,
  label,
  error = false,
  disabled,
  readOnly,
  indeterminate,
  'aria-describedby': ariaDescribedby,
  className,
  htmlProps = {},
  style,
  children,
  size,
  onChange,
  ...rest
}: CheckboxProps) => {
  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-checkbox`;
  const checkboxGroup = useCheckboxGroup();

  const hasLabel = !!label;
  const hasChildren = !!children;

  const isReadOnly = readOnly || checkboxGroup?.readOnly;
  const hasError = error || checkboxGroup?.error;
  const isDisabled = disabled || checkboxGroup?.disabled;
  const controlSize = size || checkboxGroup?.size || 'medium';

  const indeterminateRef = useCallback(
    (el: HTMLInputElement | null) => {
      if (el) {
        el.indeterminate = !!indeterminate;
      }
    },
    [indeterminate],
  );

  const combinedRef = useCombinedRef(indeterminateRef, ref);

  return (
    <Label
      disabled={isDisabled}
      htmlFor={uniqueId}
      hasText={hasLabel || hasChildren}
      controlType="checkbox"
      className={className}
      style={style}
      size={controlSize}
    >
      <HiddenInput
        ref={combinedRef}
        {...getBaseHTMLProps(uniqueId, undefined, undefined, htmlProps, rest)}
        name={name}
        disabled={isDisabled}
        aria-describedby={spaceSeparatedIdListGenerator([
          checkboxGroup?.tipId,
          checkboxGroup?.errorMessageId,
          ariaDescribedby,
        ])}
        aria-invalid={hasError ? true : undefined}
        aria-labelledby={checkboxGroup?.uniqueGroupId}
        aria-readonly={isReadOnly}
        type="checkbox"
        className={focusStyles['focusable-sibling']}
        onKeyDown={readOnlyKeyDownHandler(
          'selectionControl',
          isReadOnly,
          htmlProps.onKeyDown,
        )}
        onClick={readOnlyClickHandler(isReadOnly, htmlProps.onClick)}
        onChange={
          onChange ? readOnlyChangeHandler(isReadOnly, onChange) : undefined
        }
      />
      <SelectionControl
        controlType="checkbox"
        className={focusStyles['focus-styled-sibling']}
      />
      {hasChildren ? children : hasLabel ? <span>{label}</span> : null}
    </Label>
  );
};

Checkbox.displayName = 'Checkbox';
