import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
const { colors } = ddsBaseTokens;

const segment = {
  medium: {
    font: {
      ...ddsBaseTokens.fontPackages.body_sans_02.base,
    },
    placeholder: {
      ...ddsBaseTokens.fontPackages.supportingStyle_placeholdertext_01.base,
      textColor: colors.DdsColorNeutralsGray6,
    },
  },
  small: {
    font: {
      ...ddsBaseTokens.fontPackages.body_sans_01.base,
    },
    placeholder: {
      ...ddsBaseTokens.fontPackages.supportingStyle_placeholdertext_02.base,
      textColor: colors.DdsColorNeutralsGray6,
    },
  },
  tiny: {
    font: {
      ...ddsBaseTokens.fontPackages.supportingStyle_tiny_01.base,
    },
    placeholder: {
      ...ddsBaseTokens.fontPackages.supportingStyle_placeholdertext_03.base,
      textColor: colors.DdsColorNeutralsGray6,
    },
  },
  padding: {
    x: '0.05rem',
    y: '0',
  },
  focus: {
    textColor: colors.DdsColorNeutralsWhite,
    backgroundColor: colors.DdsColorInteractiveBase,
  },
};

const calendarButton = {
  color: colors.DdsColorNeutralsGray9,
  disabled: {
    color: colors.DdsColorNeutralsGray6,
  },
  background: 'transparent',
  borderRadius: ddsBaseTokens.borderRadius.RadiiDdsBorderRadius1Radius,
  hover: {
    background: colors.DdsColorInteractiveLightest,
    color: colors.DdsColorInteractiveBase,
  },
  active: {
    background: colors.DdsColorInteractiveLighter,
    color: colors.DdsColorInteractiveBase,
  },
  medium: {
    size: `calc(${ddsBaseTokens.iconSizes.DdsIconsizeMedium} + ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX05})`,
  },
  small: {
    size: `calc(${ddsBaseTokens.iconSizes.DdsIconsizeSmall} + ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX05})`,
  },
  tiny: {
    size: `calc(${ddsBaseTokens.iconSizes.DdsIconsizeSmall} + ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX05})`,
  },
};

const datefield = {
  medium: {
    minWidth: '160px',
  },
  small: {
    minWidth: '140px',
  },
  tiny: {
    minWidth: '125px',
  },
  disabled: {
    background: ddsBaseTokens.colors.DdsColorNeutralsGray5,
    color: ddsBaseTokens.colors.DdsColorNeutralsGray7,
  },
  paddingX: ddsBaseTokens.spacing.SizesDdsSpacingLocalX05,
  segment,
};

export const datePickerTokens = {
  gap: ddsBaseTokens.spacing.SizesDdsSpacingLocalX025,
  datefield,
  calendarButton,
};
