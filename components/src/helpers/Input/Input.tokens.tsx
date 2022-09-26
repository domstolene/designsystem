import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { colors, spacing, fontPackages, border } = ddsBaseTokens;

const { textInput: TextInput } = ddsReferenceTokens;

const input = {
  base: {
    color: TextInput.input.textColor,
    borderRadius: TextInput.input.borderRadius,
    border: `${border.BordersDdsBorderStyleLightStrokeWeight} solid ${colors.DdsColorNeutralsGray5}`,
    borderColor: TextInput.input.borderColor,
    backgroundColor: colors.DdsColorNeutralsWhite,
    padding: `${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX1} ${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX075}`,
  },
  disabled: {
    color: colors.DdsColorNeutralsGray7,
    backgroundColor: colors.DdsColorNeutralsGray1,
  },
  readOnly: {
    backgroundColor: 'transparent',
  },
  sizes: {
    medium: {
      padding: spacing.SizesDdsSpacingLocalX075,
      font: fontPackages.body_sans_02.base,
    },
    small: {
      padding: `${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX075}`,
      font: fontPackages.body_sans_01.base,
    },
    tiny: {
      padding: `${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX025}`,
      font: fontPackages.supportingStyle_tiny_01.base,
    },
  },
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

const container = {
  gap: spacing.SizesDdsSpacingLocalX0125,
};

export const inputTokens = {
  input,
  container,
  general: TextInput,
  hasLabel: {
    base: inputHasLabelBase,
  },
  noLabel: {
    base: inputNoLabelBase,
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
