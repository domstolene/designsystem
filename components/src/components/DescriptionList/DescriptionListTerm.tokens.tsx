import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { typographyTokens } from '../Typography/Typography.tokens';

const {
  spacing: Spacing,
  fontPackages: FontPackages,
  colors: Colors
} = ddsBaseTokens;

const { textDefault } = ddsReferenceTokens;

const boldBase: CSSObject = {
  ...FontPackages.body_sans_03.base,
  ...typographyTokens.style.bold.base,
  color: textDefault.textColor
};

const smallBase: CSSObject = {
  ...FontPackages.body_sans_01.base,
  color: Colors.DdsColorNeutralsGray7
};

export const descriptionListTermTokens = {
  appearance: {
    small: {
      base: smallBase
    },
    bold: {
      base: boldBase
    }
  },
  unwrappedTopAndBottomSpace: Spacing.SizesDdsSpacingLocalX1,
  unwrappedBetweenSpace: Spacing.SizesDdsSpacingLocalX2
};
