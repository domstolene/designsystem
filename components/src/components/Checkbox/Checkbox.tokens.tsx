import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { dangerInputfield, hoverInputfield } from '../../helpers/styling';

const { colors, spacing, borderRadius } = ddsBaseTokens;

const checkboxSizeNumberPx = 18;
const checkboxSize = `${checkboxSizeNumberPx}px`;

const checkmark = {
  borderColor: colors.DdsColorNeutralsWhite,
};

const checkbox = {
  base: {
    border: '1px solid',
    borderColor: colors.DdsColorNeutralsGray5,
    backgroundColor: colors.DdsColorNeutralsWhite,
    borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
    height: checkboxSize,
    width: checkboxSize,
  },
  hover: {
    backgroundColor: colors.DdsColorInfoLightest,
    boxShadow: `inset 0 0 0 1px ${hoverInputfield.borderColor}`,
    borderColor: hoverInputfield.borderColor,
    danger: {
      backgroundColor: colors.DdsColorDangerLightest,
      boxShadow: `inset 0 0 0 1px ${dangerInputfield.borderColor}`,
      borderColor: dangerInputfield.borderColor,
    },
  },
  danger: {
    boxShadow: `inset 0 0 0 1px ${dangerInputfield.borderColor}`,
    borderColor: dangerInputfield.borderColor,
  },
  disabled: {
    borderColor: colors.DdsColorNeutralsGray5,
  },
  readOnly: { backgroundColor: 'transparent' },
  checked: {
    base: {
      borderColor: colors.DdsColorInteractiveBase,
      backgroundColor: colors.DdsColorInteractiveBase,
    },
    hover: {
      backgroundColor: colors.DdsColorInteractiveDark,
      boxShadow: `inset 0 0 0 1px  ${colors.DdsColorInteractiveDark}`,
      borderColor: colors.DdsColorInteractiveDark,
    },
    disabled: {
      borderColor: colors.DdsColorNeutralsGray6,
      backgroundColor: colors.DdsColorNeutralsGray6,
    },
    readOnly: {
      borderColor: colors.DdsColorNeutralsGray6,
      backgroundColor: colors.DdsColorNeutralsGray6,
    },
  },
  indeterminate: {
    borderColor: colors.DdsColorInteractiveBase,
    backgroundColor: colors.DdsColorInteractiveBase,
  },
};

const container = {
  color: colors.DdsColorNeutralsGray9,
  disabled: {
    color: colors.DdsColorNeutralsGray6,
  },
  withLabel: {
    paddingLeft: `${
      checkboxSizeNumberPx + spacing.SizesDdsSpacingLocalX05NumberPx
    }px`,
  },
  noLabel: {
    padding: `${checkboxSizeNumberPx / 2}px`,
  },
};

export const checkboxTokens = {
  checkbox,
  checkmark,
  container,
};
