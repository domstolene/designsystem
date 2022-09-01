import { forwardRef, useId } from 'react';
import { Typography } from '../Typography';
import { CustomCheckbox, Input, Container } from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';
import { useCheckboxGroup } from './CheckboxGroupContext';
import { spaceSeparatedIdListGenerator } from '../../utils';
import { getBaseHTMLProps, joinClassNames } from '../../types';

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
      className,
      htmlProps = {},
      ...rest
    } = props;

    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-checkbox`;
    const checkboxGroup = useCheckboxGroup();

    const {
      style,
      className: htmlPropsClassName,
      ...restHtmlProps
    } = htmlProps;

    const containerProps = {
      error: error || checkboxGroup?.error,
      disabled,
      indeterminate,
      readOnly,
      htmlFor: uniqueId,
      label,
      className: joinClassNames(className, htmlPropsClassName),
      style,
    };
    type AriaChecked = 'mixed' | boolean | undefined;

    const inputProps = {
      ...getBaseHTMLProps(uniqueId, restHtmlProps, rest),
      ref,
      name,
      indeterminate,
      disabled: disabled || readOnly,
      'aria-describedby': spaceSeparatedIdListGenerator([
        checkboxGroup?.tipId,
        checkboxGroup?.errorMessageId,
        ariaDescribedby,
      ]),
      'aria-invalid': error || checkboxGroup?.error ? true : undefined,
      'aria-labelledby': checkboxGroup?.uniqueGroupId,
      'aria-checked': indeterminate ? ('mixed' as AriaChecked) : undefined,
      'aria-readonly': readOnly,
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
