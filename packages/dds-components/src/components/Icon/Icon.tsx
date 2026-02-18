import { type ComponentType } from 'react';

import {
  type IconStatesOf,
  type SvgIcon,
  type SvgPropsWithState,
} from './utils';
import {
  type BaseComponentProps,
  createSizes,
  getBaseHTMLProps,
} from '../../types';
import { type TextColor } from '../../utils';

export const getSize = (iconSize: IconSize): string => {
  switch (iconSize) {
    case 'small':
      return 'var(--dds-size-icon-small)';
    case 'medium':
      return 'var(--dds-size-icon-medium)';
    case 'large':
      return 'var(--dds-size-icon-large)';
    case 'component':
      return 'var(--dds-size-icon-component)';
    case 'inherit':
      return '1em';
    default:
      return 'var(--dds-size-icon-medium)';
  }
};

export const ICON_SIZES = createSizes(
  'large',
  'medium',
  'small',
  'inherit',
  'component',
);
export type IconSize = (typeof ICON_SIZES)[number];

export type IconProps<I extends SvgIcon = SvgIcon> = BaseComponentProps<
  SVGSVGElement,
  {
    /**Ikonet importert fra `@norges-domstoler/dds-components`. */
    icon: I;
    /**Størrelsen på ikonet.
     * @default "medium"
     */
    iconSize?: IconSize;
    /**Fargen på ikonet.
     * @default "currentcolor"
     */
    color?: TextColor;
    /**
     * Ikon-state hvis ikonet kan animeres; types basert på ikon valgt i `icon` prop. Statiske ikoner støtter ikke propen.
     */
    iconState?: IconStatesOf<I>;
  },
  SvgPropsWithState<I>
>;

export function Icon<I extends SvgIcon = SvgIcon>(props: IconProps<I>) {
  const {
    id,
    iconSize = 'medium',
    color = 'currentcolor',
    icon,
    className,
    style,
    htmlProps,
    iconState,
    ...rest
  } = props;

  const size = getSize(iconSize);
  const C = icon as ComponentType<SvgPropsWithState<I>>;

  return (
    <C
      {...getBaseHTMLProps(id, className, style, htmlProps, {
        ...rest,
      })}
      height={size}
      width={size}
      fill={color}
      aria-hidden={htmlProps?.['aria-hidden'] ?? true}
      {...(iconState ? { iconState } : {})}
    />
  );
}

Icon.displayName = 'Icon';
