import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const tokens = {
  base: {
    color: ddsBaseTokens.colors.DdsColorNeutralsGray6,
    borderRadius: ddsBaseTokens.borderRadius.RadiiDdsBorderRadius1Radius,
    backgroundColor: 'transparent',
  },
  variants: {
    hover: {
      color: ddsBaseTokens.colors.DdsColorInteractiveDark,
      backgroundColor: ddsBaseTokens.colors.DdsColorInteractiveLightest,
    },
    checked: {
      color: ddsBaseTokens.colors.DdsColorInteractiveBase,
    },
    checkedHover: {
      color: ddsBaseTokens.colors.DdsColorInteractiveDark,
    },
  },
  medium: {
    size: ddsBaseTokens.iconSizes.DdsIconsizeMedium,
  },
  large: {
    size: ddsBaseTokens.iconSizes.DdsIconsizeLarge,
  },
} as const;

export function favStarTokens(
  size: 'medium' | 'large',
  variant?: keyof typeof tokens.variants,
) {
  return {
    ...tokens.base,
    ...tokens[size],
    ...(variant ? tokens.variants[variant] : {}),
  };
}
