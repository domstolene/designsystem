import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { spacing, fontPackages, iconSizes } = ddsBaseTokens;
const { textDefault } = ddsReferenceTokens;

const inputBase: CSSObject = {
  paddingRight: spacing.SizesDdsSpacingLocalX05,
  paddingLeft: spacing.SizesDdsSpacingLocalX3,
};

const smallBase: CSSObject = {
  ...fontPackages.supportingStyle_inputtext_01.base,
  paddingTop: spacing.SizesDdsSpacingLocalX05,
  paddingBottom: spacing.SizesDdsSpacingLocalX05,
};

const mediumBase: CSSObject = {
  ...fontPackages.supportingStyle_inputtext_02.base,
  paddingTop: spacing.SizesDdsSpacingLocalX075,
  paddingBottom: spacing.SizesDdsSpacingLocalX075,
};

const largeBase: CSSObject = {
  ...fontPackages.supportingStyle_inputtext_03.base,
  paddingTop: spacing.SizesDdsSpacingLocalX1,
  paddingBottom: spacing.SizesDdsSpacingLocalX1,
};

const iconWrapperBase: CSSObject = {
  color: textDefault.textColor,
};

const containerBase: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  gap: spacing.SizesDdsSpacingLocalX05,
};

export const searchTokens = {
  input: {
    base: inputBase,
    small: {
      base: smallBase,
    },
    medium: {
      base: mediumBase,
    },
    large: {
      base: largeBase,
    },
  },
  icon: {
    spaceLeft: spacing.SizesDdsSpacingLocalX075,
    small: {
      size: 'small',
      spaceTop: `calc(50% - ${iconSizes.DdsIconsizeSmallNumberPx / 2}px)`,
    },
    medium: {
      size: 'medium',
      spaceTop: `calc(50% - ${iconSizes.DdsIconsizeMediumNumberPx / 2}px)`,
    },
    large: {
      size: 'medium',
      spaceTop: `calc(50% - ${iconSizes.DdsIconsizeMediumNumberPx / 2}px)`,
    },
    spaceTop: `calc(50% - ${spacing.SizesDdsSpacingLocalX15NumberPx / 2}px)`,
  },
  iconWrapper: {
    base: iconWrapperBase,
  },
  container: {
    base: containerBase,
  },
};
