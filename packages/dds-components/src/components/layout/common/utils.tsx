import { type Properties, type StandardProperties } from 'csstype';

import {
  type ResponsiveProp,
  type SpacingScale,
  type StaticAndBreakpointBasedProp,
  isBreakpointObject,
  isCustomBreakpointObject,
  screenSizeLiterals,
} from './Responsive.types';

export const getBreakpointFromScreenWidth = (width: number) => {
  switch (true) {
    case width > 1919:
      return 'xl';
    case 1280 <= width && width < 1919:
      return 'lg';
    case 960 <= width && width < 1279:
      return 'md';
    case 600 <= width && width < 960:
      return 'sm';
    case width < 600:
      return 'xs';
    default:
      return 'xs';
  }
};

export const isSpacingScale = (value: unknown): value is SpacingScale => {
  return (
    typeof value === 'string' &&
    [
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
    ].includes(value)
  );
};

type HyphenSpacingProps =
  | 'x0-125'
  | 'x0-25'
  | 'x0-5'
  | 'x0-75'
  | 'x1'
  | 'x1-5'
  | 'x2'
  | 'x2-5'
  | 'x3'
  | 'x4'
  | 'x6'
  | 'x10';

export function spacingPropToCn(value: string): HyphenSpacingProps {
  return value.replace(/\./g, '-') as HyphenSpacingProps;
}

const spacingToken = (v: SpacingScale): string =>
  `var(--dds-spacing-${spacingPropToCn(v)})`;

export function getResponsiveCSSProperties<T>(
  property?: ResponsiveProp<T>,
  prefix?: string,
  suffix?: string,
  defaultPrefix?: string,
  defaultSuffix?: string,
): Properties | undefined {
  if (property === undefined) return;
  const properties: Properties = {};

  const pPrefix = `--dds-${prefix}`;
  const pSuffix = suffix ? `-${suffix}` : '';
  const breakpoints = screenSizeLiterals;
  if (isCustomBreakpointObject(property)) {
    breakpoints.forEach(bp => {
      if (property[bp]) {
        (properties as Record<string, string>)[`${pPrefix}-${bp}${pSuffix}`] =
          isSpacingScale(property[bp])
            ? spacingToken(property[bp])
            : (property[bp] as string);
      }
    });
  } else {
    (properties as Record<string, string>)[`${pPrefix}${pSuffix}`] =
      isSpacingScale(property) ? spacingToken(property) : (property as string);
  }

  if (!Object.keys(properties).length && defaultPrefix && defaultSuffix) {
    breakpoints.forEach(bp => {
      (properties as Record<string, string>)[`${pPrefix}-${bp}${pSuffix}`] =
        `var(--dds-${defaultPrefix}-${bp}-${defaultSuffix})`;
    });
  }
  return properties;
}

export function getStandardResponsiveCSSProperties<
  T extends keyof StandardProperties,
>(
  property: StaticAndBreakpointBasedProp<T>,
  prefix: string,
  suffix: string,
  defaultPrefix?: string,
  defaultSuffix?: string,
): Properties {
  const properties: Properties = {};

  const pPrefix = `--dds-${prefix}`;
  const pSuffix = `${suffix}`;
  const breakpoints = screenSizeLiterals;
  if (isBreakpointObject(property)) {
    breakpoints.forEach(bp => {
      if (property[bp]) {
        (properties as Record<string, string>)[`${pPrefix}-${bp}-${pSuffix}`] =
          property[bp] as string;
      }
    });
  } else if (property !== undefined) {
    (properties as Record<string, string>)[`${pPrefix}-${pSuffix}`] =
      property as string;
  } else if (defaultPrefix && defaultSuffix) {
    breakpoints.forEach(bp => {
      {
        (properties as Record<string, string>)[`${pPrefix}-${bp}-${pSuffix}`] =
          `var(--dds-${defaultPrefix}-${bp}-${defaultSuffix})` as string;
      }
    });
  }

  return properties;
}
