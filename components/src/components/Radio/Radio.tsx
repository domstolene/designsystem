import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { RadioGroup, useRadioGroup } from './RadioGroupContext';

type RadioProps = {
  value: string | number;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

const isValueEqualToGroupValue = (value: any, group: RadioGroup) => {
  if (typeof value === 'number') {
    return value === Number(group.value);
  }
  return value === group.value;
};

let nextUniqueId = 0;

export const Radio = ({
  id,
  name,
  value,
  checked,
  disabled,
  onChange,
  children
}: RadioProps) => {
  const [uniqueId] = useState<string>(id ?? `radio-${++nextUniqueId}`);

  const radioGroup = useRadioGroup();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
    radioGroup.onChange(event);
  };

  const radioChecked =
    typeof checked !== 'undefined'
      ? checked
      : isValueEqualToGroupValue(value, radioGroup);

  const radioName = name ?? radioGroup.name;

  return (
    <StyledRadio htmlFor={uniqueId}>
      <Input
        type="radio"
        id={uniqueId}
        name={radioName}
        checked={radioChecked}
        disabled={disabled || radioGroup.disabled}
        value={value}
        onChange={handleChange}
      />
      <Label>{children}</Label>
      <Checkmark />
    </StyledRadio>
  );
};

const StyledRadio = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0;
  padding-left: 2rem;
  margin-bottom: 0;
  cursor: pointer;
  font-size: 0.875rem;
  font-family: 'Proxima Nova', Arial;
  user-select: none;
`;

const Checkmark = styled.span`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.75rem;
  width: 0.75rem;
  border: 2px solid #d2231e;
  border-radius: 50%;
  transition: border-color 0.3s;
`;

const Label = styled.span`
  color: #4a4a4a;
`;

const Input = styled.input`
  clip: rect(0 0 0 0);
  position: absolute;
  height: 0;
  width: 0;

  ~ ${Checkmark} {
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: #d2231e;
      transition: all 0.3s;
    }
  }

  :focus ~ ${Checkmark}:before {
    content: '';
    position: absolute;
    height: 2rem;
    width: 2rem;
    top: calc(-0.5625);
    left: calc(-0.5625);
    background: #d2231e;
    opacity: 0.2;
    border-radius: 50%;
  }

  :checked ~ ${Checkmark} {
    border: 2px solid #d2231e;

    &:after {
      width: 0.5rem;
      height: 0.5rem;
    }
  }

  :disabled ~ ${Checkmark} {
    opacity: 0.6;
  }

  :disabled ~ ${Checkmark} {
    opacity: 0.6;
  }
`;
