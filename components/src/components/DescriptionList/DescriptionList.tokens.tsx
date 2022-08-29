import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { spacing, fontPackages, colors } = ddsBaseTokens;

const term = {
  appearance: {
    small: {
      font: fontPackages.body_sans_01.base,
      color: colors.DdsColorNeutralsGray7,
      lineHeight: fontPackages.body_sans_01.base.lineHeight,
      fontSize: fontPackages.body_sans_01.base.fontSize,
      letterSpacing: fontPackages.body_sans_01.base.letterSpacing,
      fontFamily: fontPackages.body_sans_01.base.fontFamily,
      fontWeight: fontPackages.body_sans_01.base.fontWeight,
      fontStyle: fontPackages.body_sans_01.base.fontStyle,
    },
    bold: {
      font: fontPackages.body_sans_03.base,
      lineHeight: fontPackages.body_sans_03.base.lineHeight,
      fontSize: fontPackages.body_sans_03.base.fontSize,
      letterSpacing: fontPackages.body_sans_03.base.letterSpacing,
      fontFamily: fontPackages.body_sans_03.base.fontFamily,
      fontWeight: 600,
      fontStyle: fontPackages.body_sans_03.base.fontStyle,
      color: colors.DdsColorNeutralsGray9,
    },
  },
  firstOfType: {
    marginTop: spacing.SizesDdsSpacingLocalX1,
  },
};

const desc = {
  base: {
    font: fontPackages.body_sans_03.base,
    gap: spacing.SizesDdsSpacingLocalX025,
    color: colors.DdsColorNeutralsGray9,
  },
  lastChild: {
    marginBottom: spacing.SizesDdsSpacingLocalX1,
  },
};

const list = {
  beforeNextTerm: {
    marginTop: spacing.SizesDdsSpacingLocalX2,
  },
};

const group = {
  base: {
    margin: spacing.SizesDdsSpacingLocalX2,
  },
};

export const descriptionListTokens = {
  term,
  desc,
  list,
  group,
};
