import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { ErrorIcon, InfoIcon, WarningIcon } from '../../icons/tsx';

const {
  colors: Colors,
  spacing: Spacing,
  fontPackages: FontPackages,
} = ddsBaseTokens;

const containerBase: CSSObject = {
  borderBottom: '2px solid',
  padding: `0 ${Spacing.SizesDdsSpacingLocalX1}`,
  width: '100%',
  ...FontPackages.body_sans_02.base,
  color: Colors.DdsColorNeutralsGray8,
};

const contentContainerBase: CSSObject = {
  paddingRight: Spacing.SizesDdsSpacingLocalX15,
  paddingTop: Spacing.SizesDdsSpacingLocalX075,
  paddingBottom: Spacing.SizesDdsSpacingLocalX075,
  gap: Spacing.SizesDdsSpacingLocalX075,
};

const contentContainerWithClosableBase: CSSObject = {
  paddingRight: Spacing.SizesDdsSpacingLocalX075,
};

const containerInfoBase: CSSObject = {
  borderColor: Colors.DdsColorInfoLighter,
  backgroundColor: Colors.DdsColorInfoLightest,
};

const containerDangerBase: CSSObject = {
  borderColor: Colors.DdsColorDangerLighter,
  backgroundColor: Colors.DdsColorDangerLightest,
};

const containerWarningBase: CSSObject = {
  borderColor: Colors.DdsColorWarningLighter,
  backgroundColor: Colors.DdsColorWarningLightest,
};

export const globalMessageTokens = {
  container: {
    base: containerBase,
    info: {
      base: containerInfoBase,
    },
    danger: {
      base: containerDangerBase,
    },
    warning: {
      base: containerWarningBase,
    },
  },
  contentContainer: {
    base: contentContainerBase,
    withClosable: {
      base: contentContainerWithClosableBase,
    },
  },
  icon: {
    marginRight: `${Spacing.SizesDdsSpacingLocalX075}`,
    info: {
      icon: InfoIcon,
      color: Colors.DdsColorInfoDarkest,
    },
    danger: {
      icon: ErrorIcon,
      color: Colors.DdsColorDangerDarkest,
    },
    warning: {
      icon: WarningIcon,
      color: Colors.DdsColorWarningDarkest,
    },
  },
  button: {
    info: {
      purpose: 'secondary',
    },
    danger: {
      purpose: 'danger',
    },
    warning: {
      purpose: 'secondary',
    },
  },
};
