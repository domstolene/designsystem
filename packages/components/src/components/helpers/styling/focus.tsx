import { ddsTokens } from '@norges-domstoler/dds-design-tokens';

import { focusVisible } from './focusVisible';

export const focusInputfield = {
  ...focusVisible,
};

export const focusDangerInputfield = {
  borderColor: ddsTokens.ddsColorBorderDefault,
};
