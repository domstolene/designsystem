import { forwardRef, useState } from 'react';
import { Typography } from '../Typography';
import { CustomCheckbox, Input, Container } from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';
import { useCheckboxGroup } from './CheckboxGroupContext';
import { spaceSeparatedIdListGenerator } from '../../utils';
import { getBaseHTMLProps } from '../../types';

let nextUniqueId = 0;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      id,
      name,
      label,
      error,
      disabled,
      readOnly,
      indeterminate,
      'aria-describedby': ariaDescribedby,
      htmlProps = {},
      ...rest
    } = props;

    const [uniqueId] = useState<string>(id ?? `checkbox-${nextUniqueId++}`);
    const checkboxGroup = useCheckboxGroup();

    const { className, style, ...restHtmlProps } = htmlProps;

    const containerProps = {
      error: error || checkboxGroup?.error,
      disabled,
      indeterminate,
      readOnly,
      htmlFor: uniqueId,
      label,
      className,
      style
    };
    type AriaChecked = 'mixed' | boolean | undefined;

    const inputProps = {
      ...getBaseHTMLProps(id, restHtmlProps, rest),
      ref,
      id: uniqueId,
      name,
      indeterminate,
      disabled: disabled || readOnly,
      'aria-describedby': spaceSeparatedIdListGenerator([
        checkboxGroup?.tipId,
        checkboxGroup?.errorMessageId,
        ariaDescribedby
      ]),
      'aria-invalid': error || checkboxGroup?.error ? true : undefined,
      'aria-labelledby': checkboxGroup?.uniqueGroupId,
      'aria-checked': indeterminate ? ('mixed' as AriaChecked) : undefined,
      'aria-readonly': readOnly
    };

    return (
      <Container {...containerProps}>
        <Input {...inputProps} data-indeterminate={indeterminate} />
        <CustomCheckbox />
        {label && <Typography as="span">{label}</Typography>}
      </Container>
    );
  }
);
