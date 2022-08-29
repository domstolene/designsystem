import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import { Property } from 'csstype';
import { scrollbarWidthNumberPx } from '../ScrollableContainer/ScrollableContainer.tokens';

const { colors: Colors, spacing: Spacing } = ddsBaseTokens;

const { textInput: TextInput } = ddsReferenceTokens;

const inputMultilineBase: CSSObject = {
  height: 'auto',
  resize: 'vertical',
  paddingBottom: Spacing.SizesDdsSpacingLocalX05,
  verticalAlign: 'bottom',
};
const inputMultilineWithLabelBase: CSSObject = {
  paddingTop: Spacing.SizesDdsSpacingLocalX2,
  minHeight: '99px',
};

const inputMultilineNoLabelBase: CSSObject = {
  paddingTop: Spacing.SizesDdsSpacingLocalX075,
  minHeight: '78px',
};

const inputLabelMultilineBase: CSSObject = {
  marginTop: Spacing.SizesDdsSpacingLocalX0125,
  marginLeft: Spacing.SizesDdsSpacingLocalX0125,
  width: `calc(100% - ${
    scrollbarWidthNumberPx + Spacing.SizesDdsSpacingLocalX0125NumberPx + 1
  }px)`,
  backgroundColor: Colors.DdsColorNeutralsWhite,
  padding: `${Spacing.SizesDdsSpacingLocalX075NumberPx - 2}px ${
    Spacing.SizesDdsSpacingLocalX1
  } 0px ${Spacing.SizesDdsSpacingLocalX1NumberPx - 2}px`,
};

const defaultWidth: Property.Width<string> = '320px';

export const textInputTokens = {
  general: TextInput,
  multiline: {
    base: inputMultilineBase,
    hasLabel: {
      base: inputMultilineWithLabelBase,
    },
    noLabel: {
      base: inputMultilineNoLabelBase,
    },
  },
  label: {
    multiline: {
      base: inputLabelMultilineBase,
    },
  },
  wrapper: {
    defaultWidth: defaultWidth,
  },
};
