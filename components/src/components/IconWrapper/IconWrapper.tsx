import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { HTMLAttributes, ReactNode } from 'react';
import { Property } from 'csstype';
import { iconPaths, IconName } from '../../icons';

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
export function isIconName(name: string): name is IconName {
  return iconPaths.hasOwnProperty(name);
}

export const getIcon = (iconName: string): ReactNode => {
  if (isIconName(iconName)) return iconPaths[iconName];
  return null;
};

export type IconSize = 'small' | 'medium' | 'large' | 'inline';

export type IconWrapperProps = {
  /**Ikon. */
  Icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  /**Størrelsen til ikonet. */
  iconSize?: IconSize;
  /**Fargen til ikonet. */
  color?: Property.Color;
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

export type IconWrapperProps2 = {
  /**Størrelsen til ikonet. */
  iconSize?: IconSize;
  /**Fargen til ikonet. */
  color?: Property.Color;
  /**Navnet til ikonet. */
  iconName: IconName;
} & HTMLAttributes<SVGElement>;

export function IconWrapper2({
  iconSize = 'medium',
  color = 'currentcolor',
  className,
  style,
  iconName,
  title,
  'aria-hidden': ariaHidden = true,

  ...rest
}: IconWrapperProps2) {
  const size = getSize(iconSize);
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      fill={color}
      aria-hidden={ariaHidden}
    >
      <title>{title}</title>
      {getIcon(iconName)}
    </svg>
  );
}
