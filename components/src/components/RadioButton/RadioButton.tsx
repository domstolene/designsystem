import { ChangeEvent, forwardRef, ReactElement, useState, isValidElement, cloneElement, Children } from 'react';
import { RadioButtonProps } from './RadioButton.types';
import { Typography } from '../Typography';
import {
  RadioButtonGroup,
  useRadioButtonGroup
} from './RadioButtonGroupContext';
import { CustomRadioButton, Input, Container } from './RadioButton.styles';
import styled from 'styled-components';

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

const LabelAndChildrenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

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
      hideDefaultRadio,
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
      ...rest
    };

    const containerProps = {
      error: error || radioButtonGroup?.error,
      disabled: disabled || radioButtonGroup?.disabled,
      readOnly: readOnly || radioButtonGroup?.readOnly,
      hideDefaultRadio: hideDefaultRadio || radioButtonGroup?.hideDefaultRadio,
      style,
      className
    };

    return (
      <Container {...containerProps} htmlFor={uniqueId}>
        <Input ref={ref} {...inputProps} />
        { !(hideDefaultRadio || radioButtonGroup?.hideDefaultRadio) && <CustomRadioButton /> }
        <Typography as="span">
        {
          isValidElement(children) ?
          <LabelAndChildrenWrapper>{ cloneElement(children, { checked: inputProps.checked })}{label}</LabelAndChildrenWrapper> :
          label
        }
        </Typography>
      </Container>
    );
  }
);
