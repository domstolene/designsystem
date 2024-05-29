import { ddsTokens } from '@norges-domstoler/dds-design-tokens';

export const outlineOffset = ddsTokens.DdsSpacingX0125;
export const outlineInset = `-${ddsTokens.DdsSpacingX025}`;

export const focusVisible = {
  outline: `${ddsTokens.DdsColorFocusOutside} 2px solid`,
  outlineOffset: outlineOffset,
  boxShadow: `0 0 0 2px ${ddsTokens.DdsColorFocusInside}`,
};

export const focusVisibleTransitionValue = 'outline-offset 0.2s';

export const focusVisibleInset = {
  outline: `${ddsTokens.DdsColorFocusOutside} 2px solid`,
  outlineOffset: outlineInset,
};

// egen stil siden react-select bruker focus-state og hover-styling samtidig; ikke nødvendig hvis de kan skilles.
export const focusVisibleInsetSelect = {
  outline: `${ddsTokens.DdsColorBorderActionHover} 2px solid`,
  outlineOffset: outlineInset,
};
