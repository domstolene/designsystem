import { type Properties } from 'csstype';

import {
  type RelativeColumnsOccupied,
  type ResponsiveProp,
  type ScreenSizeLiteral,
  type SpacingScale,
  screenSizeLiterals,
} from './Responsive.types';

export function isBreakpointObject<T>(
  value: ResponsiveProp<T>,
): value is { [k in ScreenSizeLiteral]?: T } {
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

const spacingToken = (v: SpacingScale): string =>
  `var(--dds-spacing-${spacingPropToToken(v)})`;

const relativeGridColumnToken = (
  v: RelativeColumnsOccupied,
  bp?: ScreenSizeLiteral,
): string => {
  if (v === 'all') return '1 / -1';
  if (!bp) return '';
  return v === 'firstHalf'
    ? `1 / calc(var(--dds-grid-${bp}-count) / 2 + 1)`
    : `calc(var(--dds-grid-${bp}-count) / 2 + 1) / -1`;
};

const getValue = (v: string, bp?: ScreenSizeLiteral): string =>
  isSpacingScale(v)
    ? spacingToken(v)
    : isRelativeGridColumn(v)
      ? relativeGridColumnToken(v, bp)
      : v;

const convertMultiValue = (value: string, bp?: ScreenSizeLiteral) =>
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
    screenSizeLiterals.forEach(bp => {
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
