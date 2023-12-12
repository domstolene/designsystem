import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { StaticTypographyType } from '../../Typography';

const { spacing, border, iconSizes } = ddsBaseTokens;

export const typographyTypes: {
  body: StaticTypographyType;
  header: StaticTypographyType;
} = {
  body: 'bodySans03',
  header: 'headingSans03',
};

const header = {
  padding: `${spacing.SizesDdsSpacingLocalX1} ${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX1} ${spacing.SizesDdsSpacingLocalX15}`,
  hover: {
    boxShadow: `0 0 0 ${border.BordersDdsBorderFocusInputfieldStrokeWeight} ${border.BordersDdsBorderFocusInputfieldStroke}`,
  },
  focus: {
    boxShadow: `0 0 0 ${border.BordersDdsBorderFocusCardStrokeWeight} ${border.BordersDdsBorderFocusCardStroke}`,
  },
};

const chevronWrapper = {
  width: iconSizes.DdsIconsizeMedium,
  height: iconSizes.DdsIconsizeMedium,
  marginLeft: spacing.SizesDdsSpacingLocalX05,
};

const body = {
  padding: `${spacing.SizesDdsSpacingLocalX1} ${
    spacing.SizesDdsSpacingLocalX2NumberPx +
    spacing.SizesDdsSpacingLocalX075NumberPx
  }px ${spacing.SizesDdsSpacingLocalX2} ${spacing.SizesDdsSpacingLocalX15}`,
};

export const cardAccordionTokens = {
  header,
  body,
  chevronWrapper,
  chevron: {
    width: iconSizes.DdsIconsizeMedium,
    height: spacing.SizesDdsSpacingLocalX05,
  },
};
