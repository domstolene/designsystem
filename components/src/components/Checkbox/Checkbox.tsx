import React, { forwardRef, InputHTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { containerTokens, inputTokens } from './checkboxTokens';

const Input = styled.input`
  clip: rect(0 0 0 0);
  position: absolute;
  height: 0;
  width: 0;
  margin: 0;
`;

const Checkmark = styled.span`
  position: relative;
  height: ${inputTokens.height};
  width: ${inputTokens.width};
  border: ${inputTokens.border_width} solid ${inputTokens.default.color.border};
  border-radius: ${inputTokens.border_radius};

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 3px;
    top: 0px;
    width: 4px;
    height: 8px;
    border: solid ${inputTokens.default.color.marker};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const Label = styled.span`
  margin-left: 8px;
`;

const StyledCheckbox = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  position: relative;
  user-select: none;
  color: ${containerTokens.text_color};
  ${containerTokens.typography.font}
  padding: ${containerTokens.padding};
  cursor: pointer;

  input:checked ~ ${Checkmark} {
    background-color: ${inputTokens.default.color.background};
  }
  input:checked ~ ${Checkmark}:after {
    display: block;
  }
  input:checked:focus ~ ${Checkmark}:after, input:focus ~ ${Checkmark} {
    border-color: ${inputTokens.default.focus.marker};
  }

  ${({ disabled }) => {
    if (disabled) {
      return `
        cursor: not-allowed;
        opacity: 0.7;  
      `;
    }
  }}
`;

export type CheckboxProps = {
  label: string;
  error?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
} & InputHTMLAttributes<HTMLInputElement>;

let nextUniqueId = 0;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, disabled, className, style, ...rest }, ref) => {
    const [uniqueId] = useState<string>(id ?? `checkbox-${nextUniqueId++}`);

    return (
      <StyledCheckbox
        htmlFor={uniqueId}
        className={className}
        style={style}
        disabled={disabled}
        onClick={event => {
          event.stopPropagation();
        }}
      >
        <Input
          {...rest}
          id={uniqueId}
          type="checkbox"
          ref={ref}
          disabled={disabled}
        />
        <Checkmark />
        {!!label && <Label>{label}</Label>}
      </StyledCheckbox>
    );
  }
);

Checkbox.defaultProps = {
  disabled: false
};
