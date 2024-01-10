import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

import { buttonTokens, typographyTypes } from '../Button/Button.tokens';
import { selectionControlTokens } from '../SelectionControl/SelectionControl.tokens';

const { colors, spacing } = ddsBaseTokens;
const { button } = buttonTokens;
const { selectionControl } = selectionControlTokens;

export const typographyType = typographyTypes.small;

const toggleButton = {
  border: button.base.border,
  backgroundColor: colors.DdsColorNeutralsWhite,
  color: colors.DdsColorNeutralsGray7,
  gap: spacing.SizesDdsSpacingX05,
  borderRadius: button.appearances.rounded.base.borderRadius,
  padding: button.sizes.small.text.padding,
  hover: selectionControl.hover.base,
  checked: {
    ...selectionControl.checked.base,
    color: colors.DdsColorNeutralsWhite,
    hover: selectionControl.checked.hover,
  },
};

const group = {
  gap: spacing.SizesDdsSpacingX075,
};

const container = {
  gap: spacing.SizesDdsSpacingX05,
};

export const toggleButtonTokens = {
  toggleButton,
  group,
  container,
};
