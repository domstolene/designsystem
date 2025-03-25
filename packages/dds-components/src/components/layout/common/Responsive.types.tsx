import { type Property, type StandardProperties } from 'csstype';
import { type CSSProperties, type ElementType } from 'react';

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
  | 'x0'
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

export interface PrimitiveDisplayHideProps {
  /** Brekkpunkt og nedover komponenten skal skjules.  */
  breakpointBelow?: ScreenSizeLiteral;
  /** Brekkpunkt og oppover komponenten skal skjules.  */
  breakpointAbove?: ScreenSizeLiteral;
}

export interface PrimitiveDisplayShowProps {
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
  /**Inline style.*/
  style?: CSSProperties;
}

interface PrimitiveLayoutProps {
  /** CSS width. */
  width?: ResponsiveProp<StandardProperties['width']>; //
  /** CSS max width. */
  maxWidth?: ResponsiveProp<StandardProperties['maxWidth']>; //
  /** CSS min width. */
  minWidth?: ResponsiveProp<StandardProperties['minWidth']>; //
  /** CSS height. */
  height?: ResponsiveProp<StandardProperties['height']>; //
  /** CSS max height. */
  maxHeight?: ResponsiveProp<StandardProperties['maxHeight']>; //
  /** CSS min height. */
  minHeight?: ResponsiveProp<StandardProperties['minHeight']>; //
  /** CSS overflow. */
  overflow?: ResponsiveProp<StandardProperties['overflow']>; //
  /** CSS overflow y. */
  overflowY?: ResponsiveProp<StandardProperties['overflowY']>; //
  /** CSS overflow x. */
  overflowX?: ResponsiveProp<StandardProperties['overflowX']>; //
  /** CSS position. */
  position?: ResponsiveProp<Property.Position>; //
  /** CSS top. Støtter standardverdier og dds spacing tokens skala. */
  top?: ResponsiveProp<StandardProperties['top'] | SpacingScale>; //
  /** CSS bottom. Støtter standardverdier og dds spacing tokens skala. */
  bottom?: ResponsiveProp<StandardProperties['bottom'] | SpacingScale>; //
  /** CSS left. Støtter standardverdier og dds spacing tokens skala. */
  left?: ResponsiveProp<StandardProperties['left'] | SpacingScale>; //
  /** CSS right. Støtter standardverdier og dds spacing tokens skala. */
  right?: ResponsiveProp<StandardProperties['right'] | SpacingScale>; //
  /** CSS padding. Støtter standardverdier og dds spacing tokens skala. */
  padding?: ResponsiveProp<StandardProperties['padding'] | SpacingScale>; //
  /** CSS padding inline. */
  paddingInline?: ResponsiveProp<
    StandardProperties['paddingInline'] | SpacingScale
  >;
  /** CSS padding block. Støtter standardverdier og dds spacing tokens skala.*/
  paddingBlock?: ResponsiveProp<
    StandardProperties['paddingBlock'] | SpacingScale
  >;
  /** CSS margin. Støtter standardverdier og dds spacing tokens skala.*/
  margin?: ResponsiveProp<StandardProperties['margin'] | SpacingScale>;
  /** CSS margin inline. Støtter standardverdier og dds spacing tokens skala.*/
  marginInline?: ResponsiveProp<
    StandardProperties['marginInline'] | SpacingScale
  >;
  /** CSS margin block. Støtter standardverdier og dds spacing tokens skala.*/
  marginBlock?: ResponsiveProp<
    StandardProperties['marginBlock'] | SpacingScale
  >;
  /** CSS display. */
  display?: ResponsiveProp<StandardProperties['display']>;
  /** CSS flex-direction. */
  flexDirection?: ResponsiveProp<StandardProperties['flexDirection']>;
  /** CSS flex-basis. */
  flexBasis?: ResponsiveProp<StandardProperties['flexBasis']>;
  /** CSS flex-wrap. */
  flexWrap?: ResponsiveProp<StandardProperties['flexWrap']>;
  /** CSS flex-flow. */
  flexFlow?: ResponsiveProp<StandardProperties['flexFlow']>;
  /** CSS align items. */
  alignItems?: ResponsiveProp<StandardProperties['alignItems']>;
  /** CSS justify items. */
  justifyItems?: ResponsiveProp<StandardProperties['justifyItems']>;
  /** CSS align-content. */
  alignContent?: ResponsiveProp<StandardProperties['alignContent']>;
  /** CSS justify-content. */
  justifyContent?: ResponsiveProp<StandardProperties['justifyContent']>;
  /** CSS gap. */
  gap?: ResponsiveProp<StandardProperties['gap'] | SpacingScale>;
}

export type PolymorphicResponsiveProps = PolymorphicProp & ResponsiveProps;

export type ResponsiveProps = PolymorphicProp &
  PrimitiveDisplayHideProps &
  PrimitiveLayoutProps;

export type ResponsiveStackProps = Omit<
  ResponsiveProps,
  'display' | 'flexDirection'
>;
