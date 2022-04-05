import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { colors: Colors, spacing: Spacing } = ddsBaseTokens;

const containerBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  padding: `${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX15} ${Spacing.SizesDdsSpacingLocalX15}`
};

const contentContainerBase: CSSObject = {
  gap: Spacing.SizesDdsSpacingLocalX1
};

export const drawerTokens = {
  container: {
    base: containerBase
  },
  contentContainer: {
    base: contentContainerBase
  }
};
