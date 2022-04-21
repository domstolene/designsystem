import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { Placement } from '../../hooks/useReactPopper';
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
