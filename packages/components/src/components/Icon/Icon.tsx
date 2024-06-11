import { ddsTokens } from '@norges-domstoler/dds-design-tokens';

import { type SvgIcon } from './utils';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { type TextColor } from '../../utils';

const getSize = (iconSize: IconSize): string => {
  switch (iconSize) {
    case 'small':
      return ddsTokens.DdsIconSizeSmall;
    case 'medium':
      return ddsTokens.DdsIconSizeMedium;
    case 'large':
      return ddsTokens.DdsIconSizeLarge;
    case 'inherit':
      return '1em';
    default:
      return ddsTokens.DdsIconSizeMedium;
  }
};

export type IconSize = 'small' | 'medium' | 'large' | 'inherit';

export type IconProps = BaseComponentProps<
  SVGSVGElement,
  {
    /**Ikonet importert fra `@norges-domstoler/dds-components`. */
    icon: SvgIcon;
    /**Størrelsen på ikonet. */
    iconSize?: IconSize;
    /**Fargen på ikonet. */
    color?: TextColor;
  }
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
