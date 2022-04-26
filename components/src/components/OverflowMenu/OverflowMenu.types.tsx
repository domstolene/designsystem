import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  RefObject
} from 'react';

export type OverflowMenuContextItem = {
  title: string;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
);
export type OverflowMenuNavItem = {
  title: string;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type UserProps = {
  name: string;
  href?: string;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
);

export type OverflowMenuProps = {
  isOpen?: boolean;
  anchorRef?: RefObject<HTMLButtonElement>;
  onClose?: () => void;
  placement?: Placement;
  userProps?: UserProps;
  items?: OverflowMenuContextItem[];
  navItems?: OverflowMenuNavItem[];
  offset?: number;
} & HTMLAttributes<HTMLDivElement>;
