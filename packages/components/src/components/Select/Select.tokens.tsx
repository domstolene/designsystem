import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';

import {
  type InputSize,
  type InputTypographyTypes,
  inputTypographyTypes,
} from '../helpers';
import { type StaticTypographyType } from '../Typography';

const { colors, spacing, borderRadius, border } = ddsBaseTokens;

const { textDefault } = ddsReferenceTokens;

const placeholderTypographyTypes: { [k in InputSize]: StaticTypographyType } = {
  medium: 'supportingStylePlaceholderText01',
  small: 'supportingStylePlaceholderText02',
  tiny: 'supportingStylePlaceholderText03',
};

const multiValueLabelTypographyTypes: {
  [k in InputSize]: StaticTypographyType;
} = {
  medium: 'bodySans01',
  small: 'bodySans01',
  tiny: 'supportingStyleTiny01',
};

export const typographyTypes: {
  control: InputTypographyTypes;
  option: InputTypographyTypes;
  placeholder: { [k in InputSize]: StaticTypographyType };
  noOptionsMessage: { [k in InputSize]: StaticTypographyType };
  groupHeading: StaticTypographyType;
  multiValueLabel: { [k in InputSize]: StaticTypographyType };
} = {
  control: inputTypographyTypes,
  option: inputTypographyTypes,
  placeholder: placeholderTypographyTypes,
  noOptionsMessage: placeholderTypographyTypes,
  groupHeading: 'supportingStyleHelperText01',
  multiValueLabel: multiValueLabelTypographyTypes,
};

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
    paddingTop: spacing.SizesDdsSpacingX0125,
  },
  isMulti: {
    sizes: {
      medium: {
        padding: `${spacing.SizesDdsSpacingX075} ${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX075} ${spacing.SizesDdsSpacingX075}`,
      },
      small: {
        padding: `${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX075}`,
      },
      tiny: {
        padding: `${spacing.SizesDdsSpacingX025} ${spacing.SizesDdsSpacingX05}`,
      },
    },
  },
  sizes: {
    medium: {
      padding: `${spacing.SizesDdsSpacingX075} ${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX075} ${spacing.SizesDdsSpacingX075}`,
    },
    small: {
      padding: `${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX075}`,
    },
    tiny: {
      padding: `${spacing.SizesDdsSpacingX025} ${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX025} ${spacing.SizesDdsSpacingX05}`,
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
  marginTop: spacing.SizesDdsSpacingX025,
  marginBottom: spacing.SizesDdsSpacingX025,
};

const groupHeading = {
  color: colors.DdsColorNeutralsGray7,
  padding: `${spacing.SizesDdsSpacingX05}  ${spacing.SizesDdsSpacingX075} ${spacing.SizesDdsSpacingX0125} ${spacing.SizesDdsSpacingX075}`,
};

const option = {
  base: {
    color: textDefault.textColor,
    gap: spacing.SizesDdsSpacingX05,
    padding: `${spacing.SizesDdsSpacingX075}`,
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
    color: textDefault.textColor,
    backgroundColor: colors.DdsColorNeutralsWhite,
  },
};

const noOptionsMessage = {
  padding: `${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX1}`,
  color: colors.DdsColorNeutralsGray6,
};

const multiValue = {
  borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
  backgroundColor: colors.DdsColorNeutralsGray2,
};

const multiValueLabel = {
  padding: `0 ${spacing.SizesDdsSpacingX025}`,
  color: colors.DdsColorNeutralsGray9,
};

const multiValueRemove = {
  base: {
    color: colors.DdsColorNeutralsGray9,
    padding: `0 ${spacing.SizesDdsSpacingX025}`,
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
    gap: spacing.SizesDdsSpacingX025,
  },
};

const icon = {
  marginRight: spacing.SizesDdsSpacingX05,
};

export const selectTokens = {
  control,
  dropdownIndicator,
  placeholder,
  menu,
  groupHeading,
  option,
  valueContainer,
  multiValue,
  multiValueLabel,
  multiValueRemove,
  noOptionsMessage,
  clearIndicator,
  loadingIndicator,
  icon,
};
