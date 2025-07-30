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
import { HiddenInput } from '../../helpers';
import focusStyles from '../../helpers/styling/focus.module.css';
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
  children,
  ...rest
}: CheckboxProps) => {
  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-checkbox`;
  const checkboxGroup = useCheckboxGroup();

  const hasLabel = !!label;
  const hasChildren = !!children;

  const { style, className: htmlPropsClassName, ...restHtmlProps } = htmlProps;

  const isReadOnly = readOnly || checkboxGroup?.readOnly;
  const hasError = error || checkboxGroup?.error;
  const isDisabled = disabled || checkboxGroup?.disabled;

  return (
    <Label
      disabled={isDisabled}
      htmlFor={uniqueId}
      hasText={hasLabel || hasChildren}
      controlType="checkbox"
      className={cn(className, htmlPropsClassName)}
      style={style}
    >
      <HiddenInput
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
        aria-checked={indeterminate ? 'mixed' : undefined}
        aria-readonly={isReadOnly}
        type="checkbox"
        data-indeterminate={indeterminate}
        className={focusStyles['focusable-sibling']}
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
      {hasChildren ? (
        children
      ) : hasLabel ? (
        <Typography {...selectionControlTypographyProps}>{label}</Typography>
      ) : null}
    </Label>
  );
};

Checkbox.displayName = 'Checkbox';
