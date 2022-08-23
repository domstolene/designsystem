import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { colors: Colors } = ddsBaseTokens;

export const dangerInputfield = {
  borderColor: Colors.DdsColorDangerBase,
  boxShadow: `inset 0 0 0 1px ${Colors.DdsColorDangerBase}`,
};
