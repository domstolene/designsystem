import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { focusVisibleInset } from '../../helpers/styling';

const {
  colors: Colors,
  fontPackages: FontPackages,
  border: Border
} = ddsBaseTokens;

const { textDefault } = ddsReferenceTokens;

const bodyRowBase: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.body_sans_02.base
};

const headRowBase: CSSObject = {
  color: textDefault.textColor,
  ...FontPackages.body_sans_02.base,
  fontWeight: 600,
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

const bodyFocusBase: CSSObject = {
  ...focusVisibleInset
};

const bodySumBase: CSSObject = {
  ...FontPackages.body_sans_02.base,
  fontWeight: 600,
  borderTop: `${Border.BordersDdsBorderStyleLightStrokeWeight} solid ${Colors.DdsColorNeutralsGray4}`,
  borderBottom: `${Border.BordersDdsBorderStyleLightStrokeWeight} solid ${Colors.DdsColorNeutralsGray4}`,
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
    focus: {
      base: bodyFocusBase
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
