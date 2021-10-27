import React, { InputHTMLAttributes } from 'react';

export type CheckboxProps = {
  label?: string;
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  indeterminate?: boolean;
  className?: string;
  style?: React.CSSProperties;
} & InputHTMLAttributes<HTMLInputElement>;
