import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
import { HTMLAttributes } from 'react';

export type NavigationLinkProps = {
  id?: string;
  href: string;
  title: string;
  current?: boolean;
};

export type ContextMenuElement = {
  title: string;
  href?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
};

export type InternaHeaderUserProps = {
  name: string;
  href?: string;
};

export type InternalHeaderProps = {
  applicationName?: string;
  smallScreen?: boolean;
  userProps?: InternaHeaderUserProps;
  navigationElements?: NavigationLinkProps[];
  contextMenuElements?: ContextMenuElement[];
  currentPageHref?: string;
  onCurrentPageChange?: () => void;
} & HTMLAttributes<HTMLDivElement>;
