import { forwardRef, useState } from 'react';
import { Typography } from '../Typography';
import { CustomCheckbox, Input, Container } from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

let nextUniqueId = 0;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      name,
      label,
      error,
      disabled,
      readOnly,
      indeterminate,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const [uniqueId] = useState<string>(id ?? `checkbox-${nextUniqueId++}`);

    const containerProps = {
      error,
      disabled,
      indeterminate,
      readOnly,
      htmlFor: uniqueId,
      label,
      className,
      style
    };

    const inputProps = {
      ref,
      id: uniqueId,
      name,
      indeterminate,
      disabled: disabled || readOnly,
      ...rest
    };

    return (
      <Container {...containerProps}>
        <Input
          {...inputProps}
          data-indeterminate={indeterminate}
          aria-readonly={readOnly}
        />
        <CustomCheckbox />
        {label && <Typography as="span">{label}</Typography>}
      </Container>
    );
  }
);
