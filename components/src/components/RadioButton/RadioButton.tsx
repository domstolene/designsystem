import { ChangeEvent, forwardRef, useId } from 'react';
import { RadioButtonProps } from './RadioButton.types';
import { Typography } from '../Typography';
import {
  RadioButtonGroup,
  useRadioButtonGroup,
} from './RadioButtonGroupContext';
import { CustomRadioButton, Input, Container } from './RadioButton.styles';
import { getBaseHTMLProps, joinClassNames } from '../../types';

const isValueEqualToGroupValueOrFalsy = (
  value: unknown,
  group: Nullable<RadioButtonGroup>
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
      disabled,
      readOnly,
      error,
      checked,
      value,
      children,
      required,
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
    };

    const containerProps = {
      error: error || radioButtonGroup?.error,
      disabled: disabled || radioButtonGroup?.disabled,
      readOnly: readOnly || radioButtonGroup?.readOnly,
      style,
      className: joinClassNames(className, htmlPropsClassName),
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
