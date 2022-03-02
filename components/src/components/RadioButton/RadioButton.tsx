import { ChangeEvent, forwardRef, useState } from 'react';
import { RadioButtonProps } from './RadioButton.types';
import { Typography } from '../Typography';
import {
  RadioButtonGroup,
  useRadioButtonGroup
} from './RadioButtonGroupContext';
import { CustomRadioButton, Input, Container } from './RadioButton.styles';

let nextUniqueId = 0;

const isValueEqualToGroupValueOrFalsy = (
  value: any,
  group: Nullable<RadioButtonGroup>
) => {
  if (typeof value !== 'undefined' && value !== null && group) {
    if (typeof value === 'number') {
      return value === Number(group?.value);
    }
    return value === group?.value;
  }
  return value;
};

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      id,
      name,
      label,
      disabled,
      readOnly,
      error,
      style,
      checked,
      value,
      className,
      children,
      required,
      onChange,
      'aria-describedby': ariaDescribedby,
      ...rest
    },
    ref
  ) => {
    const [uniqueId] = useState<string>(id ?? `radioButton-${nextUniqueId++}`);

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
      id: uniqueId,
      name: name ?? radioButtonGroup?.name,
      disabled:
        disabled ||
        readOnly ||
        radioButtonGroup?.disabled ||
        radioButtonGroup?.readOnly,
      required: required || radioButtonGroup?.required,
      checked:
        typeof checked !== 'undefined'
          ? checked
          : isValueEqualToGroupValueOrFalsy(value, radioButtonGroup),
      onChange: handleChange,
      value: value,
      'aria-describedby':
        describedByIds.length > 0 ? describedByIds.join(' ') : undefined,
      'aria-invalid': error || radioButtonGroup?.error ? true : undefined,
      ...rest
    };

    const containerProps = {
      error: error || radioButtonGroup?.error,
      disabled: disabled || radioButtonGroup?.disabled,
      readOnly: readOnly || radioButtonGroup?.readOnly,
      style,
      className
    };

    return (
      <Container {...containerProps} htmlFor={uniqueId}>
        <Input ref={ref} {...inputProps} />
        <CustomRadioButton />
        <Typography as="span">{children ?? label}</Typography>
      </Container>
    );
  }
);
