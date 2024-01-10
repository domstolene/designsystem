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
    marginTop: spacing.SizesDdsSpacingX1,
  },
};

const desc = {
  base: {
    gap: spacing.SizesDdsSpacingX025,
    color: colors.DdsColorNeutralsGray9,
  },
  lastChild: {
    marginBottom: spacing.SizesDdsSpacingX1,
  },
};

const list = {
  beforeNextTerm: {
    marginTop: spacing.SizesDdsSpacingX2,
  },
  rowDirection: {
    columnGap: spacing.SizesDdsSpacingX2,
  },
};

const group = {
  base: {
    margin: spacing.SizesDdsSpacingX2,
  },
};

export const descriptionListTokens = {
  term,
  desc,
  list,
  group,
};
