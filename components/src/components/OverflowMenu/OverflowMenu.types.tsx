import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { Placement } from '@popperjs/core';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  RefObject
} from 'react';

export type OverflowMenuContextItem = {
  text: string;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
);
export type OverflowMenuNavItem = {
  text: string;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type UserProps = {
  text: string;
  href?: string;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
);

export type OverflowMenuProps = {
  isOpen?: boolean;
  triggerRef: RefObject<HTMLButtonElement>;
  onClose: () => void;
  placement?: Placement;
  userProps?: UserProps;
  items?: OverflowMenuContextItem[];
  navItems?: OverflowMenuNavItem[];
  offset?: number;
} & HTMLAttributes<HTMLDivElement>;
