import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';
import { StaticTypographyType } from '../Typography';
import { SearchSize } from './Search';

const { spacing, iconSizes, colors } = ddsBaseTokens;
const { textDefault } = ddsReferenceTokens;

export const typographyTypes: { [k in SearchSize]: StaticTypographyType } = {
  small: 'bodySans01',
  medium: 'bodySans02',
  large: 'bodySans04',
};

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
      paddingTop: spacing.SizesDdsSpacingLocalX05,
      paddingBottom: spacing.SizesDdsSpacingLocalX05,
      paddingLeft: paddingLeftSmall,
    },
    medium: {
      paddingTop: spacing.SizesDdsSpacingLocalX075,
      paddingBottom: spacing.SizesDdsSpacingLocalX075,
      paddingLeft: paddingLeftMedium,
    },
    large: {
      paddingTop: spacing.SizesDdsSpacingLocalX1,
      paddingBottom: spacing.SizesDdsSpacingLocalX1,
      paddingLeft: paddingLeftLarge,
    },
  },
};

const horisontalContainer = {
  gap: spacing.SizesDdsSpacingLocalX05,
};

const outerContainer = {
  gap: spacing.SizesDdsSpacingLocalX0125,
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

const suggestionsContainer = {
  marginTop: spacing.SizesDdsSpacingLocalX025,
  border: `1px solid ${colors.DdsColorInteractiveBase}`,
  boxShadow: `0 0 0 1px ${colors.DdsColorInteractiveBase}`,
};

const suggestionsHeader = {
  paddingLeft: spacing.SizesDdsSpacingLocalX1,
};

export const searchTokens = {
  input,
  icon,
  horisontalContainer,
  outerContainer,
  suggestionsContainer,
  suggestionsHeader,
};
