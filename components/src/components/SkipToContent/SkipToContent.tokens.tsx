import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  colors: Colors,
  spacing: Spacing,
  fontPackages: FontPackages
} = ddsBaseTokens;

const { focus } = ddsReferenceTokens;

const linkBase: CSSObject = {
  color: Colors.DdsColorNeutralsWhite,
  ...FontPackages.body_sans_02.base,
  textDecoration: 'none'
};

const wrapperBase: CSSObject = {
  backgroundColor: Colors.DdsColorPrimaryBase,
  padding: Spacing.SizesDdsSpacingLocalX025
};

export const skipToContentTokens = {
  link: {
    base: linkBase,
    focusOutline: {
      color: focus.colorDefault,
      width: focus.outlineWidth
    }
  },
  wrapper: {
    base: wrapperBase
  }
};
