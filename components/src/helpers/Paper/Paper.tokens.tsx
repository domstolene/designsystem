import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, borderRadius, font } = ddsBaseTokens;

const paper = {
  backgroundColor: colors.DdsColorNeutralsWhite,
  borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
  fontFamily: font.DdsFontBodySans01FontFamily,
};

export const paperTokens = {
  paper,
};
