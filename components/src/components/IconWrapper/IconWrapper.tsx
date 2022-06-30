import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { HTMLAttributes } from 'react';
import { Property } from 'csstype';

const getSize = (iconSize: IconSize): string => {
  switch (iconSize) {
    case 'small':
      return ddsBaseTokens.iconSizes.DdsIconsizeSmall;
    case 'medium':
      return ddsBaseTokens.iconSizes.DdsIconsizeMedium;
    case 'large':
      return ddsBaseTokens.iconSizes.DdsIconsizeLarge;
    case 'inline':
      return '1em';
    default:
      return ddsBaseTokens.iconSizes.DdsIconsizeMedium;
  }
};

export type IconSize = 'small' | 'medium' | 'large' | 'inline';

type SvgIconTypeProps = SvgIconTypeMap<Record<string, unknown>, 'svg'>;

export type IconWrapperProps = {
  /**Ikon. */
  Icon: OverridableComponent<SvgIconTypeProps>;
  /**Størrelsen til ikonet. */
  iconSize?: IconSize;
  /**Fargen til ikonet. */
  color?: Property.Color;
  className?: HTMLAttributes<SVGElement>['className'];
  style?: HTMLAttributes<SVGElement>['style'];
  svgProps?: SvgIconTypeProps['props'];
};

export function IconWrapper({
  Icon,
  iconSize = 'medium',
  color,
  className,
  style,
  svgProps
}: IconWrapperProps) {
  const PropIcon = Icon;
  const size = getSize(iconSize);
  return (
    <PropIcon
      {...svgProps}
      className={className}
      style={{ ...style, color: color ? color : 'inherit', fontSize: size }}
    />
  );
}
