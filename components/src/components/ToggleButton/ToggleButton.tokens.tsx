import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { focusVisible } from '../../helpers/styling';
import { checkboxTokens } from '../Checkbox/Checkbox.tokens';

const { colors: Colors, spacing: Spacing } = ddsBaseTokens;

const base: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  color: Colors.DdsColorNeutralsGray7,
  gap: Spacing.SizesDdsSpacingLocalX05,
  boxShadow: 'none'
};

const hoverBase: CSSObject = {
  ...checkboxTokens.checkbox.hover.base
};

const checkedBase: CSSObject = {
  ...checkboxTokens.checkbox.checked.base,
  color: Colors.DdsColorNeutralsWhite
};

const checkedHoverBase: CSSObject = {
  ...checkboxTokens.checkbox.checked.hover.base,
  color: Colors.DdsColorNeutralsWhite
};

const focusBase: CSSObject = {
  ...focusVisible
};

const groupBase: CSSObject = {
  display: 'flex',
  gap: Spacing.SizesDdsSpacingLocalX075,
  flexWrap: 'wrap'
};

const containerBase: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  gap: Spacing.SizesDdsSpacingLocalX05
};

export const toggleButtonTokens = {
  base: base,
  hover: {
    base: hoverBase
  },
  focus: {
    base: focusBase
  },
  checked: {
    base: checkedBase,
    hover: {
      base: checkedHoverBase
    }
  },
  group: {
    base: groupBase
  },
  container: {
    base: containerBase
  }
};
