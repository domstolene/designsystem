import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing } = ddsBaseTokens;

const wrapper = {
  padding: `${spacing.SizesDdsSpacingLocalX075}`,
};

const svgArrow = {
  border: {
    fill: colors.DdsColorPrimaryLighter,
  },
  background: {
    fill: colors.DdsColorNeutralsWhite,
  },
};

export const tooltipTokens = {
  wrapper,
  svgArrow,
};
