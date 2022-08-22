import { CSSObject } from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { spacing: Spacing, colors: Colors } = ddsBaseTokens;

const listBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray7,
};

export const paginationTokens = {
  container: {
    spaceBetweenItems: Spacing.SizesDdsSpacingLocalX075,
  },
  indicatorsContainer: {
    spacing: Spacing.SizesDdsSpacingLocalX075,
  },
  list: {
    base: listBase,
  },
  paginationItem: {
    spacing: Spacing.SizesDdsSpacingLocalX075,
  },
};
