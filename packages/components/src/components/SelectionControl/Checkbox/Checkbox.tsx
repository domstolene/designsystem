import { forwardRef, useId } from 'react';

import { type CheckboxProps } from './Checkbox.types';
import { useCheckboxGroup } from './CheckboxGroupContext';
import { getBaseHTMLProps } from '../../../types';
import { cn, spaceSeparatedIdListGenerator } from '../../../utils';
import focusStyles from '../../helpers/styling/focus.module.css';
import utilStyles from '../../helpers/styling/utilStyles.module.css';
import { Typography } from '../../Typography';
import { Label, SelectionControl } from '../SelectionControl.styles';
import { selectionControlTypographyProps } from '../SelectionControl.utils';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
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
    } = props;

    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-checkbox`;
    const checkboxGroup = useCheckboxGroup();

    const hasLabel = !!label;

    const {
      style,
      className: htmlPropsClassName,
      ...restHtmlProps
    } = htmlProps;

    type AriaChecked = 'mixed' | boolean | undefined;

    return (
      <Label
        hasError={error || checkboxGroup?.error}
        disabled={disabled || checkboxGroup?.disabled}
        readOnly={readOnly || checkboxGroup?.readOnly}
        htmlFor={uniqueId}
        hasText={hasLabel}
        controlType="checkbox"
        className={cn(className, htmlPropsClassName)}
        style={style}
      >
        <input
          {...getBaseHTMLProps(uniqueId, restHtmlProps, rest)}
          ref={ref}
          name={name}
          disabled={
            disabled ||
            readOnly ||
            !!checkboxGroup?.disabled ||
            !!checkboxGroup?.readOnly
          }
          aria-describedby={spaceSeparatedIdListGenerator([
            checkboxGroup?.tipId,
            checkboxGroup?.errorMessageId,
            ariaDescribedby,
          ])}
          aria-invalid={error || checkboxGroup?.error ? true : undefined}
          aria-labelledby={checkboxGroup?.uniqueGroupId}
          aria-checked={indeterminate ? ('mixed' as AriaChecked) : undefined}
          aria-readonly={readOnly}
          type="checkbox"
          data-indeterminate={indeterminate}
          className={cn(
            utilStyles['hide-input'],
            focusStyles['focusable-sibling'],
          )}
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
  },
);

Checkbox.displayName = 'Checkbox';
