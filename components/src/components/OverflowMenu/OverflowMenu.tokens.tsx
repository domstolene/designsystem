import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { StaticTypographyType } from '../Typography';

const { border, borderRadius, colors, spacing, fontPackages } = ddsBaseTokens;

export const typographyType: StaticTypographyType = 'bodySans01';

const element = {
  base: {
    color: colors.DdsColorNeutralsGray9,
    textDecoration: 'none',
    backgroundColor: colors.DdsColorNeutralsWhite,
    padding: `${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX1}`,
    gap: spacing.SizesDdsSpacingLocalX025,
  },
};

const link = {
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
  marginRight: spacing.SizesDdsSpacingLocalX15,
  marginLeft: spacing.SizesDdsSpacingLocalX15,
};

export const overflowMenuTokens = {
  container,
  element,
  link,
  divider,
  offset: spacing.SizesDdsSpacingLocalX0125NumberPx,
};