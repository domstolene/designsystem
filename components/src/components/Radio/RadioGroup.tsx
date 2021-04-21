import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { StyledRadio } from './Radio';
import { RadioGroupContext } from './RadioGroupContext';

type RadioGroupProps = {
  children: React.ReactNode;
  value: string | number;
  disabled?: boolean;
  row?: boolean;
  name?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>, value: any) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const RadioGroup = ({
  children,
  name,
  value,
  disabled,
  row,
  onChange,
  className,
  style,
  ...rest
}: RadioGroupProps) => {
  const [groupValue, setGroupValue] = useState<string | number | null>(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setGroupValue(target.value);

    if (onChange) {
      onChange(event, target.value);
    }
  };

  return (
    <RadioGroupContext.Provider
      value={{
        name: name,
        value: groupValue,
        disabled: disabled,
        onChange: handleChange
      }}
    >
      <StyledRadioGroup
        role="radiogroup"
        row={row}
        className={className}
        style={style}
        {...rest}
      >
        {children}
      </StyledRadioGroup>
    </RadioGroupContext.Provider>
  );
};

RadioGroup.defaultProps = {
  row: false,
  disabled: false
};

const StyledRadioGroup = styled.div<{ row?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};

  ${({ row }) => {
    if (row) {
      return `${StyledRadio} {
        margin-right: 1rem;
      }`;
    }
  }}
`;
