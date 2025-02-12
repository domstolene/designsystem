import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
} from 'react';

import { type Placement } from '../../hooks';
import { type BaseComponentPropsWithChildren } from '../../types';
import { type SvgIcon } from '../Icon/utils';

export interface OverflowMenuListItemBaseProps {
  /**Ikon som vises ved teksten. **OBS!** Settes i tillegg til `children` for riktig layout. */
  icon?: SvgIcon;
  /**Bestemmer farger basert på formål.
   * @default "default"
   */
  purpose?: 'default' | 'danger';
}

export type OverflowMenuButtonProps = OverflowMenuListItemBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type OverflowMenuLinkProps = OverflowMenuListItemBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export type OverflowMenuSpanProps = OverflowMenuListItemBaseProps &
  HTMLAttributes<HTMLSpanElement>;

export type OverflowMenuProps = Omit<
  BaseComponentPropsWithChildren<
    HTMLDivElement,
    {
      /**Plassering av menyen i forhold til anchor-elementet.
       * @default "bottom-end"
       */
      placement?: Placement;
      /**Avstand fra anchor-elementet i px.
       * @default 2
       */
      offset?: number;
    }
  >,
  'id'
>;
