import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

import { focusVisible } from './focusVisible';

const { colors } = ddsBaseTokens;

export const focusInputfield = {
  ...focusVisible,
};

export const focusDangerInputfield = {
  borderColor: colors.DdsColorInteractiveBase,
};
