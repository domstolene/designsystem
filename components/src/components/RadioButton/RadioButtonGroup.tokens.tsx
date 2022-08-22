import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { spacing: Spacing } = ddsBaseTokens;

const groupContainerRowBase: CSSObject = {
  gap: Spacing.SizesDdsSpacingLocalX075,
};

const groupContainerColumnBase: CSSObject = {
  gap: Spacing.SizesDdsSpacingLocalX05,
};

const containerBase: CSSObject = {
  gap: Spacing.SizesDdsSpacingLocalX0125,
};

export const radioButtonGroupTokens = {
  label: {
    spaceLeft: Spacing.SizesDdsSpacingLocalX025,
  },
  container: {
    base: containerBase,
  },
  groupContainer: {
    direction: {
      row: {
        base: groupContainerRowBase,
      },
      column: {
        base: groupContainerColumnBase,
      },
    },
  },
};
