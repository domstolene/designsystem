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
import { type IconColor } from '../../utils';
import { SIZE_SCALE } from '../layout/common/Responsive.types';

export const getSize = (iconSize: IconSize): string => {
  switch (iconSize) {
    case 'component':
      return 'var(--dds-size-icon-component)';
    case 'inherit':
      return '1em';
    default:
      return `var(--dds-size-${iconSize})`;
  }
};

export const ICON_SIZES = createSizes(...SIZE_SCALE, 'inherit', 'component');
export type IconSize = (typeof ICON_SIZES)[number];

export type IconProps<I extends SvgIcon = SvgIcon> = BaseComponentProps<
  SVGSVGElement,
  {
    /**Ikonet importert fra `@norges-domstoler/dds-components`. */
    icon: I;
    /**Størrelsen på ikonet.
     * @default "6"
     */
    iconSize?: IconSize;
    /**Fargen på ikonet.
     * @default "currentcolor"
     */
    color?: IconColor;
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
    iconSize = '6',
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
      {...getBaseHTMLProps(id, className, style, htmlProps, rest)}
      height={size}
      width={size}
      fill={color}
      aria-hidden={htmlProps?.['aria-hidden'] ?? true}
      {...(iconState ? { iconState } : {})}
    />
  );
}

Icon.displayName = 'Icon';
