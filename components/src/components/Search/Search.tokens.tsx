import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';

const { spacing, fontPackages, iconSizes } = ddsBaseTokens;
const { textDefault } = ddsReferenceTokens;

const paddingLeftSmall = `${
  spacing.SizesDdsSpacingLocalX075NumberPx +
  iconSizes.DdsIconsizeSmallNumberPx +
  spacing.SizesDdsSpacingLocalX05NumberPx
}px`;
const paddingLeftMedium = `${
  spacing.SizesDdsSpacingLocalX075NumberPx +
  iconSizes.DdsIconsizeMediumNumberPx +
  spacing.SizesDdsSpacingLocalX05NumberPx
}px`;

const paddingLeftLarge = `${
  spacing.SizesDdsSpacingLocalX075NumberPx +
  iconSizes.DdsIconsizeMediumNumberPx +
  spacing.SizesDdsSpacingLocalX05NumberPx
}px`;

const input = {
  base: {
    paddingRight: spacing.SizesDdsSpacingLocalX05,
    paddingLeft: spacing.SizesDdsSpacingLocalX3,
  },
  sizes: {
    small: {
      font: fontPackages.body_sans_01.base,
      paddingTop: spacing.SizesDdsSpacingLocalX05,
      paddingBottom: spacing.SizesDdsSpacingLocalX05,
      paddingLeft: paddingLeftSmall,
    },
    medium: {
      font: fontPackages.body_sans_02.base,
      paddingTop: spacing.SizesDdsSpacingLocalX075,
      paddingBottom: spacing.SizesDdsSpacingLocalX075,
      paddingLeft: paddingLeftMedium,
    },
    large: {
      font: fontPackages.body_sans_04.base,
      paddingTop: spacing.SizesDdsSpacingLocalX1,
      paddingBottom: spacing.SizesDdsSpacingLocalX1,
      paddingLeft: paddingLeftLarge,
    },
  },
};

const container = {
  gap: spacing.SizesDdsSpacingLocalX05,
};

const icon = {
  base: {
    left: spacing.SizesDdsSpacingLocalX075,
    color: textDefault.textColor,
  },
  small: {
    top: `calc(50% - ${iconSizes.DdsIconsizeSmallNumberPx / 2}px)`,
  },
  medium: {
    top: `calc(50% - ${iconSizes.DdsIconsizeMediumNumberPx / 2}px)`,
  },
  large: {
    top: `calc(50% - ${iconSizes.DdsIconsizeMediumNumberPx / 2}px)`,
  },
};

export const searchTokens = {
  input,
  icon,
  container,
};
