import { type Property } from 'csstype';

import { type ExtractStrict } from '../../..';

export const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type Breakpoint = (typeof BREAKPOINTS)[number];

export const SPACING_SCALES = [
  'x0',
  'x0.125',
  'x0.25',
  'x0.5',
  'x0.75',
  'x1',
  'x1.5',
  'x2',
  'x2.5',
  'x3',
  'x4',
  'x6',
  'x10',
] as const;

export type SpacingScale = (typeof SPACING_SCALES)[number];

export type RelativeColumnsOccupied = 'all' | 'firstHalf' | 'secondHalf';

export interface PrimitiveDisplayProps {
  /** Skjuler komponenten fra og med det angitte brekkpunktet og nedover. */
  hideBelow?: Breakpoint;
  /** Viser komponenten kun under det angitte brekkpunktet. */
  showBelow?: Breakpoint;
}

export type BreakpointBasedProp<T> = Partial<Record<Breakpoint, T>>;

export type ResponsiveProp<T> = T | BreakpointBasedProp<T>;

export interface PrimitiveLayoutProps {
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
  /** CSS `place-items`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  placeItems?: ResponsiveProp<Property.PlaceItems>;
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
  /** CSS `word-break`. Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  wordBreak?: ResponsiveProp<Property.WordBreak>;
}

export type ResponsiveProps = PrimitiveDisplayProps & PrimitiveLayoutProps;

export type ResponsiveStackProps = Omit<
  ResponsiveProps,
  'display' | 'flexDirection'
>;

export type ResponsiveGridProps = Omit<ResponsiveProps, 'display'> & {
  /** CSS `display`.  Støtter verdi per brekkpunkt eller samme for alle skjermstørrelser. */
  display?: ExtractStrict<Property.Display, 'grid' | 'inline-grid'>;
  /** CSS `grid-template-columns`. Støtter standardverdier per brekkpunkt eller samme for alle skjermstørrelser. */
  gridTemplateColumns?: ResponsiveProp<Property.GridTemplateColumns>;
  /** CSS `grid`. Støtter standardverdier per brekkpunkt eller samme for alle skjermstørrelser. */
  grid?: ResponsiveProp<Property.Grid>;
  /** CSS `grid-auto-columns`. Støtter standardverdier per brekkpunkt eller samme for alle skjermstørrelser. */
  gridAutoColumns?: ResponsiveProp<Property.GridAutoColumns>;
  /** CSS `grid-auto-rows`. Støtter standardverdier per brekkpunkt eller samme for alle skjermstørrelser. */
  gridAutoRows?: ResponsiveProp<Property.GridAutoRows>;
  /** CSS `grid-auto-flow`. Støtter standardverdier per brekkpunkt eller samme for alle skjermstørrelser. */
  gridAutoFlow?: ResponsiveProp<Property.GridAutoFlow>;
  /** CSS `grid-template-rows`. Støtter standardverdier per brekkpunkt eller samme for alle skjermstørrelser. */
  gridTemplateRows?: ResponsiveProp<Property.GridTemplateRows>;
  /** CSS `grid-template`. Støtter standardverdier per brekkpunkt eller samme for alle skjermstørrelser. */
  gridTemplate?: ResponsiveProp<Property.GridTemplate>;
  /** CSS `grid-template-areas`. Støtter standardverdier per brekkpunkt eller samme for alle skjermstørrelser. */
  gridTemplateAreas?: ResponsiveProp<Property.GridTemplateAreas>;
};

export type ResponsiveBleedProps = PrimitiveLayoutProps & {
  /**Setter negativ CSS `margin-inline`, overskriver prop `marginInline`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser.*/
  bleedMarginInline?: ResponsiveProp<Property.MarginInline | SpacingScale>;
  /**Setter negativ CSS `margin-block`, overskriver prop `marginBlock`. Støtter standardverdier og dds spacing tokens skala, per brekkpunkt eller samme for alle skjermstørrelser.*/
  bleedMarginBlock?: ResponsiveProp<Property.MarginBlock | SpacingScale>;
};
