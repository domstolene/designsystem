import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

export const scrollbarWidthNumberPx = 10;
const scrollbarWidth = `${scrollbarWidthNumberPx}px`;
const { colors, spacing } = ddsBaseTokens;

const track = {
  backgroundColor: 'transparent',
  borderRadius: '100px',
  width: scrollbarWidth,
};

const thumb = {
  base: {
    backgroundColor: colors.DdsColorPrimaryDarkest.slice(0, -2) + '0.35)',
    borderRadius: '100px',
    width: scrollbarWidth,
  },
  hover: {
    backgroundColor: colors.DdsColorPrimaryDarkest.slice(0, -2) + '0.5)',
  },
};

const content = {
  paddingRight: spacing.SizesDdsSpacingX05,
};

const outerContainer = {
  padding: spacing.SizesDdsSpacingX025,
};

export const scrollbarTokens = {
  minThumbHeightPx: 15,
  track,
  thumb,
  content,
  outerContainer,
};
