import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSProperties } from 'react';
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
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  iconSize?: IconSize;
  color?: CSS.ColorProperty;
  className?: string;
  style?: CSSProperties;
};

export function IconWrapper({
  Icon,
  iconSize = 'medium',
  color,
  className,
  style
}: IconWrapperProps) {
  const PropIcon = Icon;
  const size = getSize(iconSize);
  return (
    <PropIcon
      className={className}
      style={{ ...style, color: color ? color : 'inherit', fontSize: size }}
    />
  );
}
