import { type JSX, type SVGAttributes } from 'react';

export type SvgProps = { title?: string } & SVGAttributes<SVGSVGElement>;
export type SvgIcon = (props: SvgProps) => JSX.Element;

export type IconStatesOf<I> = I extends { states: ReadonlyArray<infer S> }
  ? S
  : never;

export type SvgPropsWithState<I> = SvgProps &
  (IconStatesOf<I> extends never
    ? object
    : {
        /**
         * Ikon-state hvis ikonet kan animeres; types basert på ikon valgt i `icon` prop. Statiske ikoner støtter ikke propen.
         */
        iconState?: IconStatesOf<I>;
      });

export type SvgIconWithState<I> = SvgPropsWithState<I>;
