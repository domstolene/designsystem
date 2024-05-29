import { ddsBaseTokens } from './ddsBaseTokens';

const {
  colors: Colors,
  fontPackages: FontPackages,
  borderRadius: BorderRadius,
} = ddsBaseTokens;

const textDefault = {
  textColor: Colors.DdsColorNeutralsGray9,
  font: FontPackages.body_sans_02.base,
};

const focus = {
  colorDefault: Colors.DdsColorFocusOutside,
  outlineWidth: '2px',
  color__TextInput: Colors.DdsColorInteractiveBase,
  textColor__TextInput: Colors.DdsColorInteractiveDark,
  borderWidth__TextInput: '1px',
};

export const ddsReferenceTokens = {
  focus: focus,
  textDefault: textDefault,
  textInput: {
    input: {
      borderRadius: BorderRadius.DdsBorderRadius1,
      borderWidth: '1px',
      borderColor: Colors.DdsColorNeutralsGray5,
      textColor: textDefault.textColor,
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
