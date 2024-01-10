import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { spacing } = ddsBaseTokens;

const contentContainerPaddingNumberPx = spacing.SizesDdsSpacingX025NumberPx;
const contentContainerPadding = `${contentContainerPaddingNumberPx}px`;

const container = {
  padding: `${
    spacing.SizesDdsSpacingX1NumberPx - contentContainerPaddingNumberPx
  }px ${
    spacing.SizesDdsSpacingX1NumberPx - contentContainerPaddingNumberPx
  }px ${
    spacing.SizesDdsSpacingX1NumberPx - contentContainerPaddingNumberPx
  }px ${
    spacing.SizesDdsSpacingX15NumberPx - contentContainerPaddingNumberPx
  }px`,
};

const contentContainer = {
  gap: spacing.SizesDdsSpacingX1,
  padding: contentContainerPadding,
};

export const drawerTokens = {
  container,
  contentContainer,
};
