import { type StandardProperties } from 'csstype';
import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type Ref,
} from 'react';

export type ScreenSizeLiteral = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export const screenSizeLiterals: Array<ScreenSizeLiteral> = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
];

export interface PolymorphicProp {
  /**HTML tag eller custom React element som returneres. */
  as?: ElementType;
}

export type SpacingScale =
  | 'x0.125'
  | 'x0.25'
  | 'x0.5'
  | 'x0.75'
  | 'x1'
  | 'x1.5'
  | 'x2'
  | 'x2.5'
  | 'x3'
  | 'x4'
  | 'x6'
  | 'x10';

export interface ResponsiveDisplayHideProps {
  /** Brekkpunkt og nedover komponenten skal skjules.  */
  breakpointBelow?: ScreenSizeLiteral;
  /** Brekkpunkt og oppover komponenten skal skjules.  */
  breakpointAbove?: ScreenSizeLiteral;
}

export interface ResponsiveDisplayShowProps {
  /** Brekkpunkt og nedover komponenten skal vises.  */
  breakpointBelow?: ScreenSizeLiteral;
  /** Brekkpunkt og oppover komponenten skal vises.  */
  breakpointAbove?: ScreenSizeLiteral;
}

export type BreakpointBasedProps<T extends keyof StandardProperties> = {
  [k in ScreenSizeLiteral]?: StandardProperties[T];
};

export type StaticAndBreakpointBasedProp<T extends keyof StandardProperties> =
  | BreakpointBasedProps<T>
  | StandardProperties[T];

export type CustomBreakpointBasedProp<T> = {
  [k in ScreenSizeLiteral]?: T;
};

export type ResponsiveProp<T> = T | CustomBreakpointBasedProp<T>;

export function isBreakpointObject<T extends keyof StandardProperties>(
  value: StaticAndBreakpointBasedProp<T>,
): value is { [k in ScreenSizeLiteral]?: StandardProperties[T] } {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function isCustomBreakpointObject<T>(
  value: ResponsiveProp<T>,
): value is { [k in ScreenSizeLiteral]?: T } {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export interface CSSProps {
  /**Klassenavn. */
  className?: string;
  /**Inline style.*/
  style?: CSSProperties;
}

/**TODO: implementere ordentlige responsive props med tilhørende CSS fil. */

export type ResponsiveProps = ResponsiveDisplayHideProps & {
  /** CSS width. */
  width?: StaticAndBreakpointBasedProp<'width'>;
  /** CSS max width. */
  maxWidth?: StaticAndBreakpointBasedProp<'maxWidth'>;
  /** CSS min width. */
  minWidth?: StaticAndBreakpointBasedProp<'minWidth'>;
  /** CSS height. */
  height?: StaticAndBreakpointBasedProp<'height'>;
  /** CSS max height. */
  maxHeight?: StaticAndBreakpointBasedProp<'maxHeight'>;
  /** CSS min height. */
  minHeight?: StaticAndBreakpointBasedProp<'minHeight'>;
  /** CSS top. */
  top?: StaticAndBreakpointBasedProp<'top'>;
  /** CSS bottom. */
  bottom?: StaticAndBreakpointBasedProp<'bottom'>;
  /** CSS left. */
  left?: StaticAndBreakpointBasedProp<'left'>;
  /** CSS right. */
  right?: StaticAndBreakpointBasedProp<'right'>;
  /** CSS padding. Støtter standardverdier og dds spacing tokens skala. */
  padding?: ResponsiveProp<StandardProperties['padding'] | SpacingScale>;
  /** CSS padding inline. */
  paddingInline?: StaticAndBreakpointBasedProp<'paddingInline'>;
  /** CSS padding block. */
  paddingBlock?: StaticAndBreakpointBasedProp<'paddingBlock'>;
  /** CSS margin. */
  margin?: StaticAndBreakpointBasedProp<'margin'>;
  /** CSS margin inline. */
  marginInline?: StaticAndBreakpointBasedProp<'marginInline'>;
  /** CSS margin block. */
  marginBlock?: StaticAndBreakpointBasedProp<'marginBlock'>;
  /** CSS position. */
  position?: StaticAndBreakpointBasedProp<'position'>;
};

export type ResponsiveStackProps = ResponsiveProps & {
  /** CSS display. */
  display?: StaticAndBreakpointBasedProp<'display'>;
  /** CSS flex-direction. */
  flexDirection?: StaticAndBreakpointBasedProp<'flexDirection'>;
  /** CSS gap. */
  gap?: StaticAndBreakpointBasedProp<'gap'>;
};

export type PolymorphicResponsiveProps = PolymorphicProp & ResponsiveProps;

export type CommonResponsiveProps = CSSProps & {
  /**Ref. */
  ref?: Ref<HTMLDivElement | null>;
  /**Barn. */
  children?: ReactNode;
};
