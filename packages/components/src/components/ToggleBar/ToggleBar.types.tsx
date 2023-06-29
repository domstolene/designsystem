import { ChangeEvent } from 'react';
import { BaseComponentPropsWithChildren } from '@norges-domstoler/dds-core';
import { Property } from 'csstype';

export type ToggleBarValue = string | number | null | undefined;
export type ToggleBarSize = 'tiny' | 'small' | 'medium' | 'large';

export type ToggleBarProps<T extends string | number> =
  BaseComponentPropsWithChildren<
    HTMLDivElement,
    {
      /**Størrelse på komponenten. */
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
    }
  >;
