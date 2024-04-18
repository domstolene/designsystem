import { type ButtonHTMLAttributes, type MouseEvent } from 'react';

export type SearchSize = 'small' | 'medium' | 'large';
export type SearchButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  loading?: boolean;
  purpose?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;
