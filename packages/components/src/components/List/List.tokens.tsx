import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';

const { spacing } = ddsBaseTokens;
const { textDefault } = ddsReferenceTokens;

const ulLiPaddingLeft = `1em + ${spacing.SizesDdsSpacingX025}`;
const ulPaddingLeft = `${spacing.SizesDdsSpacingX2} - (${ulLiPaddingLeft})`;

const list = {
  base: {
    margin: `${spacing.SizesDdsSpacingX1} 0`,
    color: textDefault.textColor,
  },
  ol: {
    paddingLeft: spacing.SizesDdsSpacingX2,
  },
  ul: {
    paddingLeft: `calc(${ulPaddingLeft})`,
  },
};

const listItem = {
  lineHeight: '2.5em',
  ul: {
    paddingLeft: `calc(${ulLiPaddingLeft})`,
  },
};

const bullet = {
  top: `calc((${listItem.lineHeight} / 2) - 0.5em )`,
};

export const listTokens = {
  list,
  listItem,
  bullet,
  spaceLeft: spacing.SizesDdsSpacingX2,
};
