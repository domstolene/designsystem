import { TextareaHTMLAttributes } from 'react';
import { CommonInputProps } from '../helpers';

export type TextAreaProps = CommonInputProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;
