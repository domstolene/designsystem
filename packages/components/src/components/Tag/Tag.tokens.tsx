import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

import { localMessageTokens } from '../LocalMessage/LocalMessage.tokens';
import { type StaticTypographyType } from '../Typography';

const { colors, borderRadius, spacing } = ddsBaseTokens;

export const typographyType: StaticTypographyType = 'bodySans01';

const wrapper = {
  border: '1px solid',
  borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
  padding: `${spacing.SizesDdsSpacingX0125} ${spacing.SizesDdsSpacingX025}`,
  purpose: {
    default: {
      backgroundColor: colors.DdsColorNeutralsGray1,
      borderColor: colors.DdsColorNeutralsGray3,
    },
    success: localMessageTokens.container.purpose.success,
    danger: localMessageTokens.container.purpose.danger,
    warning: localMessageTokens.container.purpose.warning,
    info: localMessageTokens.container.purpose.info,
  },
};

export const tagTokens = {
  wrapper,
};
