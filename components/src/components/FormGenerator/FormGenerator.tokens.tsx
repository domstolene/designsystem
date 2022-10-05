import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { ScreenSize } from '../../hooks/useScreenSize';

const { spacing: Spacing } = ddsBaseTokens;

export const formGeneratorTokens = {
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
};
