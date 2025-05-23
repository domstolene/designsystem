import { type ComponentPropsWithRef, type MouseEventHandler } from 'react';

import { type Placement } from '../../hooks';
import { type BaseComponentPropsWithChildren } from '../../types';
import { type ButtonProps } from '../Button';
import { type SvgIcon } from '../Icon/utils';

export type OverflowMenuListItemBaseProps<T extends 'span' | 'button' | 'a'> = {
  /**Ikon som vises ved teksten. **OBS!** Settes i tillegg til `children` for riktig layout. */
  icon?: SvgIcon;
  /**Bestemmer farger basert på formål.
   * @default "default"
   */
  purpose?: 'default' | 'danger';
} & ComponentPropsWithRef<T>;

export type OverflowMenuButtonProps = OverflowMenuListItemBaseProps<'button'> &
  Pick<ButtonProps, 'loading' | 'loadingTooltip'> & {
    /**Asynkron `onClick` event; håndterer loading status, slik at menyen ikke lukker seg under loading. */
    onClickAsync?: MouseEventHandler<HTMLButtonElement>;
  };

export type OverflowMenuLinkProps = OverflowMenuListItemBaseProps<'a'>;

export type OverflowMenuSpanProps = OverflowMenuListItemBaseProps<'span'>;

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
