import { type Properties } from 'csstype';

import {
  BREAKPOINTS,
  type Breakpoint,
  type RelativeColumnsOccupied,
  type ResponsiveProp,
  SPACING_SCALES,
  type SpacingScale,
} from './Responsive.types';
import {
  type BorderColor,
  type PaperBackground,
  isBorderColor,
  isPaperBackground,
} from '../../../types';

export function isBreakpointObject<T>(
  value: ResponsiveProp<T>,
): value is Partial<Record<Breakpoint, T>> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export const getBreakpointFromScreenWidth = (width: number) => {
  if (width > 1919) return 'xl';
  if (width >= 1280) return 'lg';
  if (width >= 960) return 'md';
  if (width >= 600) return 'sm';
  return 'xs';
};

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
    BREAKPOINTS.forEach(bp => {
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

/**
 * Setter styling opptil et brekkpunkt og muligens annen styling over det brekkpunktet.
 * @param p styling under og inkludert brekkpunktet.
 * @param bp brekkpunktet.
 * @param largeScreenP styling over brekkpunktet.
 * @returns responsiv styling for en CSS prop.
 */

export function styleUpToBreakpoint<T>(
  p: T,
  bp?: Breakpoint,
  largeScreenP?: T,
): ResponsiveProp<T> | undefined {
  if (!bp) return largeScreenP;
  const bpIndex = BREAKPOINTS.indexOf(bp);
  return BREAKPOINTS.reduce((acc, curr, index) => {
    return { ...acc, [curr]: index <= bpIndex ? p : largeScreenP };
  }, {});
}
