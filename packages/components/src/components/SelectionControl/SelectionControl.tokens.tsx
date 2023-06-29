import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { hoverInputfield, dangerInputfield } from '@norges-domstoler/dds-form';

import {
  selectionControlSize,
  selectionControlSizeNumberPx,
} from './SelectionControl.utils';

const { colors, spacing, borderRadius } = ddsBaseTokens;

const checkmark = {
  checkbox: {
    borderColor: colors.DdsColorNeutralsWhite,
  },
  radio: {
    backgroundColor: colors.DdsColorNeutralsWhite,
    height: spacing.SizesDdsSpacingLocalX05,
    width: spacing.SizesDdsSpacingLocalX05,
    left: `calc(50% - ${spacing.SizesDdsSpacingLocalX05NumberPx / 2}px)`,
    top: `calc(50% - ${spacing.SizesDdsSpacingLocalX05NumberPx / 2}px)`,
  },
};

const selectionControl = {
  base: {
    border: '1px solid',
    borderColor: colors.DdsColorNeutralsGray5,
    backgroundColor: colors.DdsColorNeutralsWhite,
    borderRadius: borderRadius.RadiiDdsBorderRadius1Radius,
    height: selectionControlSize,
    width: selectionControlSize,
  },
  hover: {
    base: {
      backgroundColor: colors.DdsColorInteractiveLightest,
      boxShadow: `inset 0 0 0 1px ${hoverInputfield.borderColor}`,
      borderColor: hoverInputfield.borderColor,
    },
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
  checkbox: {
    indeterminate: {
      borderColor: colors.DdsColorInteractiveBase,
      backgroundColor: colors.DdsColorInteractiveBase,
    },
  },
};

const container = {
  color: colors.DdsColorNeutralsGray9,
  disabled: {
    color: colors.DdsColorNeutralsGray6,
  },
  withLabel: {
    paddingLeft: `${
      selectionControlSizeNumberPx + spacing.SizesDdsSpacingLocalX05NumberPx
    }px`,
  },
  noLabel: {
    padding: `${selectionControlSizeNumberPx / 2}px`,
  },
};

const groupContainer = {
  row: {
    gap: spacing.SizesDdsSpacingLocalX075,
  },
  column: { gap: spacing.SizesDdsSpacingLocalX05 },
};

const outerGroupContainer = {
  gap: spacing.SizesDdsSpacingLocalX0125,
};

export const selectionControlTokens = {
  selectionControl,
  checkmark,
  container,
  groupContainer,
  outerGroupContainer,
};
