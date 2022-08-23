import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import {
  dangerInputfield,
  focusDangerInputfield,
  focusInputfield,
  hoverDangerInputfield,
  hoverInputfield,
} from '../styling';

const { colors, spacing, fontPackages, border } = ddsBaseTokens;

const { textInput: TextInput } = ddsReferenceTokens;

const inputBase: CSSObject = {
  color: TextInput.input.textColor,
  borderRadius: TextInput.input.borderRadius,
  border: `${border.BordersDdsBorderStyleLightStrokeWeight} solid ${colors.DdsColorNeutralsGray5}`,
  borderColor: TextInput.input.borderColor,
  backgroundColor: colors.DdsColorNeutralsWhite,
  ...TextInput.input.font,
};

const inputFocusBase: CSSObject = {
  ...focusInputfield,
};

const inputHoverBase: CSSObject = {
  ...hoverInputfield,
};

const inputHasLabelBase: CSSObject = {
  padding: `${
    spacing.SizesDdsSpacingLocalX075NumberPx +
    fontPackages.supportingStyle_label_01.numbers.lineHeightNumber *
      0.01 *
      fontPackages.supportingStyle_label_01.numbers.fontSizeNumber
  }px ${spacing.SizesDdsSpacingLocalX1} ${spacing.SizesDdsSpacingLocalX075} ${
    spacing.SizesDdsSpacingLocalX1
  }`,
};

const inputNoLabelBase: CSSObject = {
  padding: `${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX1} ${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX1}`,
};

const inputDisabledBase: CSSObject = {
  cursor: 'not-allowed',
  color: colors.DdsColorNeutralsGray7,
  backgroundColor: colors.DdsColorNeutralsGray1,
};

const inputErrorBase: CSSObject = {
  ...dangerInputfield,
};

const inputErrorHoverBase: CSSObject = {
  ...hoverDangerInputfield,
};

const inputErrorFocusBase: CSSObject = {
  ...focusDangerInputfield,
};

const inputReadOnlyBase: CSSObject = {
  border: 'none',
  outline: 'none',
  cursor: 'default',
  backgroundColor: 'transparent',
  paddingLeft: spacing.SizesDdsSpacingLocalX1,
};

const inputLabelBase: CSSObject = {
  padding: `${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX1}`,
};

const inputLabelHoverBase: CSSObject = {
  color: TextInput.label.hover.textColor,
};

const inputLabelFocusBase: CSSObject = {
  color: TextInput.label.focus.textColor,
};

const inputLabelDisabledBase: CSSObject = {
  color: colors.DdsColorNeutralsGray6,
};

export const inputTokens = {
  baseInput: {
    base: inputBase,
    focus: {
      base: inputFocusBase,
    },
    hover: {
      base: inputHoverBase,
    },
  },
  general: TextInput,
  hasLabel: {
    base: inputHasLabelBase,
  },
  noLabel: {
    base: inputNoLabelBase,
  },
  readOnly: {
    base: inputReadOnlyBase,
  },
  disabled: {
    base: inputDisabledBase,
  },
  error: {
    base: inputErrorBase,
    hover: {
      base: inputErrorHoverBase,
    },
    focus: {
      base: inputErrorFocusBase,
    },
  },
  label: {
    base: inputLabelBase,
    hover: {
      base: inputLabelHoverBase,
    },
    focus: {
      base: inputLabelFocusBase,
    },
    disabled: {
      base: inputLabelDisabledBase,
    },
  },
};
