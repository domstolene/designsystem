import {
  ddsTokensCoreDark,
  ddsTokensCoreLight,
  ddsTokensPublicDark,
  ddsTokensPublicLight,
} from '../generated-tokens';

export const ddsTokens = {
  'core-light': { ...ddsTokensCoreLight },
  'core-dark': { ...ddsTokensCoreDark },
  'public-light': { ...ddsTokensPublicLight },
  'public-dark': { ...ddsTokensPublicDark },
};
