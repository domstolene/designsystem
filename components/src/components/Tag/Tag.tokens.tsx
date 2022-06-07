import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { localMessageTokens } from '../LocalMessage/LocalMessage.tokens';

const { colors, borderRadius, spacing } = ddsBaseTokens;

const base: CSSObject = {
  border: '1px solid',
  width: 'fit-content',
  borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
  padding: `${spacing.SizesDdsSpacingLocalX0125} ${spacing.SizesDdsSpacingLocalX025}`
};

const defaultBase: CSSObject = {
  backgroundColor: colors.DdsColorNeutralsGray1,
  borderColor: colors.DdsColorNeutralsGray3
};

const successBase: CSSObject = { ...localMessageTokens.container.success.base };

const warningBase: CSSObject = { ...localMessageTokens.container.warning.base };

const errorBase: CSSObject = { ...localMessageTokens.container.danger.base };

const infoBase: CSSObject = { ...localMessageTokens.container.info.base };

export const tagTokens = {
  base: base,
  type: {
    success: {
      base: successBase
    },
    warning: {
      base: warningBase
    },
    error: {
      base: errorBase
    },
    default: {
      base: defaultBase
    },
    info: {
      base: infoBase
    }
  }
};
