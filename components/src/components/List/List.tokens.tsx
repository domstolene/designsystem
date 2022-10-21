import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';

const { spacing } = ddsBaseTokens;
const { textDefault } = ddsReferenceTokens;

const ulLiPaddingLeft = `1em + ${spacing.SizesDdsSpacingLocalX025}`;
const ulPaddingLeft = `${spacing.SizesDdsSpacingLocalX2} - (${ulLiPaddingLeft})`;

const list = {
  base: {
    margin: `${spacing.SizesDdsSpacingLocalX1} 0`,
    color: textDefault.textColor,
  },
  ol: {
    paddingLeft: spacing.SizesDdsSpacingLocalX2,
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
  spaceLeft: spacing.SizesDdsSpacingLocalX2,
};
