import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { ErrorIcon, InfoIcon, WarningIcon } from '../../icons/tsx';
import { SvgIcon } from '../../icons/utils';
import { ButtonPurpose } from '../Button';
import { StaticTypographyType } from '../Typography';
import { GlobalMessagePurpose } from './GlobalMessage';

const { colors, spacing } = ddsBaseTokens;

export const typographyType: StaticTypographyType = 'bodySans02';

const container = {
  borderBottom: '2px solid',
  padding: `0 ${spacing.SizesDdsSpacingLocalX1}`,
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
  paddingRight: spacing.SizesDdsSpacingLocalX15,
  paddingTop: spacing.SizesDdsSpacingLocalX075,
  paddingBottom: spacing.SizesDdsSpacingLocalX075,
  gap: spacing.SizesDdsSpacingLocalX075,
  withClosable: {
    paddingRight: spacing.SizesDdsSpacingLocalX075,
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
  },
};