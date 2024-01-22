import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

import {
  CheckCircledIcon,
  ErrorIcon,
  InfoIcon,
  WarningIcon,
} from '../Icon/icons';
import { localMessageTokens } from '../LocalMessage/LocalMessage.tokens';
import { type StaticTypographyType } from '../Typography';

const { colors, borderRadius, spacing } = ddsBaseTokens;

export const typographyType: StaticTypographyType = 'bodySans01';

const wrapper = {
  border: '1px solid',
  borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
  padding: `${spacing.SizesDdsSpacingX0125} ${spacing.SizesDdsSpacingX025}`,
  icon: {
    padding: [
      spacing.SizesDdsSpacingX0125,
      spacing.SizesDdsSpacingX025,
      spacing.SizesDdsSpacingX0125,
      spacing.SizesDdsSpacingX0125,
    ].join(' '),
    gap: spacing.SizesDdsSpacingX0125,
    size: 'small',
  },
  purpose: {
    default: {
      backgroundColor: colors.DdsColorNeutralsGray1,
      borderColor: colors.DdsColorNeutralsGray3,
      icon: undefined,
    },
    success: {
      ...localMessageTokens.container.purpose.success,
      icon: {
        icon: CheckCircledIcon,
        color: colors.DdsColorSuccessDarkest,
      },
    },
    danger: {
      ...localMessageTokens.container.purpose.danger,
      icon: {
        icon: ErrorIcon,
        color: colors.DdsColorDangerDarkest,
      },
    },
    warning: {
      ...localMessageTokens.container.purpose.warning,
      icon: {
        icon: WarningIcon,
        color: colors.DdsColorWarningDarkest,
      },
    },
    info: {
      ...localMessageTokens.container.purpose.info,
      icon: {
        icon: InfoIcon,
        color: colors.DdsColorInfoDarkest,
      },
    },
  },
} as const;

export const tagTokens = {
  wrapper,
};
