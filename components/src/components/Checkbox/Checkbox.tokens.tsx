import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import {
  dangerInputfield,
  focusVisible,
  hoverDangerInputfield,
  hoverInputfield
} from '../../helpers/styling';

const {
  colors: Colors,
  spacing: Spacing,
  fontPackages: FontPackages,
  borderRadius: BorderRadius
} = ddsBaseTokens;

const checkboxBase: CSSObject = {
  border: '1px solid',
  backgroundColor: Colors.DdsColorNeutralsWhite,
  borderColor: Colors.DdsColorNeutralsGray5,
  borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
  height: FontPackages.supportingStyle_inputtext_02.base.fontSize,
  width: FontPackages.supportingStyle_inputtext_02.base.fontSize
};

const checkboxCheckedBase: CSSObject = {
  borderColor: Colors.DdsColorInteractiveBase,
  backgroundColor: Colors.DdsColorInteractiveBase
};

const checkboxDisabledBase: CSSObject = {
  borderColor: Colors.DdsColorNeutralsGray5,
  color: Colors.DdsColorNeutralsGray6
};

const checkboxCheckedDisabledBase: CSSObject = {
  borderColor: Colors.DdsColorNeutralsGray6,
  backgroundColor: Colors.DdsColorNeutralsGray6
};
const checkboxReadOnlyBase: CSSObject = {
  backgroundColor: 'transparent'
};

const checkboxCheckedReadOnlyBase: CSSObject = {
  borderColor: Colors.DdsColorNeutralsGray6,
  backgroundColor: Colors.DdsColorNeutralsGray6
};

const checkboxHoverBase: CSSObject = {
  ...hoverInputfield
};

const checkboxCheckedHoverBase: CSSObject = {
  backgroundColor: Colors.DdsColorInteractiveDark,
  boxShadow: `inset 0 0 0 1px  ${Colors.DdsColorInteractiveDark}`,
  borderColor: Colors.DdsColorInteractiveDark
};

const checkboxDangerBase: CSSObject = {
  ...dangerInputfield
};
const checkboxDangerHoverBase: CSSObject = {
  ...hoverDangerInputfield
};
const focusBase: CSSObject = {
  ...focusVisible
};

const checkmarkBase: CSSObject = {
  borderWidth: '0 1px 1px 0',
  transform: 'rotate(45deg)',
  left: '35%',
  top: '10%',
  width: '30%',
  height: '65%'
};

const checkmarkIndeterminateBase: CSSObject = {
  borderWidth: '1px 0 0 0'
};

const containerBase: CSSObject = {
  ...FontPackages.body_sans_02.base
};

const containerWithLabelBase: CSSObject = {
  ...FontPackages.body_sans_02.base,
  padding: `0 ${Spacing.SizesDdsSpacingLocalX025} 0 ${
    FontPackages.supportingStyle_inputtext_02.numbers.fontSizeNumber +
    Spacing.SizesDdsSpacingLocalX075NumberPx
  }px`
};

const containerNoLabelBase: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX0125} ${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX15}`
};

export const checkboxTokens = {
  checkbox: {
    base: checkboxBase,
    spaceLeft: Spacing.SizesDdsSpacingLocalX025,
    hover: {
      base: checkboxHoverBase
    },
    disabled: {
      base: checkboxDisabledBase
    },
    readOnly: {
      base: checkboxReadOnlyBase
    },
    checked: {
      base: checkboxCheckedBase,
      hover: {
        base: checkboxCheckedHoverBase
      },
      disabled: {
        base: checkboxCheckedDisabledBase
      },
      readOnly: {
        base: checkboxCheckedReadOnlyBase
      }
    },
    indeterminate: {
      base: checkboxCheckedBase,
      hover: {
        base: checkboxCheckedHoverBase
      },
      disabled: {
        base: checkboxCheckedDisabledBase
      },
      readOnly: {
        base: checkboxCheckedReadOnlyBase
      }
    },
    danger: {
      base: checkboxDangerBase,
      hover: {
        base: checkboxDangerHoverBase
      }
    }
  },
  checkmark: {
    base: checkmarkBase,
    color: Colors.DdsColorNeutralsWhite,
    indeterminate: {
      base: checkmarkIndeterminateBase
    }
  },
  container: {
    base: containerBase,
    focus: {
      base: focusBase
    },
    withLabel: {
      base: containerWithLabelBase
    },
    noLabel: {
      base: containerNoLabelBase
    }
  }
};
