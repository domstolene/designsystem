import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { focusVisible } from '../../helpers/styling';

const {
  borderRadius: BorderRadius,
  colors: Colors,
  outerShadow: OuterShadow,
  spacing: Spacing,
} = ddsBaseTokens;

const base: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  boxShadow: OuterShadow.DdsShadow4Onlight,
  borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
  padding: `${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX15} ${Spacing.SizesDdsSpacingLocalX15}`,
};

const contentContainerBase: CSSObject = {
  paddingRight: Spacing.SizesDdsSpacingLocalX1,
  gap: Spacing.SizesDdsSpacingLocalX1,
};
const actionsContainerBase: CSSObject = {
  gap: Spacing.SizesDdsSpacingLocalX1,
};

const focusBase: CSSObject = {
  ...focusVisible,
};

const bodyScrollableBase: CSSObject = {
  overflowY: 'auto',
};
const bodyScrollableFocusBase: CSSObject = {
  ...focusVisible,
};
export const modalTokens = {
  base: base,
  focus: { base: focusBase },
  contentContainer: {
    base: contentContainerBase,
  },
  actionsContainer: {
    base: actionsContainerBase,
  },
  bodyScrollable: {
    base: bodyScrollableBase,
    focus: {
      base: bodyScrollableFocusBase,
    },
  },
};
