import { type Property, type StandardProperties } from 'csstype';
import { type CSSProperties } from 'react';

export type ScreenSizeLiteral = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export const screenSizeLiterals: Array<ScreenSizeLiteral> = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
];

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

export type RelativeColumnsOccupied = 'all' | 'firstHalf' | 'secondHalf';

export interface PrimitiveDisplayHideProps {
  /** Brekkpunkt og nedover komponenten skal skjules.  */
  hideBelow?: ScreenSizeLiteral;
  /** Brekkpunkt og oppover komponenten skal skjules.  */
  hideAbove?: ScreenSizeLiteral;
}

export interface PrimitiveDisplayShowProps {
  /** Brekkpunkt og nedover komponenten skal vises.  */
  showBelow?: ScreenSizeLiteral;
  /** Brekkpunkt og oppover komponenten skal vises.  */
  showAbove?: ScreenSizeLiteral;
}

export type BreakpointBasedProp<T> = {
  [k in ScreenSizeLiteral]?: T;
};

export type ResponsiveProp<T> = T | BreakpointBasedProp<T>;

export interface CSSProps {
  /**Inline style.*/
  style?: CSSProperties;
}

interface PrimitiveLayoutProps {
  /** CSS `width`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  width?: ResponsiveProp<StandardProperties['width']>;
  /** CSS `max-width`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  maxWidth?: ResponsiveProp<StandardProperties['maxWidth']>;
  /** CSS `min-width`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  minWidth?: ResponsiveProp<StandardProperties['minWidth']>;
  /** CSS `height`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  height?: ResponsiveProp<StandardProperties['height']>;
  /** CSS `max-height`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  maxHeight?: ResponsiveProp<StandardProperties['maxHeight']>;
  /** CSS `min-height`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  minHeight?: ResponsiveProp<StandardProperties['minHeight']>;
  /** CSS `overflow`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  overflow?: ResponsiveProp<StandardProperties['overflow']>;
  /** CSS `overflow-y`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  overflowY?: ResponsiveProp<StandardProperties['overflowY']>;
  /** CSS `overflow-x`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  overflowX?: ResponsiveProp<StandardProperties['overflowX']>;
  /** CSS `position`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  position?: ResponsiveProp<Property.Position>;
  /** CSS `top`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
  top?: ResponsiveProp<StandardProperties['top'] | SpacingScale>;
  /** CSS `bottom`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
  bottom?: ResponsiveProp<StandardProperties['bottom'] | SpacingScale>;
  /** CSS `left`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
  left?: ResponsiveProp<StandardProperties['left'] | SpacingScale>;
  /** CSS `right`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
  right?: ResponsiveProp<StandardProperties['right'] | SpacingScale>;
  /** CSS `padding`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
  padding?: ResponsiveProp<StandardProperties['padding'] | SpacingScale>;
  /** CSS `padding-inline`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
  paddingInline?: ResponsiveProp<
    StandardProperties['paddingInline'] | SpacingScale
  >;
  /** CSS `padding-block`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser.*/
  paddingBlock?: ResponsiveProp<
    StandardProperties['paddingBlock'] | SpacingScale
  >;
  /** CSS `margin`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser.*/
  margin?: ResponsiveProp<StandardProperties['margin'] | SpacingScale>;
  /** CSS `margin-inline`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser.*/
  marginInline?: ResponsiveProp<
    StandardProperties['marginInline'] | SpacingScale
  >;
  /** CSS `margin-block`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser.*/
  marginBlock?: ResponsiveProp<
    StandardProperties['marginBlock'] | SpacingScale
  >;
  /** CSS `display`.  Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  display?: ResponsiveProp<StandardProperties['display']>;
  /** CSS `flex-direction`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  flexDirection?: ResponsiveProp<StandardProperties['flexDirection']>;
  /** CSS `flex-basis`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  flexBasis?: ResponsiveProp<StandardProperties['flexBasis']>;
  /** CSS `flex-wrap`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  flexWrap?: ResponsiveProp<StandardProperties['flexWrap']>;
  /** CSS `flex-flow`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  flexFlow?: ResponsiveProp<StandardProperties['flexFlow']>;
  /** CSS `align-items`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  alignItems?: ResponsiveProp<StandardProperties['alignItems']>;
  /** CSS `justify-items`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  justifyItems?: ResponsiveProp<StandardProperties['justifyItems']>;
  /** CSS `align-content`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  alignContent?: ResponsiveProp<StandardProperties['alignContent']>;
  /** CSS `justify-content`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  justifyContent?: ResponsiveProp<StandardProperties['justifyContent']>;
  /** CSS `gap`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser.*/
  gap?: ResponsiveProp<StandardProperties['gap'] | SpacingScale>;
}

export type ResponsiveProps = PrimitiveDisplayHideProps & PrimitiveLayoutProps;

export type ResponsiveStackProps = Omit<
  ResponsiveProps,
  'display' | 'flexDirection'
>;
