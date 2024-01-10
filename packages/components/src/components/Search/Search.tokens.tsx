import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';
import { SearchSize } from './Search';
import { StaticTypographyType } from '../Typography';

const { spacing, iconSizes, colors } = ddsBaseTokens;
const { textDefault } = ddsReferenceTokens;

export const typographyTypes: { [k in SearchSize]: StaticTypographyType } = {
  small: 'bodySans01',
  medium: 'bodySans02',
  large: 'bodySans04',
};

const paddingLeftSmall = `${
  spacing.SizesDdsSpacingX075NumberPx +
  iconSizes.DdsIconsizeSmallNumberPx +
  spacing.SizesDdsSpacingX05NumberPx
}px`;
const paddingLeftMedium = `${
  spacing.SizesDdsSpacingX075NumberPx +
  iconSizes.DdsIconsizeMediumNumberPx +
  spacing.SizesDdsSpacingX05NumberPx
}px`;

const paddingLeftLarge = `${
  spacing.SizesDdsSpacingX075NumberPx +
  iconSizes.DdsIconsizeMediumNumberPx +
  spacing.SizesDdsSpacingX05NumberPx
}px`;

const input = {
  base: {
    paddingRight: spacing.SizesDdsSpacingX25,
    paddingLeft: spacing.SizesDdsSpacingX3,
  },
  sizes: {
    small: {
      paddingTop: spacing.SizesDdsSpacingX05,
      paddingBottom: spacing.SizesDdsSpacingX05,
      paddingLeft: paddingLeftSmall,
    },
    medium: {
      paddingTop: spacing.SizesDdsSpacingX075,
      paddingBottom: spacing.SizesDdsSpacingX075,
      paddingLeft: paddingLeftMedium,
    },
    large: {
      paddingTop: spacing.SizesDdsSpacingX1,
      paddingBottom: spacing.SizesDdsSpacingX1,
      paddingLeft: paddingLeftLarge,
    },
  },
};

const horisontalContainer = {
  gap: spacing.SizesDdsSpacingX05,
};

const outerContainer = {
  gap: spacing.SizesDdsSpacingX0125,
};

const searchIcon = {
  base: {
    left: spacing.SizesDdsSpacingX075,
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

const clearButton = {
  right: spacing.SizesDdsSpacingX075,
  top: `calc(50% - 14px)`, // Knappen er 28px høy. Trekker fra 14px for å få den midtstilt.
  color: textDefault.textColor,
};

const suggestionsContainer = {
  marginTop: spacing.SizesDdsSpacingX025,
  border: `1px solid ${colors.DdsColorInteractiveBase}`,
  boxShadow: `0 0 0 1px ${colors.DdsColorInteractiveBase}`,
};

const suggestionsHeader = {
  paddingLeft: spacing.SizesDdsSpacingX1,
};

export const searchTokens = {
  input,
  searchIcon,
  clearButton,
  horisontalContainer,
  outerContainer,
  suggestionsContainer,
  suggestionsHeader,
};
