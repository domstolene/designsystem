import { ddsBaseTokens } from "./ddsBaseTokens";

const {
  colors: Colors,
  spacing: Spacing,
  fontPackages: FontPackages,
  borderRadius: BorderRadius,
  border: Border,
} = ddsBaseTokens;

const textDefault = {
  textColor: Colors.DdsColorNeutralsGray9,
  font: FontPackages.sansRegularx1.base,
};

const focus = {
  colorDefault: Colors.DdsColorWarningDarker,
  outlineWidth: Border.BordersDdsBorderStyle1StrokeWeight,
  color__TextInput: Colors.DdsColorPrimaryBase,
};

const inputLabel = {
  textColor: Colors.DdsColorNeutralsGray7,
  font: FontPackages.sansBoldx0_875,
};

export const ddsReferenceTokens = {
  focus: focus,
  inputLabel: inputLabel,
  textDefault: textDefault,
  textInput: {
    input: {
      borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
      borderColor: Colors.DdsColorPrimaryBase,
      textColor: textDefault.textColor,
      font: FontPackages.sansRegularx1_125.base,
      hover: {
        backgroundColor: Colors.DdsColorPrimaryLightest,
      },
      focus: {
        borderColor: focus.color__TextInput,
      },
    },
    label: {
      base: inputLabel,
      focus: {
        textColor: focus.color__TextInput,
      },
    },
  },
};
