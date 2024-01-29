import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const navTokens = {
  base: {
    padding: [
      ddsBaseTokens.spacing.SizesDdsSpacingX075,
      ddsBaseTokens.spacing.SizesDdsSpacingX1,
    ].join(' '),
    borderRadius: ddsBaseTokens.borderRadius.RadiiDdsBorderRadius1Radius,

    backgroundColor: 'transparent',
    color: ddsBaseTokens.colors.DdsColorNeutralsGray6,
    hover: {
      backgroundColor: ddsBaseTokens.colors.DdsColorNeutralsGray1,
      color: ddsBaseTokens.colors.DdsColorNeutralsGray9,
    },
  },
  active: {
    base: {
      backgroundColor: ddsBaseTokens.colors.DdsColorInteractiveLightest,
      color: ddsBaseTokens.colors.DdsColorNeutralsGray9,
    },
    hover: {
      backgroundColor: ddsBaseTokens.colors.DdsColorInteractiveLightest,
      color: ddsBaseTokens.colors.DdsColorNeutralsGray9,
    },
  },
};

interface NavigationItemState {
  active: boolean;
}

export function getNavTokens({ active }: NavigationItemState) {
  return {
    ...navTokens.base,
    ...(active ? navTokens.active.base : {}),
    hover: {
      ...navTokens.base.hover,
      ...(active ? navTokens.active.hover : {}),
    },
  };
}
