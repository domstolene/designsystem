import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { calculateHeightWithLineHeight } from '../../utils';
import { StaticTypographyType } from '../Typography';
import { ToggleBarSize } from './ToggleBar.types';

const { colors, spacing, border, borderRadius, fontPackages } = ddsBaseTokens;

export const typographyTypes: { [k in ToggleBarSize]: StaticTypographyType } = {
  large: 'bodySans04',
  medium: 'bodySans02',
  small: 'bodySans01',
  tiny: 'supportingStyleTiny01',
};

const iconSizeTiny = `${calculateHeightWithLineHeight(
  fontPackages.supportingStyle_tiny_01.numbers.lineHeightNumber,
  fontPackages.supportingStyle_tiny_01.numbers.fontSizeNumber
)}px`;

const iconSizeSmall = `${calculateHeightWithLineHeight(
  fontPackages.body_sans_01.numbers.lineHeightNumber,
  fontPackages.body_sans_01.numbers.fontSizeNumber
)}px`;

const iconSizeMedium = `${calculateHeightWithLineHeight(
  fontPackages.body_sans_02.numbers.lineHeightNumber,
  fontPackages.body_sans_02.numbers.fontSizeNumber
)}px`;
const iconSizeLarge = `${calculateHeightWithLineHeight(
  fontPackages.body_sans_04.numbers.lineHeightNumber,
  fontPackages.body_sans_04.numbers.fontSizeNumber
)}px`;

const outerContainer = {
  gap: spacing.SizesDdsSpacingLocalX0125,
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
        padding: spacing.SizesDdsSpacingLocalX025,

        fontSize: iconSizeTiny,
      },
      withText: {
        padding: `${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX075}`,
        gap: spacing.SizesDdsSpacingLocalX05,
      },
    },
    small: {
      justIcon: {
        padding: spacing.SizesDdsSpacingLocalX05,
        fontSize: iconSizeSmall,
      },
      withText: {
        padding: `${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX1}`,
        gap: spacing.SizesDdsSpacingLocalX05,
      },
    },
    medium: {
      justIcon: {
        padding: spacing.SizesDdsSpacingLocalX075,
        fontSize: iconSizeMedium,
      },
      withText: {
        padding: `${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX15}`,
        gap: spacing.SizesDdsSpacingLocalX05,
      },
    },
    large: {
      justIcon: {
        padding: spacing.SizesDdsSpacingLocalX1,
        fontSize: iconSizeLarge,
      },
      withText: {
        padding: `${spacing.SizesDdsSpacingLocalX1} ${spacing.SizesDdsSpacingLocalX2}`,
        gap: spacing.SizesDdsSpacingLocalX1,
      },
    },
  },
};

export const toggleBarTokens = {
  outerContainer,
  content,
  label,
};