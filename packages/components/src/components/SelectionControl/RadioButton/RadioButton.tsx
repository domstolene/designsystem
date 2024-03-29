import { type ChangeEvent, forwardRef, useId } from 'react';

import { type RadioButtonProps } from './RadioButton.types';
import {
  type RadioButtonGroupContextProps,
  useRadioButtonGroup,
} from './RadioButtonGroupContext';
import { type Nullable, getBaseHTMLProps } from '../../../types';
import { cn } from '../../../utils';
import { HiddenInput } from '../../helpers';
import { Typography } from '../../Typography';
import { Container, CustomSelectionControl } from '../SelectionControl.styles';
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

    const inputProps = {
      ...getBaseHTMLProps(uniqueId, restHtmlProps, rest),
      type: 'radio',
      name: name ?? radioButtonGroup?.name,
      disabled:
        disabled ||
        readOnly ||
        !!radioButtonGroup?.disabled ||
        !!radioButtonGroup?.readOnly,
      required: required || !!radioButtonGroup?.required,
      checked:
        typeof checked !== 'undefined'
          ? checked
          : isValueEqualToGroupValueOrFalsy(value, radioButtonGroup),
      onChange: handleChange,
      value: value,
      'aria-describedby':
        describedByIds.length > 0 ? describedByIds.join(' ') : undefined,
      'aria-invalid': error || radioButtonGroup?.error ? true : undefined,
    };

    return (
      <Container
        $error={error || radioButtonGroup?.error}
        disabled={disabled || radioButtonGroup?.disabled}
        $readOnly={readOnly || radioButtonGroup?.readOnly}
        style={style}
        className={cn(className, htmlPropsClassName)}
        $hasLabel={hasLabel}
        htmlFor={uniqueId}
        $controlType="radio"
      >
        <HiddenInput {...inputProps} ref={ref} />
        <CustomSelectionControl $controlType="radio" />
        <Typography {...selectionControlTypographyProps}>
          {children ?? label}
        </Typography>
      </Container>
    );
  },
);

RadioButton.displayName = 'RadioButton';
