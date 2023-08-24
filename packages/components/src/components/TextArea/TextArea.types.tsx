import { TextareaHTMLAttributes } from 'react';
import { CommonInputProps } from '@norges-domstoler/dds-form';

export type TextAreaProps = CommonInputProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;
