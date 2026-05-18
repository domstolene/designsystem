import { type Placement } from '../../hooks';
import { type BaseComponentPropsWithChildren } from '../../types';
import {
  type DropdownItemButtonProps,
  type DropdownItemProps,
  type StylelessButton,
} from '../helpers';
import { type Toggle } from '../Toggle';

export type OverflowMenuButtonProps = Omit<
  DropdownItemProps<typeof StylelessButton>,
  'as'
>;

export type OverflowMenuLinkProps = Omit<
  DropdownItemProps<'a'>,
  keyof DropdownItemButtonProps | 'as'
>;

export type OverflowMenuSpanProps = Omit<
  DropdownItemProps<'span'>,
  keyof DropdownItemButtonProps | 'as'
>;

export type OverflowMenuToggleProps = Omit<
  DropdownItemProps<typeof Toggle>,
  keyof DropdownItemButtonProps | 'as' | 'purpose' | 'icon'
>;

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
      /**Angir rotnode hvor menyen skal rendres hvis portal=false.
       * Hvis parentElement ikke er satt vil menyen rendres i det elementet som OverflowMenu er plassert i.
       * Hvis portal er true, vil parentElement bli ignorert.
       * @default themeProviderRef
       */
      parentElement?: HTMLElement;
      /**Angir om menyen skal rendres i en portal eller ikke.
       * Hvis portal er false, vil parentElement bli brukt hvis det er satt.
       * @default true
       */
      portal?: boolean;
    }
  >,
  'id'
>;
