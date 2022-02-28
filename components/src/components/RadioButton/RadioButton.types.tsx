import React, { InputHTMLAttributes } from 'react';

export type RadioButtonProps = {
  label?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  style?: React.CSSProperties;
  hideDefaultRadio?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
