import { useId } from 'react';

import { type CheckboxProps } from './Checkbox.types';
import { useCheckboxGroup } from './CheckboxGroupContext';
import { getBaseHTMLProps } from '../../../types';
import {
  cn,
  readOnlyClickHandler,
  readOnlyKeyDownHandler,
  spaceSeparatedIdListGenerator,
} from '../../../utils';
import focusStyles from '../../helpers/styling/focus.module.css';
import utilStyles from '../../helpers/styling/utilStyles.module.css';
import { Typography } from '../../Typography';
import { Label, SelectionControl } from '../SelectionControl.styles';
import { selectionControlTypographyProps } from '../SelectionControl.utils';

export const Checkbox = ({
  id,
  name,
  label,
  error = false,
  disabled,
  readOnly,
  indeterminate,
  'aria-describedby': ariaDescribedby,
  className,
  htmlProps = {},
  ...rest
}: CheckboxProps) => {
  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-checkbox`;
  const checkboxGroup = useCheckboxGroup();

  const hasLabel = !!label;

  const { style, className: htmlPropsClassName, ...restHtmlProps } = htmlProps;

  type AriaChecked = 'mixed' | boolean | undefined;

  const isReadOnly = readOnly || checkboxGroup?.readOnly;
  const hasError = error || checkboxGroup?.error;
  const isDisabled = disabled || checkboxGroup?.disabled;

  return (
    <Label
      hasError={hasError}
      disabled={isDisabled}
      readOnly={isReadOnly}
      htmlFor={uniqueId}
      hasText={hasLabel}
      controlType="checkbox"
      className={cn(className, htmlPropsClassName)}
      style={style}
    >
      <input
        {...getBaseHTMLProps(uniqueId, restHtmlProps, rest)}
        name={name}
        disabled={isDisabled}
        aria-describedby={spaceSeparatedIdListGenerator([
          checkboxGroup?.tipId,
          checkboxGroup?.errorMessageId,
          ariaDescribedby,
        ])}
        aria-invalid={hasError ? true : undefined}
        aria-labelledby={checkboxGroup?.uniqueGroupId}
        aria-checked={indeterminate ? ('mixed' as AriaChecked) : undefined}
        aria-readonly={isReadOnly}
        type="checkbox"
        data-indeterminate={indeterminate}
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
        controlType="checkbox"
        className={focusStyles['focus-styled-sibling']}
      />
      {hasLabel && (
        <Typography {...selectionControlTypographyProps}>{label}</Typography>
      )}
    </Label>
  );
};

Checkbox.displayName = 'Checkbox';
