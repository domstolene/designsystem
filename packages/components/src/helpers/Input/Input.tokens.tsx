import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';
import { InputTypographyTypes } from './Input.types';

const { colors, spacing, border } = ddsBaseTokens;

const { textInput: TextInput } = ddsReferenceTokens;

export const inputTypographyTypes: InputTypographyTypes = {
  medium: 'bodySans02',
  small: 'bodySans01',
  tiny: 'supportingStyleTiny01',
};

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
    },
    small: {
      padding: `${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX075} ${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX075}`,
    },
    tiny: {
      padding: `${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX05} ${spacing.SizesDdsSpacingLocalX025} ${spacing.SizesDdsSpacingLocalX05}`,
    },
  },
  affix: {
    gap: spacing.SizesDdsSpacingLocalX1NumberPx,
  }
};

const container = {
  gap: spacing.SizesDdsSpacingLocalX0125,
};

export const inputTokens = {
  input,
  container,
};
