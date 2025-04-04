import { type Properties } from 'csstype';

import {
  type Breakpoint,
  type RelativeColumnsOccupied,
  type ResponsiveProp,
  type SpacingScale,
  breakpoints,
} from './Responsive.types';
import {
  type BorderColor,
  type PaperBackground,
  isBorderColor,
  isPaperBackground,
} from '../../../types';

export function isBreakpointObject<T>(
  value: ResponsiveProp<T>,
): value is { [k in Breakpoint]?: T } {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export const getBreakpointFromScreenWidth = (width: number) => {
  if (width > 1919) return 'xl';
  if (width >= 1280) return 'lg';
  if (width >= 960) return 'md';
  if (width >= 600) return 'sm';
  return 'xs';
};

const SPACING_SCALES: Array<SpacingScale> = [
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
];

export const isSpacingScale = (value: unknown): value is SpacingScale => {
  return (
    typeof value === 'string' && SPACING_SCALES.includes(value as SpacingScale)
  );
};

export const isRelativeGridColumn = (
  type: unknown,
): type is RelativeColumnsOccupied => {
  return type === 'all' || type === 'firstHalf' || type === 'secondHalf';
};

export function spacingPropToToken(value: string): string {
  return value.replace(/\./g, '-');
}

const getSpacingToken = (v: SpacingScale): string =>
  `var(--dds-spacing-${spacingPropToToken(v)})`;

const getColorToken = (v: PaperBackground | BorderColor): string =>
  `var(--dds-color-${v})`;

const relativeGridColumnToken = (
  v: RelativeColumnsOccupied,
  bp?: Breakpoint,
): string => {
  if (v === 'all') return '1 / -1';
  if (!bp) return '';
  return v === 'firstHalf'
    ? `1 / calc(var(--dds-grid-${bp}-count) / 2 + 1)`
    : `calc(var(--dds-grid-${bp}-count) / 2 + 1) / -1`;
};

const getValue = (v: string, bp?: Breakpoint): string => {
  if (isPaperBackground(v) || isBorderColor(v)) return getColorToken(v);
  if (isSpacingScale(v)) return getSpacingToken(v);
  if (isRelativeGridColumn(v)) return relativeGridColumnToken(v, bp);
  return v;
};

const convertMultiValue = (value: string, bp?: Breakpoint) =>
  value
    .split(' ')
    .map(v => getValue(v, bp))
    .join(' ');

export function getResponsiveCSSProperties<T>(
  property?: ResponsiveProp<T>,
  prefix?: string,
  suffix?: string,
): Properties | undefined {
  if (!property) return;

  const properties: Properties = {};
  const pPrefix = `--dds-${prefix}`;
  const pSuffix = suffix ? `-${suffix}` : '';

  if (isBreakpointObject(property)) {
    breakpoints.forEach(bp => {
      if (property[bp]) {
        (properties as Record<string, string>)[`${pPrefix}-${bp}${pSuffix}`] =
          convertMultiValue(property[bp].toString(), bp);
      }
    });
  } else {
    (properties as Record<string, string>)[`${pPrefix}${pSuffix}`] =
      convertMultiValue(property.toString());
  }

  return properties;
}

export function applyResponsiveStyle<T>(
  p: T,
  bp?: Breakpoint,
  largeScreenP?: T,
): ResponsiveProp<T> | undefined {
  if (!bp) return largeScreenP;
  const bpIndex = breakpoints.indexOf(bp);
  return breakpoints.reduce((acc, curr, index) => {
    return { ...acc, [curr]: index <= bpIndex ? p : largeScreenP };
  }, {});
}
