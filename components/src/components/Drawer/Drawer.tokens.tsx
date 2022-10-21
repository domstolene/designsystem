import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { spacing } = ddsBaseTokens;

const contentContainerPaddingNumberPx =
  spacing.SizesDdsSpacingLocalX025NumberPx;
const contentContainerPadding = `${contentContainerPaddingNumberPx}px`;

const container = {
  padding: `${
    spacing.SizesDdsSpacingLocalX1NumberPx - contentContainerPaddingNumberPx
  }px ${
    spacing.SizesDdsSpacingLocalX1NumberPx - contentContainerPaddingNumberPx
  }px ${
    spacing.SizesDdsSpacingLocalX1NumberPx - contentContainerPaddingNumberPx
  }px ${
    spacing.SizesDdsSpacingLocalX15NumberPx - contentContainerPaddingNumberPx
  }px`,
};

const contentContainer = {
  gap: spacing.SizesDdsSpacingLocalX1,
  padding: contentContainerPadding,
};

export const drawerTokens = {
  container,
  contentContainer,
};
