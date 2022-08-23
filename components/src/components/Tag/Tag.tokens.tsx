import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { localMessageTokens } from '../LocalMessage/LocalMessage.tokens';

const { colors, borderRadius, spacing } = ddsBaseTokens;

const wrapperBase: CSSObject = {
  border: '1px solid',
  borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
  padding: `${spacing.SizesDdsSpacingLocalX0125} ${spacing.SizesDdsSpacingLocalX025}`,
  maxWidth: '100%',
  display: 'inline-flex',
  alignItems: 'center',
};

const innerBase: CSSObject = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const defaultBase: CSSObject = {
  backgroundColor: colors.DdsColorNeutralsGray1,
  borderColor: colors.DdsColorNeutralsGray3,
};

const successBase: CSSObject = { ...localMessageTokens.container.success.base };

const warningBase: CSSObject = { ...localMessageTokens.container.warning.base };

const dangerBase: CSSObject = { ...localMessageTokens.container.danger.base };

const infoBase: CSSObject = { ...localMessageTokens.container.info.base };

export const tagTokens = {
  wrapper: {
    base: wrapperBase,
    type: {
      success: {
        base: successBase,
      },
      warning: {
        base: warningBase,
      },
      danger: {
        base: dangerBase,
      },
      default: {
        base: defaultBase,
      },
      info: {
        base: infoBase,
      },
    },
  },
  inner: {
    base: innerBase,
  },
};
