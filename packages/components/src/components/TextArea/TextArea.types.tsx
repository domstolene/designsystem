import { type TextareaHTMLAttributes } from 'react';

import { type CommonInputProps } from '../helpers';

export type TextAreaProps = CommonInputProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;
