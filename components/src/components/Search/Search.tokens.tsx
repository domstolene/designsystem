import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { spacing: Spacing, fontPackages: FontPackages } = ddsBaseTokens;

const inputBase: CSSObject = {
  paddingRight: Spacing.SizesDdsSpacingLocalX05
};

const smallBase: CSSObject = {
  ...FontPackages.supportingStyle_inputtext_01.base,
  paddingTop: Spacing.SizesDdsSpacingLocalX05,
  paddingBottom: Spacing.SizesDdsSpacingLocalX05
};

const mediumBase: CSSObject = {
  ...FontPackages.supportingStyle_inputtext_02.base,
  paddingTop: Spacing.SizesDdsSpacingLocalX075,
  paddingBottom: Spacing.SizesDdsSpacingLocalX075
};

const largeBase: CSSObject = {
  ...FontPackages.supportingStyle_inputtext_03.base,
  paddingTop: Spacing.SizesDdsSpacingLocalX1,
  paddingBottom: Spacing.SizesDdsSpacingLocalX1
};

export const searchTokens = {
  input: {
    base: inputBase,
    spaceLeft: Spacing.SizesDdsSpacingLocalX3,
    small: {
      base: smallBase
    },
    medium: {
      base: mediumBase
    },
    large: {
      base: largeBase
    }
  },
  icon: {
    spaceTop: `calc(50% - ${Spacing.SizesDdsSpacingLocalX15NumberPx / 2}px)`,
    spaceLeft: Spacing.SizesDdsSpacingLocalX075
  },
  buttonWrapper: {
    spaceLeft: Spacing.SizesDdsSpacingLocalX05
  }
};
