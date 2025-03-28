import { type Property } from 'csstype';
import { type ChangeEvent, type InputHTMLAttributes } from 'react';

import { type BaseComponentPropsWithChildren, type Size } from '../../types';

export type ToggleBarValue = string | number | null | undefined;
export type ToggleBarSize = Extract<
  Size,
  'xsmall' | 'small' | 'medium' | 'large'
>;

export type ToggleBarProps<T extends string | number> =
  BaseComponentPropsWithChildren<
    HTMLDivElement,
    {
      /**Størrelse på komponenten.
       * @default "medium"
       */
      size?: ToggleBarSize;
      /**Ledetekst for hele gruppen. */
      label?: string;
      /**Funksjonen for `onChange`-event for barna. */
      onChange?: (event: ChangeEvent<HTMLInputElement>, value?: T) => void;
      /**Den valgte verdien i gruppen. Hvis satt ved innlastning blir en `<ToggleRadio />` forhåndsvalgt. */
      value?: T;
      /** Gir alle barna samme `name` prop.*/
      name?: string;
      /**Bredden til komponenten. Bredden fordeles likt mellom barna.  */
      width?: Property.Width;
    },
    Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'>
  >;
