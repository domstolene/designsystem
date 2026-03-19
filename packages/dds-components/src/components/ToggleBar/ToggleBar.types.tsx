import { type ChangeEvent, type InputHTMLAttributes } from 'react';

import {
  type BaseComponentPropsWithChildren,
  createPurposes,
  createSizes,
} from '../../types';
import { type ResponsiveProps } from '../layout';

export type ToggleBarValue = string | number | null | undefined;

export const TOGGLE_BAR_SIZES = createSizes(
  'xsmall',
  'small',
  'medium',
  'large',
);
export type ToggleBarSize = (typeof TOGGLE_BAR_SIZES)[number];

export const TOGGLE_BAR_PURPOSES = createPurposes('primary', 'secondary');
export type ToggleBarPurpose = (typeof TOGGLE_BAR_PURPOSES)[number];

export type ToggleBarProps<T extends string | number> =
  BaseComponentPropsWithChildren<
    HTMLDivElement,
    {
      /**
       * Formål med komponenten.
       * @default "primary"
       */
      purpose?: ToggleBarPurpose;
      /**Størrelse på komponenten.
       * @default "medium"
       */
      size?: ToggleBarSize;
      /**Ledetekst for hele gruppen. */
      label?: string;
      /**Funksjonen for `onChange`-event for barna. */
      onChange?: (event: ChangeEvent<HTMLInputElement>, value?: T) => void;
      /**Den valgte verdien i gruppen. Hvis satt ved innlastning blir en `<ToggleRadio>` forhåndsvalgt. */
      value?: T;
      /** Gir alle barna samme `name` prop.*/
      name?: string;
      /**Bredden til komponenten. Bredden fordeles likt mellom barna.  */
      width?: ResponsiveProps['width'];
    },
    InputHTMLAttributes<HTMLInputElement>
  >;
