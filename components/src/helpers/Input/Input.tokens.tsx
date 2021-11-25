import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  colors: Colors,
  spacing: Spacing,
  fontPackages: FontPackages
} = ddsBaseTokens;

const { textInput: TextInput } = ddsReferenceTokens;

const inputBase: CSSObject = {
  border: `1px solid ${Colors.DdsColorNeutralsGray5}`
};

const inputWithLabelBase: CSSObject = {
  padding: `${
    Spacing.SizesDdsSpacingLocalX075NumberPx +
    FontPackages.supportingStyle_label_01.numbers.lineHeightNumber *
      0.01 *
      FontPackages.supportingStyle_label_01.numbers.fontSizeNumber
  }px ${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX075} ${
    Spacing.SizesDdsSpacingLocalX1
  }`
};

const inputNoLabelBase: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX1}`
};

const inputDisabledBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsGray1
};

const inputErrorBase: CSSObject = {
  borderColor: Colors.DdsColorDangerBase,
  boxShadow: `0 0 0 1px ${Colors.DdsColorDangerBase}`
};

const inputErrorHoverBase: CSSObject = {
  backgroundColor: Colors.DdsColorDangerLightest,
  borderColor: Colors.DdsColorDangerBase,
  boxShadow: `0 0 0 1px ${Colors.DdsColorDangerBase}`
};

const inputErrorFocusBase: CSSObject = {
  borderColor: Colors.DdsColorDangerDarker,
  boxShadow: `0 0 0 1px ${Colors.DdsColorDangerDarker}`
};

const inputReadOnlyBase: CSSObject = {
  border: 'none',
  backgroundColor: 'transparent',
  paddingLeft: Spacing.SizesDdsSpacingLocalX1
};

const inputLabelBase: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX1}`
};

const inputLabelHoverBase: CSSObject = {
  color: TextInput.label.hover.textColor
};

const inputLabelFocusBase: CSSObject = {
  color: TextInput.label.focus.textColor
};

export const inputTokens = {
  general: TextInput,
  base: inputBase,
  focusColor: TextInput.input.focus.borderColor,
  withLabel: {
    base: inputWithLabelBase
  },
  noLabel: {
    base: inputNoLabelBase
  },
  readOnly: {
    base: inputReadOnlyBase
  },
  disabled: {
    base: inputDisabledBase
  },
  error: {
    base: inputErrorBase,
    hover: {
      base: inputErrorHoverBase
    },
    focus: {
      base: inputErrorFocusBase
    }
  },
  label: {
    base: inputLabelBase,
    hover: {
      base: inputLabelHoverBase
    },
    focus: {
      base: inputLabelFocusBase
    }
  }
};
