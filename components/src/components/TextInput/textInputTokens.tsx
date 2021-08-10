import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import * as CSS from 'csstype';

const {
  colors: Colors,
  spacing: Spacing,
  fontPackages: FontPackages
} = ddsBaseTokens;

const { textInput: TextInput } = ddsReferenceTokens;

const inputBase: CSSObject = {
  border: `1px solid ${Colors.DdsColorNeutralsGray5}`
};

const inputWithLabelBase: CSSObject = {
  padding: `${
    Spacing.SizesDdsSpacingLocalX075NumberPx +
    FontPackages.sansBoldx0_875.numbers.lineHeightNumber *
      0.01 *
      FontPackages.sansBoldx0_875.numbers.fontSizeNumber
  }px ${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX075} ${
    Spacing.SizesDdsSpacingLocalX1
  }`
};

const inputNoLabelBase: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX1}`
};

const inputDisabledBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsGray1
};

const inputErrorBase: CSSObject = {
  borderColor: Colors.DdsColorDangerBase,
  boxShadow: `0 0 0 1px ${Colors.DdsColorDangerBase}`
};

const inputErrorHoverBase: CSSObject = {
  backgroundColor: Colors.DdsColorDangerLightest,
  borderColor: Colors.DdsColorDangerBase,
  boxShadow: `0 0 0 1px ${Colors.DdsColorDangerBase}`
};

const inputErrorFocusBase: CSSObject = {
  borderColor: Colors.DdsColorDangerDarker,
  boxShadow: `0 0 0 1px ${Colors.DdsColorDangerDarker}`
};

const inputMultilineBase: CSSObject = {
  paddingBottom: Spacing.SizesDdsSpacingLocalX05
};
const inputMultilineWithLabelBase: CSSObject = {
  paddingTop: Spacing.SizesDdsSpacingLocalX2
};

const inputMultilineNoLabelBase: CSSObject = {
  paddingTop: Spacing.SizesDdsSpacingLocalX075
};

const inputReadOnlyBase: CSSObject = {
  border: 'none',
  backgroundColor: 'transparent',
  paddingLeft: Spacing.SizesDdsSpacingLocalX1
};

const inputLabelBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray7,
  padding: `${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX1}`,
  ...FontPackages.sansBoldx0_875.base
};

const inputLabel = {
  base: inputLabelBase,
  multiline: {
    base: {
      backgroundColor: Colors.DdsColorNeutralsWhite,
      padding: `${Spacing.SizesDdsSpacingLocalX075NumberPx - 1}px ${
        Spacing.SizesDdsSpacingLocalX1
      } 0px ${Spacing.SizesDdsSpacingLocalX1NumberPx - 1}px`
    }
  }
};

const defaultWidth: CSS.Property.Width<string> = '320px';

const containerTokens = {
  multiline: {
    withLabel: {
      height: '99px'
    },
    noLabel: {
      height: '78px'
    }
  }
};

export const inputTokens = {
  general: TextInput,
  base: inputBase,
  focusColor: TextInput.input.focus.borderColor,
  withLabel: {
    base: inputWithLabelBase
  },
  noLabel: {
    base: inputNoLabelBase
  },
  readOnly: {
    base: inputReadOnlyBase
  },
  disabled: {
    base: inputDisabledBase
  },
  multiline: {
    base: inputMultilineBase,
    withLabel: {
      base: inputMultilineWithLabelBase
    },
    noLabel: {
      base: inputMultilineNoLabelBase
    }
  },
  error: {
    base: inputErrorBase,
    hover: {
      base: inputErrorHoverBase
    },
    focus: {
      base: inputErrorFocusBase
    }
  },
  label: inputLabel,
  wrapper: {
    defaultWidth: defaultWidth
  },
  container: containerTokens
};
