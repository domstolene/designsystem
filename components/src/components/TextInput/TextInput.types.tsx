import React, { InputHTMLAttributes } from 'react';

import { InputProps } from '../../helpers/Input/Input.types';

export type TextInputProps = {
  multiline?: boolean;
  className?: string;
  style?: React.CSSProperties;
} & InputProps &
  InputHTMLAttributes<HTMLTextAreaElement>;
