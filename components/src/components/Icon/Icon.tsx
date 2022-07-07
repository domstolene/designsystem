import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { Property } from 'csstype';
import { iconPaths } from '../../icons';
import styled from 'styled-components';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';

const getSize = (iconSize: IconSize): string => {
  switch (iconSize) {
    case 'small':
      return ddsBaseTokens.iconSizes.DdsIconsizeSmall;
    case 'medium':
      return ddsBaseTokens.iconSizes.DdsIconsizeMedium;
    case 'large':
      return ddsBaseTokens.iconSizes.DdsIconsizeLarge;
    case 'inherit':
      return '1em';
    default:
      return ddsBaseTokens.iconSizes.DdsIconsizeMedium;
  }
};

export type IconName = keyof typeof iconPaths;

export type IconSize = 'small' | 'medium' | 'large' | 'inherit';

const Svg = styled.svg`
  display: inline-block;
  transition: fill 0.2s;
  flex-shrink: 0;
`;

export type IconProps = BaseComponentProps<
  SVGElement,
  {
    /**Navnet til ikonet. */
    iconName: IconName;
    /**Størrelsen på ikonet. */
    iconSize?: IconSize;
    /**Fargen på ikonet. */
    color?: Property.Color;
  }
>;

export function Icon(props: IconProps) {
  const {
    id,
    iconSize = 'medium',
    color = 'currentcolor',
    iconName,
    htmlProps = {},
    ...rest
  } = props;
  const { title, 'aria-hidden': ariaHidden = true } = htmlProps;

  const size = getSize(iconSize);

  return (
    <Svg
      {...getBaseHTMLProps(id, htmlProps, rest)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      fill={color}
      aria-hidden={ariaHidden}
    >
      {title && <title>{title}</title>}
      {iconPaths[iconName]}
    </Svg>
  );
}
