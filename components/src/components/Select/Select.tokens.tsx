import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';
import { calculateHeightWithLineHeight } from '../../utils';

const { colors, spacing, fontPackages, borderRadius, border } = ddsBaseTokens;

const { textDefault } = ddsReferenceTokens;

//custom spacing so that multiselect has same height as single value select
const controlPaddingBottomMultiMedium = `${
  spacing.SizesDdsSpacingLocalX075NumberPx - 1
}px`;
const controlPaddingBottomMultiSmall = `${
  spacing.SizesDdsSpacingLocalX05NumberPx - 1
}px`;
const inputContainerMinHeightMulti = `${
  spacing.SizesDdsSpacingLocalX0125NumberPx * 2 +
  calculateHeightWithLineHeight(
    fontPackages.body_sans_01.numbers.lineHeightNumber,
    fontPackages.body_sans_01.numbers.fontSizeNumber
  )
}px`;

const control = {
  borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
  border: `${border.BordersDdsBorderStyleLightStrokeWeight} solid`,
  borderColor: colors.DdsColorNeutralsGray5,
  backgroundColor: colors.DdsColorNeutralsWhite,
  color: colors.DdsColorNeutralsGray9,
  disabled: {
    backgroundColor: colors.DdsColorNeutralsGray1,
    borderColor: colors.DdsColorNeutralsGray5,
  },
  readOnly: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  isMulti: {
    sizes: {
      medium: {
        padding: `${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX05} ${controlPaddingBottomMultiMedium} ${spacing.SizesDdsSpacingLocalX075}`,
      },
      small: {
        padding: `${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX05} ${controlPaddingBottomMultiSmall} ${spacing.SizesDdsSpacingLocalX075}`,
      },
    },
  },
  sizes: {
    medium: {
      font: fontPackages.body_sans_02.base,
      padding: `${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX075}`,
    },
    small: {
      font: fontPackages.body_sans_01.base,
      padding: `${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX075}`,
    },
    tiny: {
      font: fontPackages.supportingStyle_tiny_01.base,
      padding: `${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX05}`,
    },
  },
};

const placeholder = {
  color: colors.DdsColorNeutralsGray6,
  sizes: {
    medium: { font: fontPackages.supportingStyle_placeholdertext_01.base },
    small: { font: fontPackages.supportingStyle_placeholdertext_02.base },
    tiny: { font: fontPackages.supportingStyle_placeholdertext_03.base },
  },
};

const dropdownIndicator = {
  base: {
    color: colors.DdsColorNeutralsGray6,
  },
  hover: {
    color: colors.DdsColorInteractiveBase,
  },
  readOnly: {
    color: 'transparent',
  },
};

const clearIndicator = {
  base: {
    color: colors.DdsColorNeutralsGray6,
  },
  hover: { color: colors.DdsColorInteractiveBase },
};

const loadingIndicator = {
  color: colors.DdsColorNeutralsGray6,
};

const menu = {
  border: '1px solid',
  borderColor: colors.DdsColorInteractiveBase,
  backgroundColor: colors.DdsColorNeutralsWhite,
  borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
  marginTop: spacing.SizesDdsSpacingLocalX025,
  marginBottom: spacing.SizesDdsSpacingLocalX025,
};

const groupHeading = {
  color: colors.DdsColorNeutralsGray7,
  font: fontPackages.supportingStyle_helpertext_01.base,
  padding: `${spacing.SizesDdsSpacingLocalX05}  ${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX0125} ${spacing.SizesDdsSpacingLocalX075}`,
};

const option = {
  base: {
    gap: spacing.SizesDdsSpacingLocalX05,
    padding: `${spacing.SizesDdsSpacingLocalX075}`,
    font: fontPackages.body_sans_02.base,
    color: textDefault.textColor,
    backgroundColor: colors.DdsColorNeutralsWhite,
  },
  hover: {
    color: textDefault.textColor,
    backgroundColor: colors.DdsColorInteractiveLightest,
  },
  selected: {
    backgroundColor: colors.DdsColorNeutralsWhite,
    ...fontPackages.body_sans_02.base,
  },
  sizes: {
    medium: {
      font: fontPackages.body_sans_02.base,
    },
    small: {
      font: fontPackages.body_sans_01.base,
    },
    tiny: {
      font: fontPackages.supportingStyle_tiny_01.base,
    },
  },
};

const noOptionsMessage = {
  padding: `${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX1}`,
  color: colors.DdsColorNeutralsGray6,
  font: fontPackages.supportingStyle_placeholdertext_01.base,
};

const multiValue = {
  base: {
    borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
  },
  enabled: {
    backgroundColor: colors.DdsColorNeutralsGray2,
  },
  disabled: {
    backgroundColor: colors.DdsColorNeutralsGray3,
  },
};

const multiValueLabel = {
  padding: `${spacing.SizesDdsSpacingLocalX0125} ${spacing.SizesDdsSpacingLocalX025}`,
  color: colors.DdsColorNeutralsGray9,
  font: fontPackages.body_sans_01.base,
};

const multiValueRemove = {
  base: {
    color: colors.DdsColorNeutralsGray9,
    padding: spacing.SizesDdsSpacingLocalX025,
    borderTopRightRadius: borderRadius.RadiiDdsBorderRadius1Radius,
    borderBottomRightRadius: borderRadius.RadiiDdsBorderRadius1Radius,
  },
  hover: {
    color: colors.DdsColorNeutralsWhite,
    backgroundColor: colors.DdsColorInteractiveBase,
    boxShadow: `inset 0 0 0 1px ${colors.DdsColorNeutralsGray9}`,
  },
};

const valueContainer = {
  isMulti: {
    gap: spacing.SizesDdsSpacingLocalX025,
  },
};

const inputContainer = {
  isMulti: {
    minHeight: inputContainerMinHeightMulti,
  },
};

const icon = {
  marginRight: spacing.SizesDdsSpacingLocalX05,
};

export const selectTokens = {
  control,
  dropdownIndicator,
  placeholder,
  menu,
  groupHeading,
  option,
  valueContainer,
  inputContainer,
  multiValue,
  multiValueLabel,
  multiValueRemove,
  noOptionsMessage,
  clearIndicator,
  loadingIndicator,
  icon,
};
