import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { colors: Colors, spacing: Spacing } = ddsBaseTokens;

const base: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX025} ${Spacing.SizesDdsSpacingLocalX05}`,
  maxWidth: '100%'
};

const tipBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite
};

const errorBase: CSSObject = {
  color: Colors.DdsColorDangerBase,
  backgroundColor: Colors.DdsColorDangerLightest
};

export const inputMessageTokens = {
  padding: `${Spacing.SizesDdsSpacingLocalX025} ${Spacing.SizesDdsSpacingLocalX05}`,
  base: base,
  tip: {
    base: tipBase
  },
  error: {
    base: errorBase
  },
  icon: {
    spaceRight: Spacing.SizesDdsSpacingLocalX05
  }
};
