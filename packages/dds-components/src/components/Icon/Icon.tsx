import { type HTMLAttributes } from 'react';

import { type SvgIcon } from './utils';
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
  'small',
  'medium',
  'large',
  'inherit',
  'component',
);
export type IconSize = (typeof ICON_SIZES)[number];

export type IconProps = BaseComponentProps<
  SVGSVGElement,
  {
    /**Ikonet importert fra `@norges-domstoler/dds-components`. */
    icon: SvgIcon;
    /**Størrelsen på ikonet.
     * @default "medium"
     */
    iconSize?: IconSize;
    /**Fargen på ikonet.
     * @default "currentcolor"
     */
    color?: TextColor;
  },
  Omit<HTMLAttributes<SVGSVGElement>, 'color'>
>;

export function Icon(props: IconProps) {
  const {
    id,
    iconSize = 'medium',
    color = 'currentcolor',
    icon,
    className,
    htmlProps = {},
    ...rest
  } = props;
  const { title, 'aria-hidden': ariaHidden = true } = htmlProps;

  const size = getSize(iconSize);

  return icon({
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    title,
    height: size,
    width: size,
    fill: color,
    'aria-hidden': ariaHidden,
  });
}

Icon.displayName = 'Icon';
