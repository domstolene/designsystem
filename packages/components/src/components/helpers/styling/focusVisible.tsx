import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { spacing, colors } = ddsBaseTokens;

export const outlineOffset = spacing.SizesDdsSpacingX0125;
export const outlineInset = `-${spacing.SizesDdsSpacingX025}`;

export const focusVisible = {
  outline: `${colors.DdsColorInfoDarkest} 2px solid`,
  outlineOffset: outlineOffset,
  boxShadow: `0 0 0 2px ${colors.DdsColorInfoLightest}`,
};

export const focusVisibleTransitionValue = 'outline-offset 0.2s';

export const focusVisibleInset = {
  outline: `${colors.DdsColorInfoDarkest} 2px solid`,
  outlineOffset: outlineInset,
};

// egen stil siden react-select bruker focus-state og hover-styling samtidig; ikke nødvendig hvis de kan skilles.
export const focusVisibleInsetSelect = {
  outline: `${colors.DdsColorInteractiveBase} 2px solid`,
  outlineOffset: outlineInset,
};
