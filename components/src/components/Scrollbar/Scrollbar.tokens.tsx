import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors, spacing } = ddsBaseTokens;

const track = {
  backgroundColor: 'transparent',
  borderRadius: '100px',
  width: '10px'
};

const thumb = {
  backgroundColor: colors.DdsColorPrimaryDarkest.slice(0, -2) + '0.35)',
  borderRadius: '100px',
  width: '10px'
};

const content = {
  paddingRight: spacing.SizesDdsSpacingLocalX05
};

export const scrollbarTokens = {
  track,
  thumb,
  content
};
