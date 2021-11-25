import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import * as CSS from 'csstype';

const { colors: Colors, spacing: Spacing } = ddsBaseTokens;

const { textInput: TextInput } = ddsReferenceTokens;

const inputMultilineBase: CSSObject = {
  paddingBottom: Spacing.SizesDdsSpacingLocalX05
};
const inputMultilineWithLabelBase: CSSObject = {
  paddingTop: Spacing.SizesDdsSpacingLocalX2
};

const inputMultilineNoLabelBase: CSSObject = {
  paddingTop: Spacing.SizesDdsSpacingLocalX075
};

const inputLabelMultilineBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  padding: `${Spacing.SizesDdsSpacingLocalX075NumberPx - 1}px ${
    Spacing.SizesDdsSpacingLocalX1
  } 0px ${Spacing.SizesDdsSpacingLocalX1NumberPx - 1}px`
};

const defaultWidth: CSS.WidthProperty<string> = '320px';

export const textInputTokens = {
  general: TextInput,
  focusColor: TextInput.input.focus.borderColor,

  multiline: {
    base: inputMultilineBase,
    withLabel: {
      base: inputMultilineWithLabelBase
    },
    noLabel: {
      base: inputMultilineNoLabelBase
    }
  },
  label: {
    multiline: {
      base: inputLabelMultilineBase
    }
  },
  wrapper: {
    defaultWidth: defaultWidth
  },
  container: {
    multiline: {
      withLabel: {
        height: '99px'
      },
      noLabel: {
        height: '78px'
      }
    }
  }
};
