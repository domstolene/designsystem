import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const tokens = {
  base: {
    color: ddsBaseTokens.colors.DdsColorNeutralsGray6,
    borderRadius: ddsBaseTokens.borderRadius.RadiiDdsBorderRadius1Radius,
    size: ddsBaseTokens.iconSizes.DdsIconsizeMedium,
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
};

export function favStarTokens(variant?: keyof typeof tokens.variants) {
  return { ...tokens.base, ...(variant ? tokens.variants[variant] : {}) };
}
