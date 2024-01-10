import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { ToggleBarSize } from './ToggleBar.types';
import { calculateHeightWithLineHeight } from '../../utils';
import { StaticTypographyType } from '../Typography';

const { colors, spacing, border, borderRadius, fontPackages } = ddsBaseTokens;

export const typographyTypes: { [k in ToggleBarSize]: StaticTypographyType } = {
  large: 'bodySans04',
  medium: 'bodySans02',
  small: 'bodySans01',
  tiny: 'supportingStyleTiny01',
};

const iconSizeTiny = `${calculateHeightWithLineHeight(
  fontPackages.supportingStyle_tiny_01.numbers.lineHeightNumber,
  fontPackages.supportingStyle_tiny_01.numbers.fontSizeNumber,
)}px`;

const iconSizeSmall = `${calculateHeightWithLineHeight(
  fontPackages.body_sans_01.numbers.lineHeightNumber,
  fontPackages.body_sans_01.numbers.fontSizeNumber,
)}px`;

const iconSizeMedium = `${calculateHeightWithLineHeight(
  fontPackages.body_sans_02.numbers.lineHeightNumber,
  fontPackages.body_sans_02.numbers.fontSizeNumber,
)}px`;
const iconSizeLarge = `${calculateHeightWithLineHeight(
  fontPackages.body_sans_04.numbers.lineHeightNumber,
  fontPackages.body_sans_04.numbers.fontSizeNumber,
)}px`;

const outerContainer = {
  gap: spacing.SizesDdsSpacingX0125,
};

const label = {
  base: {
    borderColor: colors.DdsColorNeutralsGray5,
    borderRight: `${border.BordersDdsBorderStyleLightStrokeWeight} solid ${colors.DdsColorNeutralsGray5}`,
    borderTop: `${border.BordersDdsBorderStyleLightStrokeWeight} solid ${colors.DdsColorNeutralsGray5}`,
    borderBottom: `${border.BordersDdsBorderStyleLightStrokeWeight} solid ${colors.DdsColorNeutralsGray5}`,
  },
  hover: {
    color: colors.DdsColorInteractiveDark,
    borderColor: colors.DdsColorInteractiveDark,
  },
  firstChild: {
    borderLeft: `${border.BordersDdsBorderStyleLightStrokeWeight} solid ${colors.DdsColorNeutralsGray5}`,
    borderTopLeftRadius: borderRadius.RadiiDdsBorderRadius1Radius,
    borderBottomLeftRadius: borderRadius.RadiiDdsBorderRadius1Radius,
  },
  lastChild: {
    borderTopRightRadius: borderRadius.RadiiDdsBorderRadius1Radius,
    borderBottomRightRadius: borderRadius.RadiiDdsBorderRadius1Radius,
  },
};

const content = {
  base: { backgroundColor: colors.DdsColorNeutralsGray1 },
  active: {
    color: colors.DdsColorInteractiveDarkest,
    borderColor: colors.DdsColorInteractiveDarker,
    backgroundColor: colors.DdsColorInteractiveLightest,
    boxShadow: `inset 0 0 0 1px ${colors.DdsColorInteractiveDarker}`,
  },
  size: {
    tiny: {
      justIcon: {
        padding: spacing.SizesDdsSpacingX025,

        fontSize: iconSizeTiny,
      },
      withText: {
        padding: `${spacing.SizesDdsSpacingX025} ${spacing.SizesDdsSpacingX075}`,
        gap: spacing.SizesDdsSpacingX05,
      },
    },
    small: {
      justIcon: {
        padding: spacing.SizesDdsSpacingX05,
        fontSize: iconSizeSmall,
      },
      withText: {
        padding: `${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX1}`,
        gap: spacing.SizesDdsSpacingX05,
      },
    },
    medium: {
      justIcon: {
        padding: spacing.SizesDdsSpacingX075,
        fontSize: iconSizeMedium,
      },
      withText: {
        padding: `${spacing.SizesDdsSpacingX075} ${spacing.SizesDdsSpacingX15}`,
        gap: spacing.SizesDdsSpacingX05,
      },
    },
    large: {
      justIcon: {
        padding: spacing.SizesDdsSpacingX1,
        fontSize: iconSizeLarge,
      },
      withText: {
        padding: `${spacing.SizesDdsSpacingX1} ${spacing.SizesDdsSpacingX2}`,
        gap: spacing.SizesDdsSpacingX1,
      },
    },
  },
};

export const toggleBarTokens = {
  outerContainer,
  content,
  label,
};
