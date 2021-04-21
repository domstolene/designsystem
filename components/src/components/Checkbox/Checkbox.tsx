import React, { forwardRef, InputHTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { containerTokens, inputTokens } from './checkboxTokens';

const Input = styled.input`
  height: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 0;
`;
const Checkmark = styled.span`
  position: absolute;
  top: 6px;
  left: ${inputTokens.left};
  height: ${inputTokens.height};
  width: ${inputTokens.width};
  border: ${inputTokens.border_width} solid ${inputTokens.default.color.border};
  border-radius: ${inputTokens.border_radius};
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

const Container = styled.label`
  position: relative;
  cursor: pointer;
  user-select: none;
  color: ${containerTokens.text_color};
  ${containerTokens.typography.font}
  padding: ${containerTokens.padding};

  input:checked ~ ${Checkmark} {
    background-color: ${inputTokens.default.color.background};
  }
  input:checked ~ ${Checkmark}:after {
    display: block;
  }
  input:checked:focus ~ ${Checkmark}:after, input:focus ~ ${Checkmark} {
    border-color: ${inputTokens.default.focus.marker};
  }

  ${Checkmark}:after {
    content: '';
    display: none;
    left: 26%;
    top: 10%;
    width: 2px;
    height: 5px;
    border: solid ${inputTokens.default.color.marker};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
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
  ({ id, label, className, style, ...rest }, ref) => {
    const [uniqueId] = useState<string>(id ?? `checkbox-${nextUniqueId++}`);

    return (
      <Container htmlFor={uniqueId} className={className} style={style}>
        <Input {...rest} id={uniqueId} type="checkbox" ref={ref} />
        <Checkmark />
        {label}
      </Container>
    );
  }
);
