import { ddsBaseTokens } from "./ddsBaseTokens";

const {
  colors: Colors,
  fontPackages: FontPackages,
  borderRadius: BorderRadius,
  border: Border,
} = ddsBaseTokens;

const textDefault = {
  textColor: Colors.DdsColorNeutralsGray9,
  font: FontPackages.body_sans_02.base,
};

const focus = {
  colorDefault: Colors.DdsColorWarningDarker,
  outlineWidth: Border.BordersDdsBorderStyle1StrokeWeight,
  color__TextInput: Colors.DdsColorInteractiveBase,
  textColor__TextInput: Colors.DdsColorInteractiveDark,
  borderWidth__TextInput: `${
    Border.BordersDdsBorderStyle1StrokeWeightNumberPx * 2
  }px`,
};

export const ddsReferenceTokens = {
  focus: focus,
  textDefault: textDefault,
  textInput: {
    input: {
      borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
      borderWidth: Border.BordersDdsBorderStyle1StrokeWeight,
      borderColor: Colors.DdsColorNeutralsGray5,
      textColor: textDefault.textColor,
      font: FontPackages.supportingStyle_inputtext_02.base,
      hover: {
        backgroundColor: Colors.DdsColorInteractiveLightest,
        borderColor: focus.color__TextInput,
        borderWidth: focus.borderWidth__TextInput,
      },
      focus: {
        borderColor: focus.color__TextInput,
        borderWidth: focus.borderWidth__TextInput,
      },
    },
    label: {
      hover: {
        textColor: focus.textColor__TextInput,
      },
      focus: {
        textColor: focus.textColor__TextInput,
      },
    },
  },
};
