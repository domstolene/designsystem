import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
import { HTMLAttributes } from 'react';

export type NavigationLinkProps = {
  href: string;
  title: string;
  current?: boolean;
} & HTMLAttributes<HTMLAnchorElement>;

export type ContextMenuElementProps = {
  title: string;
  href?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
} & (HTMLAttributes<HTMLAnchorElement> | HTMLAttributes<HTMLButtonElement>);

export type InternaHeaderUserProps = {
  name: string;
  href?: string;
};

export type InternalHeaderProps = {
  applicationName?: string;
  smallScreen?: boolean;
  userProps?: InternaHeaderUserProps;
  navigationElements?: NavigationLinkProps[];
  contextMenuElements?: ContextMenuElementProps[];
  currentPageHref?: string;
  onCurrentPageChange?: () => void;
} & HTMLAttributes<HTMLDivElement>;
