import React, {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  useState
} from 'react';
import styled from 'styled-components';
import { RadioGroup, useRadioGroup } from './RadioGroupContext';

type RadioProps = {
  disabled?: boolean;
  label?: string;
  children?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const isValueEqualToGroupValue = (value: any, group: Nullable<RadioGroup>) => {
  if (typeof value === 'number') {
    return value === Number(group?.value);
  }
  return value === group?.value;
};

let nextUniqueId = 0;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      name,
      label,
      children,
      checked,
      disabled,
      value,
      onChange,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const [uniqueId] = useState<string>(id ?? `radio-${++nextUniqueId}`);

    const radioGroup = useRadioGroup();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event);
      radioGroup?.onChange(event);
    };

    const radioChecked =
      typeof checked !== 'undefined'
        ? checked
        : isValueEqualToGroupValue(value, radioGroup);

    const radioName = name ?? radioGroup?.name;

    return (
      <StyledRadio htmlFor={uniqueId} className={className} style={style}>
        <Input
          {...rest}
          type="radio"
          id={uniqueId}
          name={radioName}
          checked={radioChecked}
          disabled={disabled || radioGroup?.disabled}
          value={value}
          onChange={handleChange}
          ref={ref}
        />
        <Checkmark />
        <Label>{label ?? children}</Label>
      </StyledRadio>
    );
  }
);

export const StyledRadio = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0;
  margin-bottom: 0;
  margin-right: 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-family: 'Proxima Nova', Arial;
  user-select: none;
`;

const Checkmark = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1rem;
  width: 1rem;
  border: 2px solid #4a4a4a;
  border-radius: 50%;
  transition: border-color 0.3s;
`;

const Label = styled.span`
  color: #4a4a4a;
  margin-left: 0.5rem;
`;

const Input = styled.input`
  clip: rect(0 0 0 0);
  position: absolute;
  height: 0;
  width: 0;
  margin: 0;

  ~ ${Checkmark} {
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: #d2231e;
      transition: height 0.3s, width 0.3s;
    }
  }

  :focus-visible ~ ${Checkmark}:before, .focus-visible ~ ${Checkmark}:before {
    content: '';
    position: absolute;
    height: 2rem;
    width: 2rem;
    top: 0;
    left: -0.5rem;
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
`;
