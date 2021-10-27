import React, { InputHTMLAttributes } from 'react';
import * as CSS from 'csstype';

export type TextInputProps = {
  label?: string;
  multiline?: boolean;
  tip?: string;
  width?: CSS.WidthProperty<string>;
  errorMessage?: string;
  className?: string;
  style?: React.CSSProperties;
} & InputHTMLAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLTextAreaElement>;
