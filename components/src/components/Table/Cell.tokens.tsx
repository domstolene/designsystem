import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { focusVisible } from '../../helpers/styling';

const { colors: Colors, spacing: Spacing } = ddsBaseTokens;

const cellBase: CSSObject = {};

const compactCellBase: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX075}`,
};

const headBase: CSSObject = {
  backgroundColor: Colors.DdsColorPrimaryLightest,
};

const dataBase: CSSObject = {};

const normalCellBase: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX15} ${Spacing.SizesDdsSpacingLocalX075}`,
};

const sortCellIconBase: CSSObject = {
  marginInlineStart: Spacing.SizesDdsSpacingLocalX05,
};

const sortCellFocusBase: CSSObject = {
  ...focusVisible,
};

const textAndIconBase: CSSObject = {
  marginRight: Spacing.SizesDdsSpacingLocalX075,
};

export const cellTokens = {
  base: cellBase,
  density: {
    normal: {
      base: normalCellBase,
    },
    compact: {
      base: compactCellBase,
    },
  },
  head: {
    base: headBase,
    sortCell: {
      icon: {
        base: sortCellIconBase,
      },
      focus: {
        base: sortCellFocusBase,
      },
    },
  },
  data: {
    base: dataBase,
    layout: {
      textAndIcon: {
        base: textAndIconBase,
      },
    },
  },
};
