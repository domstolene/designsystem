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
    padding: `${spacing.SizesDdsSpacingX075} ${spacing.SizesDdsSpacingX1} ${spacing.SizesDdsSpacingX075} ${spacing.SizesDdsSpacingX075}`,
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
      padding: spacing.SizesDdsSpacingX075,
    },
    small: {
      padding: `${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX075} ${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX075}`,
    },
    tiny: {
      padding: `${spacing.SizesDdsSpacingX025} ${spacing.SizesDdsSpacingX05} ${spacing.SizesDdsSpacingX025} ${spacing.SizesDdsSpacingX05}`,
    },
  },
  affix: {
    gap: spacing.SizesDdsSpacingX1NumberPx,
  },
};

const container = {
  gap: spacing.SizesDdsSpacingX0125,
};

export const inputTokens = {
  input,
  container,
};
