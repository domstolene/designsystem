import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';
import {
  InputSize,
  inputTypographyTypes,
  InputTypographyTypes,
} from '../../helpers';
import { calculateHeightWithLineHeight } from '../../utils';
import { StaticTypographyType } from '../Typography';

const { colors, spacing, fontPackages, borderRadius, border } = ddsBaseTokens;

const { textDefault } = ddsReferenceTokens;

const placeholderTypographyTypes: { [k in InputSize]: StaticTypographyType } = {
  medium: 'supportingStylePlaceholderText01',
  small: 'supportingStylePlaceholderText02',
  tiny: 'supportingStylePlaceholderText03',
};

export const typographyTypes: {
  control: InputTypographyTypes;
  option: InputTypographyTypes;
  placeholder: { [k in InputSize]: StaticTypographyType };
  noOptionsMessage: { [k in InputSize]: StaticTypographyType };
  groupHeading: StaticTypographyType;
  multiValueLabel: StaticTypographyType;
} = {
  control: inputTypographyTypes,
  option: inputTypographyTypes,
  placeholder: placeholderTypographyTypes,
  noOptionsMessage: placeholderTypographyTypes,
  groupHeading: 'supportingStyleHelperText01',
  multiValueLabel: 'bodySans01',
};

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
      padding: `${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX075}`,
    },
    small: {
      padding: `${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX075}`,
    },
    tiny: {
      padding: `${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX05}`,
    },
  },
};

const placeholder = {
  color: colors.DdsColorNeutralsGray6,
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
  padding: `${spacing.SizesDdsSpacingLocalX05}  ${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX0125} ${spacing.SizesDdsSpacingLocalX075}`,
};

const option = {
  base: {
    gap: spacing.SizesDdsSpacingLocalX05,
    padding: `${spacing.SizesDdsSpacingLocalX075}`,
    backgroundColor: colors.DdsColorNeutralsWhite,
  },
  hover: {
    color: textDefault.textColor,
    backgroundColor: colors.DdsColorInteractiveLightest,
  },
  focus: {
    color: textDefault.textColor,
    backgroundColor: colors.DdsColorInteractiveLightest,
  },
  selected: {
    backgroundColor: colors.DdsColorNeutralsWhite,
  },
};

const noOptionsMessage = {
  padding: `${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX1}`,
  color: colors.DdsColorNeutralsGray6,
};

const multiValue = {
  borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
  backgroundColor: colors.DdsColorNeutralsGray2,
};

const multiValueLabel = {
  padding: `${spacing.SizesDdsSpacingLocalX0125} ${spacing.SizesDdsSpacingLocalX025}`,
  color: colors.DdsColorNeutralsGray9,
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
