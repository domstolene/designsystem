import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { spacing, colors } = ddsBaseTokens;

const term = {
  appearance: {
    small: {
      color: colors.DdsColorNeutralsGray7,
    },
    bold: {
      color: colors.DdsColorNeutralsGray9,
    },
  },
  firstOfType: {
    marginTop: spacing.SizesDdsSpacingLocalX1,
  },
};

const desc = {
  base: {
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
  rowDirection: {
    columnGap: spacing.SizesDdsSpacingLocalX2,
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
