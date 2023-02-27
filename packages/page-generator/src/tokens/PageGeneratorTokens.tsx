import { ScreenSize } from '@norges-domstoler/dds-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { spacing: Spacing } = ddsBaseTokens;

export const PageGeneratorTokens = {
  columnGaps: {
    [ScreenSize.XSmall]: Spacing.SizesDdsSpacingLocalX1,
    [ScreenSize.Small]: Spacing.SizesDdsSpacingLocalX1,
    [ScreenSize.Medium]: Spacing.SizesDdsSpacingLocalX1,
    [ScreenSize.Large]: Spacing.SizesDdsSpacingLocalX1,
    [ScreenSize.XLarge]: Spacing.SizesDdsSpacingLocalX15,
  },
  rowGaps: {
    xs: Spacing.SizesDdsSpacingLocalX1,
    sm: Spacing.SizesDdsSpacingLocalX1,
    md: Spacing.SizesDdsSpacingLocalX1,
    lg: Spacing.SizesDdsSpacingLocalX1,
    xl: Spacing.SizesDdsSpacingLocalX15,
  },
  buttonRow: {
    marginTop: Spacing.SizesDdsSpacingLocalX1,
  },
};
