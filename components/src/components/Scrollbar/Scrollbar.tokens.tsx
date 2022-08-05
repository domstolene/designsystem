import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { colors } = ddsBaseTokens;

const trackBase: CSSObject = {
  backgroundColor: 'transparent',
  borderRadius: '100px',
  width: '10px'
};

const thumbBase: CSSObject = {
  backgroundColor: colors.DdsColorPrimaryDarkest.slice(0, -2) + '0.35)',
  borderRadius: '100px',
  width: '10px'
};

export const scrollbarTokens = {
  track: {
    base: trackBase
  },
  thumb: {
    base: thumbBase
  }
};
