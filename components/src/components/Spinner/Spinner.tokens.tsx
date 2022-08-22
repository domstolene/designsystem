import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { colors: Colors } = ddsBaseTokens;

const ciclreBase: CSSObject = {
  stroke: Colors.DdsColorInteractiveBase,
};

export const spinnerTokens = {
  circle: {
    base: ciclreBase,
  },
};
