import { type ChangeEvent, forwardRef, useId } from 'react';

import { type RadioButtonProps } from './RadioButton.types';
import {
  type RadioButtonGroupContextProps,
  useRadioButtonGroup,
} from './RadioButtonGroupContext';
import { type Nullable, getBaseHTMLProps } from '../../../types';
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

const isValueEqualToGroupValueOrFalsy = (
  value: unknown,
  group: Nullable<RadioButtonGroupContextProps>,
): boolean => {
  if (typeof value !== 'undefined' && value !== null && group) {
    if (typeof value === 'number') {
      return value === Number(group?.value);
    }
    return value === group?.value;
  }
  return !!value;
};

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (props, ref) => {
    const {
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
    } = props;

    const {
      className: htmlPropsClassName,
      style,
      ...restHtmlProps
    } = htmlProps;

    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-radioButton`;
    const hasLabel = !!label;

    const radioButtonGroup = useRadioButtonGroup();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event);
      radioButtonGroup?.onChange(event);
    };

    const describedByIds = [];
    if (radioButtonGroup?.errorMessageId)
      describedByIds.push(radioButtonGroup?.errorMessageId);
    if (ariaDescribedby) describedByIds.push(ariaDescribedby);

    const isReadOnly = readOnly || radioButtonGroup?.readOnly;
    const isDisabled = disabled || radioButtonGroup?.disabled;
    const hasError = error || radioButtonGroup?.error;

    return (
      <Label
        hasError={hasError}
        disabled={isDisabled}
        readOnly={isReadOnly}
        style={style}
        className={cn(className, htmlPropsClassName)}
        hasText={hasLabel}
        htmlFor={uniqueId}
        controlType="radio"
      >
        <input
          {...getBaseHTMLProps(uniqueId, restHtmlProps, rest)}
          type="radio"
          name={name ?? radioButtonGroup?.name}
          disabled={isDisabled}
          required={required || !!radioButtonGroup?.required}
          checked={
            typeof checked !== 'undefined'
              ? checked
              : isValueEqualToGroupValueOrFalsy(value, radioButtonGroup)
          }
          onChange={readOnlyChangeHandler(isReadOnly, handleChange)}
          value={value}
          aria-describedby={
            describedByIds.length > 0 ? describedByIds.join(' ') : undefined
          }
          aria-invalid={hasError ? true : undefined}
          className={cn(
            utilStyles['hide-input'],
            focusStyles['focusable-sibling'],
          )}
          ref={ref}
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
        <Typography {...selectionControlTypographyProps}>
          {children ?? label}
        </Typography>
      </Label>
    );
  },
);

RadioButton.displayName = 'RadioButton';
