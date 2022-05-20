import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { HTMLAttributes } from 'react';
import * as CSS from 'csstype';

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

export type IconWrapperProps = {
  /**Ikon. */
  Icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  /**Størrelsen til ikonet. */
  iconSize?: IconSize;
  /**Fargen til ikonet. */
  color?: CSS.Property.Color;
} & HTMLAttributes<SVGElement>;

export function IconWrapper({
  Icon,
  iconSize = 'medium',
  color,
  className,
  style,
  ...rest
}: IconWrapperProps) {
  const PropIcon = Icon;
  const size = getSize(iconSize);
  return (
    <PropIcon
      className={className}
      style={{ ...style, color: color ? color : 'inherit', fontSize: size }}
      {...rest}
    />
  );
}
