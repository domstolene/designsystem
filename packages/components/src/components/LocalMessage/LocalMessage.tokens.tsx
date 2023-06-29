import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import {
  ErrorIcon,
  TipIcon,
  InfoIcon,
  WarningIcon,
  CheckCircledIcon,
} from '@norges-domstoler/dds-icons';
import { SvgIcon } from '@norges-domstoler/dds-icons';
import { ButtonPurpose } from '../Button';
import { StaticTypographyType } from '@norges-domstoler/dds-typography';
import { LocalMessagePurpose } from './LocalMessage';

const { colors, spacing, borderRadius, border, outerShadow } = ddsBaseTokens;

export const typographyType: StaticTypographyType = 'bodySans02';

const container = {
  base: {
    boxShadow: outerShadow.DdsShadow1Onlight,
    borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
    border: `${border.BordersDdsBorderStyleLightStrokeWeight} solid`,
    padding: spacing.SizesDdsSpacingLocalX075,
    gap: spacing.SizesDdsSpacingLocalX05,
  },
  purpose: {
    info: {
      borderColor: colors.DdsColorInfoLighter,
      backgroundColor: colors.DdsColorInfoLightest,
    },
    warning: {
      borderColor: colors.DdsColorWarningLighter,
      backgroundColor: colors.DdsColorWarningLightest,
    },
    danger: {
      borderColor: colors.DdsColorDangerLighter,
      backgroundColor: colors.DdsColorDangerLightest,
    },
    success: {
      borderColor: colors.DdsColorSuccessLighter,
      backgroundColor: colors.DdsColorSuccessLightest,
    },
    tips: {
      borderColor: colors.DdsColorPrimaryLighter,
      backgroundColor: colors.DdsColorPrimaryLightest,
    },
    confidential: {
      borderColor: colors.DdsColorDangerBase,
      backgroundColor: colors.DdsColorDangerLightest,
    },
  },
};

const purposeVariants: {
  [k in LocalMessagePurpose]: {
    icon: SvgIcon;
    closeButtonPurpose: ButtonPurpose;
  };
} = {
  info: {
    icon: InfoIcon,
    closeButtonPurpose: 'secondary',
  },
  danger: {
    icon: ErrorIcon,
    closeButtonPurpose: 'danger',
  },
  warning: {
    icon: WarningIcon,
    closeButtonPurpose: 'secondary',
  },
  success: {
    icon: CheckCircledIcon,
    closeButtonPurpose: 'secondary',
  },
  tips: {
    icon: TipIcon,
    closeButtonPurpose: 'secondary',
  },
  confidential: {
    icon: ErrorIcon,
    closeButtonPurpose: 'danger',
  },
};

const icon = {
  marginRight: `${spacing.SizesDdsSpacingLocalX075}`,
  info: {
    color: colors.DdsColorInfoDarkest,
  },
  danger: {
    color: colors.DdsColorDangerDarkest,
  },
  warning: {
    color: colors.DdsColorWarningDarkest,
  },
  success: {
    color: colors.DdsColorSuccessDarkest,
  },
  tips: {
    color: colors.DdsColorPrimaryDarkest,
  },
  confidential: {
    color: colors.DdsColorDangerDarkest,
  },
};

export const localMessageTokens = {
  container,
  purposeVariants,
  icon,
};
