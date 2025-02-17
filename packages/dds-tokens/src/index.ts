import { ddsTokensCore, ddsTokensPublic } from '../generated-tokens';

export const ddsTokens = {
  core: { ...ddsTokensCore },
  public: { ...ddsTokensPublic },
};
