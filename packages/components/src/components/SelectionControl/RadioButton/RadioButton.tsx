import { ChangeEvent, forwardRef, useId } from 'react';
import { getBaseHTMLProps, cn, Nullable } from '@norges-domstoler/dds-core';
import { Typography } from '@norges-domstoler/dds-typography';
import { HiddenInput } from '@norges-domstoler/dds-form';

import { RadioButtonProps } from './RadioButton.types';
import {
  RadioButtonGroup,
  useRadioButtonGroup,
} from './RadioButtonGroupContext';
import { Container, CustomSelectionControl } from '../SelectionControl.styles';

const isValueEqualToGroupValueOrFalsy = (
  value: unknown,
  group: Nullable<RadioButtonGroup>,
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
        <Typography as="span">{children ?? label}</Typography>
      </Container>
    );
  },
);

RadioButton.displayName = 'RadioButton';
