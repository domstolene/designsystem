import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

import { type StaticTypographyType } from '../../Typography';

const { spacing, border, iconSizes } = ddsBaseTokens;

export const typographyTypes: {
  body: StaticTypographyType;
  header: StaticTypographyType;
} = {
  body: 'bodySans03',
  header: 'headingSans03',
};

const header = {
  padding: `${spacing.SizesDdsSpacingX1} ${spacing.SizesDdsSpacingX075} ${spacing.SizesDdsSpacingX1} ${spacing.SizesDdsSpacingX15}`,
  hover: {
    boxShadow: `0 0 0 ${border.BordersDdsBorderFocusInputfieldStrokeWeight} ${border.BordersDdsBorderFocusInputfieldStroke}`,
  },
};

const chevronWrapper = {
  width: iconSizes.DdsIconsizeMedium,
  height: iconSizes.DdsIconsizeMedium,
  marginLeft: spacing.SizesDdsSpacingX05,
};

const body = {
  padding: `${spacing.SizesDdsSpacingX1} ${
    spacing.SizesDdsSpacingX2NumberPx + spacing.SizesDdsSpacingX075NumberPx
  }px ${spacing.SizesDdsSpacingX2} ${spacing.SizesDdsSpacingX15}`,
};

export const cardAccordionTokens = {
  header,
  body,
  chevronWrapper,
  chevron: {
    width: iconSizes.DdsIconsizeMedium,
    height: spacing.SizesDdsSpacingX05,
  },
};
