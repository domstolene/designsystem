import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { spacing } = ddsBaseTokens;

const wrapper = {
  padding: `${spacing.SizesDdsSpacingX075} ${spacing.SizesDdsSpacingX1} ${spacing.SizesDdsSpacingX15} ${spacing.SizesDdsSpacingX1}`,
};
const closeButton = {
  top: spacing.SizesDdsSpacingX025,
  right: spacing.SizesDdsSpacingX025,
};

const title = {
  marginRight: spacing.SizesDdsSpacingX2,
};

const content = {
  noTitle: {
    marginTop: spacing.SizesDdsSpacingX2,
  },
};

export const popoverTokens = {
  content,
  wrapper,
  closeButton,
  title,
};
