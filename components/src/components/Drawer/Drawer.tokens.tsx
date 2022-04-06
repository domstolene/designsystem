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

const containerLarge: CSSObject = {
  maxWidth: '800px'
};

const containerMedium: CSSObject = {
  maxWidth: '400px'
};

export const drawerTokens = {
  container: {
    base: containerBase,
    size: {
      large: {
        base: containerLarge
      },
      medium: {
        base: containerMedium
      }
    }
  },
  contentContainer: {
    base: contentContainerBase
  }
};
