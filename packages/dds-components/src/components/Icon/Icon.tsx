import { type HTMLAttributes } from 'react';

import { type SvgIcon } from './utils';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { type TextColor } from '../../utils';

const getSize = (iconSize: IconSize): string => {
  switch (iconSize) {
    case 'small':
      return 'var(--dds-icon-size-small)';
    case 'medium':
      return 'var(--dds-icon-size-medium)';
    case 'large':
      return 'var(--dds-icon-size-large)';
    case 'inherit':
      return '1em';
    default:
      return 'var(--dds-icon-size-medium)';
  }
};

export type IconSize = 'small' | 'medium' | 'large' | 'inherit';

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
