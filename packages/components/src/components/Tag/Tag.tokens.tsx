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
  padding: `${spacing.SizesDdsSpacingX0125} ${spacing.SizesDdsSpacingX05}`,
  icon: {
    padding: [
      spacing.SizesDdsSpacingX0125,
      spacing.SizesDdsSpacingX05,
      spacing.SizesDdsSpacingX0125,
      spacing.SizesDdsSpacingX025,
    ].join(' '),
    gap: spacing.SizesDdsSpacingX025,
    size: 'small',
  },
  purpose: {
    default: {
      icon: undefined,
      base: {
        backgroundColor: colors.DdsColorNeutralsGray1,
        borderColor: colors.DdsColorNeutralsGray3,
        icon: undefined,
      },
      strong: {
        backgroundColor: colors.DdsColorNeutralsGray3,
        borderColor: colors.DdsColorNeutralsGray3,
        icon: undefined,
      },
    },
    success: {
      icon: CheckCircledIcon,
      base: {
        ...localMessageTokens.container.purpose.success,
        icon: {
          color: colors.DdsColorSuccessDarkest,
        },
      },
      strong: {
        backgroundColor: colors.DdsColorSuccessLight,
        borderColor: colors.DdsColorSuccessLight,
        icon: {
          color: colors.DdsColorNeutralsGray9,
        },
      },
    },
    danger: {
      icon: ErrorIcon,
      base: {
        ...localMessageTokens.container.purpose.danger,
        icon: {
          color: colors.DdsColorDangerDarkest,
        },
      },
      strong: {
        backgroundColor: colors.DdsColorDangerLight,
        borderColor: colors.DdsColorDangerLight,
        icon: {
          color: colors.DdsColorNeutralsGray9,
        },
      },
    },
    warning: {
      icon: WarningIcon,
      base: {
        ...localMessageTokens.container.purpose.warning,
        icon: {
          color: colors.DdsColorWarningDarkest,
        },
      },
      strong: {
        backgroundColor: colors.DdsColorWarningLight,
        borderColor: colors.DdsColorWarningLight,
        icon: {
          color: colors.DdsColorNeutralsGray9,
        },
      },
    },
    info: {
      icon: InfoIcon,
      base: {
        ...localMessageTokens.container.purpose.info,
        icon: {
          color: colors.DdsColorInfoDarkest,
        },
      },
      strong: {
        backgroundColor: colors.DdsColorInfoLight,
        borderColor: colors.DdsColorInfoLight,
        icon: {
          color: colors.DdsColorNeutralsGray9,
        },
      },
    },
  },
} as const;

export const tagTokens = {
  wrapper,
};
