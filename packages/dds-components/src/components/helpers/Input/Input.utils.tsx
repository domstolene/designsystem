import { type ResponsiveProps } from '../../layout';

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
  return width ? width : defaultW ? defaultW : 'var(--dds-input-default-width)';
}
