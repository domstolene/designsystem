import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
  colors: Colors,
  border: Border,
  spacing: Spacing,
  fontPackages: FontPackages
} = ddsBaseTokens;

const radioButtonBase: CSSObject = {
  border: '1px solid',
  borderColor: Colors.DdsColorNeutralsGray5,
  backgroundColor: Colors.DdsColorNeutralsWhite,
  height: FontPackages.supportingStyle_inputtext_02.numbers.fontSizeNumber,
  width: FontPackages.supportingStyle_inputtext_02.numbers.fontSizeNumber
};

const radioButtonHoverBase: CSSObject = {
  border: '2px solid',
  backgroundColor: Colors.DdsColorInteractiveLightest,
  borderColor: Colors.DdsColorInteractiveBase
};
const radioButtonDisabledBase: CSSObject = {
  border: '1px solid',
  borderColor: Colors.DdsColorNeutralsGray5,
  color: Colors.DdsColorNeutralsGray6
};
const radioButtonReadOnlyBase: CSSObject = {
  backgroundColor: 'transparent'
};

const radioButtonDangerBase: CSSObject = {
  border: '2px solid',
  borderColor: Colors.DdsColorDangerBase
};

const radioButtonDangerHoverBase: CSSObject = {
  border: '2px solid',
  backgroundColor: Colors.DdsColorDangerLightest,
  borderColor: Colors.DdsColorDangerBase
};

const radioButtonCheckedBase: CSSObject = {
  border: '2px solid',
  backgroundColor: Colors.DdsColorInteractiveBase,
  borderColor: Colors.DdsColorInteractiveBase
};

const radioButtonCheckedHoverBase: CSSObject = {
  border: '2px solid',
  backgroundColor: Colors.DdsColorInteractiveDark,
  borderColor: Colors.DdsColorInteractiveDark
};

const radioButtonCheckedDisabledBase: CSSObject = {
  border: '1px solid',
  borderColor: Colors.DdsColorNeutralsGray6,
  backgroundColor: Colors.DdsColorNeutralsGray6
};
const radioButtonCheckedReadOnlyBase: CSSObject = {
  border: '2px solid',
  borderColor: Colors.DdsColorNeutralsGray6,
  backgroundColor: Colors.DdsColorNeutralsGray6
};

const checkmarkBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsWhite,
  height: Spacing.SizesDdsSpacingLocalX05,
  width: Spacing.SizesDdsSpacingLocalX05,
  left: `calc(50% - ${Spacing.SizesDdsSpacingLocalX05NumberPx / 2}px)`,
  top: `calc(50% - ${Spacing.SizesDdsSpacingLocalX05NumberPx / 2}px)`
};

const containerBase: CSSObject = {
  marginRight: Spacing.SizesDdsSpacingLocalX075,
  padding: `${Spacing.SizesDdsSpacingLocalX025} ${
    Spacing.SizesDdsSpacingLocalX025
  } ${Spacing.SizesDdsSpacingLocalX025} ${
    20 + Spacing.SizesDdsSpacingLocalX075NumberPx
  }px`
};

export const radioButtonTokens = {
  radioButton: {
    base: radioButtonBase,
    spaceLeft: Spacing.SizesDdsSpacingLocalX025,
    hover: {
      base: radioButtonHoverBase
    },
    disabled: {
      base: radioButtonDisabledBase
    },
    readOnly: {
      base: radioButtonReadOnlyBase
    },
    checked: {
      base: radioButtonCheckedBase,
      hover: {
        base: radioButtonCheckedHoverBase
      },
      disabled: {
        base: radioButtonCheckedDisabledBase
      },
      readOnly: {
        base: radioButtonCheckedReadOnlyBase
      }
    },
    danger: {
      base: radioButtonDangerBase,
      hover: {
        base: radioButtonDangerHoverBase
      }
    }
  },
  checkmark: {
    base: checkmarkBase
  },
  container: {
    base: containerBase,
    focusOutline: {
      color: Border.BordersDdsBorderFocusBaseStroke,
      width: Border.BordersDdsBorderFocusBaseStrokeWeight
    }
  }
};
