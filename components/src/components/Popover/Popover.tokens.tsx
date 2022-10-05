import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { spacing } = ddsBaseTokens;

const wrapper = {
  padding: `${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX1} ${spacing.SizesDdsSpacingLocalX15} ${spacing.SizesDdsSpacingLocalX1}`,
};
const closeButton = {
  position: 'absolute',
  top: spacing.SizesDdsSpacingLocalX025,
  right: spacing.SizesDdsSpacingLocalX025,
};

const title = {
  marginRight: spacing.SizesDdsSpacingLocalX2,
};

const content = {
  noTitle: {
    marginTop: spacing.SizesDdsSpacingLocalX2,
  },
};

export const popoverTokens = {
  content,
  wrapper,
  closeButton,
  title,
};
