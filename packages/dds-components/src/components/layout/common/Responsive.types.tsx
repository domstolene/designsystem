import { type Property } from 'csstype';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export const breakpoints: Array<Breakpoint> = ['xs', 'sm', 'md', 'lg', 'xl'];

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

export interface PrimitiveDisplayProps {
  /** Skjuler komponenten fra og med det angitte brekkpunktet og nedover. */
  hideBelow?: Breakpoint;
  /** Viser komponenten kun under det angitte brekkpunktet. */
  showBelow?: Breakpoint;
}

export type BreakpointBasedProp<T> = {
  [k in Breakpoint]?: T;
};

export type ResponsiveProp<T> = T | BreakpointBasedProp<T>;

interface PrimitiveLayoutProps {
  /** CSS `width`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  width?: ResponsiveProp<Property.Width>;
  /** CSS `max-width`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  maxWidth?: ResponsiveProp<Property.MaxWidth>;
  /** CSS `min-width`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  minWidth?: ResponsiveProp<Property.MinWidth>;
  /** CSS `height`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  height?: ResponsiveProp<Property.Height>;
  /** CSS `max-height`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  maxHeight?: ResponsiveProp<Property.MaxHeight>;
  /** CSS `min-height`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  minHeight?: ResponsiveProp<Property.MinHeight>;
  /** CSS `overflow`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  overflow?: ResponsiveProp<Property.Overflow>;
  /** CSS `overflow-y`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  overflowY?: ResponsiveProp<Property.OverflowY>;
  /** CSS `overflow-x`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  overflowX?: ResponsiveProp<Property.OverflowX>;
  /** CSS `position`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  position?: ResponsiveProp<Property.Position>;
  /** CSS `top`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
  top?: ResponsiveProp<Property.Top | SpacingScale>;
  /** CSS `bottom`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
  bottom?: ResponsiveProp<Property.Bottom | SpacingScale>;
  /** CSS `left`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
  left?: ResponsiveProp<Property.Left | SpacingScale>;
  /** CSS `right`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
  right?: ResponsiveProp<Property.Right | SpacingScale>;
  /** CSS `padding`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
  padding?: ResponsiveProp<Property.Padding | SpacingScale>;
  /** CSS `padding-inline`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
  paddingInline?: ResponsiveProp<Property.PaddingInline | SpacingScale>;
  /** CSS `padding-block`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser.*/
  paddingBlock?: ResponsiveProp<Property.PaddingBlock | SpacingScale>;
  /** CSS `margin`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser.*/
  margin?: ResponsiveProp<Property.Margin | SpacingScale>;
  /** CSS `margin-inline`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser.*/
  marginInline?: ResponsiveProp<Property.MarginInline | SpacingScale>;
  /** CSS `margin-block`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser.*/
  marginBlock?: ResponsiveProp<Property.MarginBlock | SpacingScale>;
  /** CSS `display`.  Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  display?: ResponsiveProp<Property.Display>;
  /** CSS `flex-direction`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  flexDirection?: ResponsiveProp<Property.FlexDirection>;
  /** CSS `flex-basis`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  flexBasis?: ResponsiveProp<Property.FlexBasis>;
  /** CSS `flex-wrap`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  flexWrap?: ResponsiveProp<Property.FlexWrap>;
  /** CSS `flex-flow`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  flexFlow?: ResponsiveProp<Property.FlexFlow>;
  /** CSS `align-items`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  alignItems?: ResponsiveProp<Property.AlignItems>;
  /** CSS `justify-items`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  justifyItems?: ResponsiveProp<Property.JustifyItems>;
  /** CSS `align-content`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  alignContent?: ResponsiveProp<Property.AlignContent>;
  /** CSS `justify-content`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  justifyContent?: ResponsiveProp<Property.JustifyContent>;
  /** CSS `text-align`. Støtter standardverdier per brekkpunkt eller samme for alle skjermstørrelser. */
  textAlign?: ResponsiveProp<Property.TextAlign>;
  /** CSS `gap`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser.*/
  gap?: ResponsiveProp<Property.Gap | SpacingScale>;
  /** CSS `row-gap`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
  rowGap?: ResponsiveProp<Property.RowGap | SpacingScale>;
  /** CSS `column-gap`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser. */
  columnGap?: ResponsiveProp<Property.ColumnGap | SpacingScale>;
}

export type ResponsiveProps = PrimitiveDisplayProps & PrimitiveLayoutProps;

export type ResponsiveStackProps = Omit<
  ResponsiveProps,
  'display' | 'flexDirection'
>;
