import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  colors: Colors,
  fontPackages: FontPackages,
  border: Border
} = ddsBaseTokens;

const { textDefault } = ddsReferenceTokens;

const bodyRowBase: CSSObject = {
  color: textDefault.textColor,
  ...textDefault.font
};

const headRowBase: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.sansBoldx1.base,
  textAlign: 'left'
};

const bodyOddBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite
};

const bodyEvenBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsGray1
};

const bodySelectedBase: CSSObject = {
  backgroundColor: Colors.DdsColorSecondaryLightest
};

const bodyHoverBase: CSSObject = {
  backgroundColor: Colors.DdsColorSecondaryLightest
};

const bodySumBase: CSSObject = {
  ...FontPackages.sansBoldx1.base,
  borderTop: `${Border.BordersDdsBorderStyle1StrokeWeight} solid ${Colors.DdsColorNeutralsGray4}`,
  borderBottom: `${Border.BordersDdsBorderStyle1StrokeWeight} solid ${Colors.DdsColorNeutralsGray4}`,
  backgroundColor: Colors.DdsColorNeutralsWhite
};

export const rowTokens = {
  head: {
    base: headRowBase
  },
  body: {
    base: bodyRowBase,
    odd: {
      base: bodyOddBase
    },
    even: {
      base: bodyEvenBase
    },
    selected: {
      base: bodySelectedBase
    },
    hover: {
      base: bodyHoverBase
    },
    mode: {
      sum: {
        base: bodySumBase
      },
      normal: {
        base: {}
      }
    }
  }
};
