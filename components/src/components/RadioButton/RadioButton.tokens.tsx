import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import {
  dangerInputfield,
  focusVisible,
  hoverDangerInputfield,
  hoverInputfield,
} from '../../helpers/styling';

const {
  colors: Colors,
  spacing: Spacing,
  fontPackages: FontPackages,
} = ddsBaseTokens;

const radioButtonBase: CSSObject = {
  border: '1px solid',
  borderColor: Colors.DdsColorNeutralsGray5,
  backgroundColor: Colors.DdsColorNeutralsWhite,
  height: FontPackages.supportingStyle_inputtext_02.numbers.fontSizeNumber,
  width: FontPackages.supportingStyle_inputtext_02.numbers.fontSizeNumber,
};

const radioButtonHoverBase: CSSObject = {
  ...hoverInputfield,
};
const radioButtonDisabledBase: CSSObject = {
  borderColor: Colors.DdsColorNeutralsGray5,
  color: Colors.DdsColorNeutralsGray6,
};
const radioButtonReadOnlyBase: CSSObject = {
  backgroundColor: 'transparent',
};

const radioButtonDangerBase: CSSObject = {
  ...dangerInputfield,
};

const radioButtonDangerHoverBase: CSSObject = {
  ...hoverDangerInputfield,
};

const radioButtonCheckedBase: CSSObject = {
  backgroundColor: Colors.DdsColorInteractiveBase,
  borderColor: Colors.DdsColorInteractiveBase,
};

const radioButtonCheckedHoverBase: CSSObject = {
  backgroundColor: Colors.DdsColorInteractiveDark,
  borderColor: Colors.DdsColorInteractiveDark,
  boxShadow: `inset 0 0 0 1px  ${Colors.DdsColorInteractiveDark}`,
};

const radioButtonCheckedDisabledBase: CSSObject = {
  borderColor: Colors.DdsColorNeutralsGray6,
  backgroundColor: Colors.DdsColorNeutralsGray6,
};
const radioButtonCheckedReadOnlyBase: CSSObject = {
  borderColor: Colors.DdsColorNeutralsGray6,
  backgroundColor: Colors.DdsColorNeutralsGray6,
};

const checkmarkBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  height: Spacing.SizesDdsSpacingLocalX05,
  width: Spacing.SizesDdsSpacingLocalX05,
  left: `calc(50% - ${Spacing.SizesDdsSpacingLocalX05NumberPx / 2}px)`,
  top: `calc(50% - ${Spacing.SizesDdsSpacingLocalX05NumberPx / 2}px)`,
};

const containerBase: CSSObject = {
  padding: `0 ${Spacing.SizesDdsSpacingLocalX025} 0 ${
    20 + Spacing.SizesDdsSpacingLocalX075NumberPx
  }px`,
};

const focusBase: CSSObject = {
  ...focusVisible,
};

export const radioButtonTokens = {
  radioButton: {
    base: radioButtonBase,
    spaceLeft: Spacing.SizesDdsSpacingLocalX025,
    hover: {
      base: radioButtonHoverBase,
    },
    disabled: {
      base: radioButtonDisabledBase,
    },
    readOnly: {
      base: radioButtonReadOnlyBase,
    },
    checked: {
      base: radioButtonCheckedBase,
      hover: {
        base: radioButtonCheckedHoverBase,
      },
      disabled: {
        base: radioButtonCheckedDisabledBase,
      },
      readOnly: {
        base: radioButtonCheckedReadOnlyBase,
      },
    },
    danger: {
      base: radioButtonDangerBase,
      hover: {
        base: radioButtonDangerHoverBase,
      },
    },
  },
  checkmark: {
    base: checkmarkBase,
  },
  container: {
    base: containerBase,
    focus: {
      base: focusBase,
    },
  },
};
