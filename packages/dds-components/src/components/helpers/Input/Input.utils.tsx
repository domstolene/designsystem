import { type ResponsiveProps } from '../../layout';
import { BREAKPOINTS } from '../../layout/common/Responsive.types';
import { isBreakpointObject } from '../../layout/common/utils';

export function getDefaultText(
  value?: string | number | ReadonlyArray<string>,
  defaultValue?: string | number | ReadonlyArray<string>,
): string {
  if (typeof value === 'string') {
    return value;
  }

  if (typeof defaultValue === 'string') {
    return defaultValue;
  }

  return '';
}

export function getInputWidth(
  width?: ResponsiveProps['width'],
  defaultW?: ResponsiveProps['width'] | false | null,
): ResponsiveProps['width'] {
  const fallback: ResponsiveProps['width'] = defaultW
    ? defaultW
    : 'var(--dds-input-default-width)';

  if (isBreakpointObject(width)) {
    return BREAKPOINTS.reduce((acc, bp) => {
      return {
        ...acc,
        [bp]: bp in width ? width[bp] : fallback,
      };
    }, {});
  }

  return width ?? fallback;
}
