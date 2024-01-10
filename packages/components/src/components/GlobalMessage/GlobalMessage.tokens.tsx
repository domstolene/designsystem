import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { ButtonPurpose } from '../Button';
import { GlobalMessagePurpose } from './GlobalMessage';
import { InfoIcon, ErrorIcon, WarningIcon } from '../Icon/icons';
import { SvgIcon } from '../Icon/utils';
import { StaticTypographyType } from '../Typography';

const { colors, spacing } = ddsBaseTokens;

export const typographyType: StaticTypographyType = 'bodySans02';

const container = {
  borderBottom: '2px solid',
  padding: `0 ${spacing.SizesDdsSpacingX1}`,
  info: {
    borderColor: colors.DdsColorInfoLighter,
    backgroundColor: colors.DdsColorInfoLightest,
  },
  danger: {
    borderColor: colors.DdsColorDangerLighter,
    backgroundColor: colors.DdsColorDangerLightest,
  },
  warning: {
    borderColor: colors.DdsColorWarningLighter,
    backgroundColor: colors.DdsColorWarningLightest,
  },
};

const contentContainer = {
  paddingRight: spacing.SizesDdsSpacingX15,
  paddingTop: spacing.SizesDdsSpacingX075,
  paddingBottom: spacing.SizesDdsSpacingX075,
  gap: spacing.SizesDdsSpacingX075,
  withClosable: {
    paddingRight: spacing.SizesDdsSpacingX075,
  },
};

export const purposeVariants: {
  [k in GlobalMessagePurpose]: {
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
};

export const globalMessageTokens = {
  container,
  contentContainer,
  icon: {
    marginRight: `${spacing.SizesDdsSpacingX075}`,
    info: {
      color: colors.DdsColorInfoDarkest,
    },
    danger: {
      color: colors.DdsColorDangerDarkest,
    },
    warning: {
      color: colors.DdsColorWarningDarkest,
    },
  },
};
