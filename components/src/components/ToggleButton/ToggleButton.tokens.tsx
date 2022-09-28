import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { focusVisible } from '../../helpers/styling';
import { selectionControlTokens } from '../../helpers/SelectionControl';

const { colors: Colors, spacing: Spacing } = ddsBaseTokens;

const base: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  color: Colors.DdsColorNeutralsGray7,
  gap: Spacing.SizesDdsSpacingLocalX05,
  boxShadow: 'none',
};

const hoverBase: CSSObject = {
  ...selectionControlTokens.selectionControl.hover.base,
};

const checkedBase: CSSObject = {
  ...selectionControlTokens.selectionControl.checked.base,
  color: Colors.DdsColorNeutralsWhite,
};

const checkedHoverBase: CSSObject = {
  ...selectionControlTokens.selectionControl.checked.hover,
  color: Colors.DdsColorNeutralsWhite,
};

const focusBase: CSSObject = {
  ...focusVisible,
};

const groupBase: CSSObject = {
  display: 'flex',
  gap: Spacing.SizesDdsSpacingLocalX075,
  flexWrap: 'wrap',
};

const containerBase: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  gap: Spacing.SizesDdsSpacingLocalX05,
};

export const toggleButtonTokens = {
  base: base,
  hover: {
    base: hoverBase,
  },
  focus: {
    base: focusBase,
  },
  checked: {
    base: checkedBase,
    hover: {
      base: checkedHoverBase,
    },
  },
  group: {
    base: groupBase,
  },
  container: {
    base: containerBase,
  },
};
