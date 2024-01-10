import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { calculateHeightWithLineHeight } from '../../utils';
import { StaticTypographyType } from '../Typography';

const { border, borderRadius, colors, spacing, fontPackages } = ddsBaseTokens;

export const typographyType: StaticTypographyType = 'bodySans01';

const element = {
  base: {
    color: colors.DdsColorNeutralsGray9,
    textDecoration: 'none',
    backgroundColor: colors.DdsColorNeutralsWhite,
    padding: `${spacing.SizesDdsSpacingX075} ${spacing.SizesDdsSpacingX1}`,
    gap: spacing.SizesDdsSpacingX025,
  },
};

const iconHeight = calculateHeightWithLineHeight(
  fontPackages.body_sans_01.numbers.lineHeightNumber,
  fontPackages.body_sans_01.numbers.fontSizeNumber,
);

const link = {
  iconWrapper: {
    height: `${iconHeight}px`,
  },
  hover: {
    backgroundColor: colors.DdsColorInteractiveLightest,
  },
  active: {
    backgroundColor: colors.DdsColorInteractiveLightest,
  },
};

const container = {
  border: `${border.BordersDdsBorderStyleLightStrokeWeight} ${border.BordersDdsBorderStyleLightStroke} solid `,
  backgroundColor: colors.DdsColorNeutralsWhite,
  borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
};

const divider = {
  marginRight: spacing.SizesDdsSpacingX15,
  marginLeft: spacing.SizesDdsSpacingX15,
};

export const overflowMenuTokens = {
  container,
  element,
  link,
  divider,
  offset: spacing.SizesDdsSpacingX0125NumberPx,
};
