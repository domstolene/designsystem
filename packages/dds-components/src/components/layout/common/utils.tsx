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

const TOKEN_PREFIX = 'dds';

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

const isColor = (value: unknown): value is PaperBackground | BorderColor => {
  return (
    typeof value === 'string' &&
    (isBorderColor(value) || isPaperBackground(value))
  );
};

export function spacingPropToToken(value: string): string {
  return value.replace(/\./g, '-');
}

const getSpacingToken = (v: SpacingScale): string =>
  `var(--${TOKEN_PREFIX}-spacing-${spacingPropToToken(v)})`;

const getColorToken = (v: PaperBackground | BorderColor): string =>
  `var(--${TOKEN_PREFIX}-color-${v})`;

const relativeGridColumnToken = (
  v: RelativeColumnsOccupied,
  bp?: Breakpoint,
): string => {
  if (v === 'all') return '1 / -1';
  if (!bp) return '';
  return v === 'firstHalf'
    ? `1 / calc(var(--${TOKEN_PREFIX}-grid-${bp}-count) / 2 + 1)`
    : `calc(var(--${TOKEN_PREFIX}-grid-${bp}-count) / 2 + 1) / -1`;
};

const getValue = (v: string, bp?: Breakpoint, invert?: boolean): string => {
  let output: string;

  if (isColor(v)) output = getColorToken(v);
  else if (isSpacingScale(v)) output = getSpacingToken(v);
  else if (isRelativeGridColumn(v)) output = relativeGridColumnToken(v, bp);
  else output = v;

  return invert ? invertValue(output) : output;
};

const convertMultiValue = (value: string, bp?: Breakpoint, invert?: boolean) =>
  value
    .split(' ')
    .map(v => getValue(v, bp, invert))
    .join(' ');

const invertValue = (v: string): string =>
  v === '0' ? '0' : `calc(-1 * ${v})`;

export function getResponsiveCSSProperties<T>(
  property?: ResponsiveProp<T>,
  prefix?: string,
  suffix?: string,
  invert?: boolean,
): Properties | undefined {
  if (!property) return;

  const properties: Properties = {};
  const pPrefix = `--${TOKEN_PREFIX}-${prefix}`;
  const pSuffix = suffix ? `-${suffix}` : '';

  if (isBreakpointObject(property)) {
    BREAKPOINTS.forEach(bp => {
      if (property[bp]) {
        (properties as Record<string, string>)[`${pPrefix}-${bp}${pSuffix}`] =
          convertMultiValue(property[bp].toString(), bp, invert);
      }
    });
  } else {
    (properties as Record<string, string>)[`${pPrefix}${pSuffix}`] =
      convertMultiValue(property.toString(), undefined, invert);
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
