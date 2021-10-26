import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import React, { ButtonHTMLAttributes } from 'react';

export type ButtonPurpose = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonAppearance = 'filled' | 'ghost' | 'rounded' | 'borderless';
export type IconPosition = 'left' | 'right';

export type ButtonProps = {
  size?: ButtonSize;
  label?: string;
  purpose?: ButtonPurpose;
  iconPosition?: IconPosition;
  appearance?: ButtonAppearance;
  href?: string;
  target?: string;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
