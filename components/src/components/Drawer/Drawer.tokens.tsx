import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { colors: Colors, spacing: Spacing } = ddsBaseTokens;

const containerBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  padding: `${
    Spacing.SizesDdsSpacingLocalX1NumberPx -
    Spacing.SizesDdsSpacingLocalX025NumberPx
  }px ${
    Spacing.SizesDdsSpacingLocalX1NumberPx -
    Spacing.SizesDdsSpacingLocalX025NumberPx
  }px ${
    Spacing.SizesDdsSpacingLocalX1NumberPx -
    Spacing.SizesDdsSpacingLocalX025NumberPx
  }px ${
    Spacing.SizesDdsSpacingLocalX15NumberPx -
    Spacing.SizesDdsSpacingLocalX025NumberPx
  }px`
};

const contentContainerBase: CSSObject = {
  gap: Spacing.SizesDdsSpacingLocalX1,
  padding: Spacing.SizesDdsSpacingLocalX025
};

const containerLarge: CSSObject = {
  maxWidth: '800px'
};

const containerSmall: CSSObject = {
  maxWidth: '400px'
};

export const drawerTokens = {
  container: {
    base: containerBase,
    size: {
      large: {
        base: containerLarge
      },
      small: {
        base: containerSmall
      }
    }
  },
  contentContainer: {
    base: contentContainerBase
  }
};
