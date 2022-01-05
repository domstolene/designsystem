import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const { spacing: Spacing, fontPackages: FontPackages } = ddsBaseTokens;
const { textDefault } = ddsReferenceTokens;

const inheritBase: CSSObject = {
  font: 'inherit'
};

const bodySans01Base: CSSObject = {
  ...FontPackages.body_sans_01.base
};

const bodySans02Base: CSSObject = {
  ...FontPackages.body_sans_02.base
};

const bodySans03Base: CSSObject = {
  ...FontPackages.body_sans_03.base
};

const bodySans04Base: CSSObject = {
  ...FontPackages.body_sans_04.base
};

const bodySerif01Base: CSSObject = {
  ...FontPackages.body_serif_01.base
};

const bodySerif02Base: CSSObject = {
  ...FontPackages.body_serif_02.base
};

const bodySerif03Base: CSSObject = {
  ...FontPackages.body_serif_03.base
};

const bodySerif04Base: CSSObject = {
  ...FontPackages.body_serif_04.base
};

const base: CSSObject = {
  margin: `${Spacing.SizesDdsSpacingLocalX1} 0`,
  color: textDefault.textColor
};

export const listTokens = {
  base: base,
  spaceLeft: Spacing.SizesDdsSpacingLocalX2,
  sizes: {
    bodySans01: bodySans01Base,
    bodySans02: bodySans02Base,
    bodySans03: bodySans03Base,
    bodySans04: bodySans04Base,
    bodySerif01: bodySerif01Base,
    bodySerif02: bodySerif02Base,
    bodySerif03: bodySerif03Base,
    bodySerif04: bodySerif04Base,
    inherit: inheritBase
  }
};
