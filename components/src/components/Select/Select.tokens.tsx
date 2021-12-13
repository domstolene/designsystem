import {
  ddsBaseTokens,
  ddsReferenceTokens
} from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import * as CSS from 'csstype';
import { calculateHeightWithLineHeight } from '../../helpers/functions';

const {
  colors: Colors,
  spacing: Spacing,
  fontPackages: FontPackages,
  borderRadius: BorderRadius,
  border: Border
} = ddsBaseTokens;

const { textDefault } = ddsReferenceTokens;

const multiValueContainerHeight = `${
  Spacing.SizesDdsSpacingLocalX025NumberPx * 2 +
  calculateHeightWithLineHeight(
    FontPackages.supportingStyle_inputtext_01.numbers.lineHeightNumber,
    FontPackages.supportingStyle_inputtext_01.numbers.fontSizeNumber
  )
}px`;

//custom spacing so that multiselect has same height as single value select
const valueContainerMarginBottomMulti = `${
  Spacing.SizesDdsSpacingLocalX05NumberPx +
  Spacing.SizesDdsSpacingLocalX0125NumberPx
}px`;

const labelBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray7,
  paddingTop: Spacing.SizesDdsSpacingLocalX075,
  paddingLeft: Spacing.SizesDdsSpacingLocalX1,
  paddingBottom: 0,
  paddingRight: Spacing.SizesDdsSpacingLocalX05,
  ...FontPackages.supportingStyle_label_01.base
};

const labelHoverBase: CSSObject = {
  color: Colors.DdsColorInteractiveBase
};

const labelFocusBase: CSSObject = {
  color: Colors.DdsColorInteractiveBase
};

const valueContainerWithLabelBase: CSSObject = {
  marginBottom: Spacing.SizesDdsSpacingLocalX075
};

const valueContainerNoLabelBase: CSSObject = {
  marginBottom: Spacing.SizesDdsSpacingLocalX075
};

const valueContainerIsMultiBase: CSSObject = {
  height: multiValueContainerHeight,
  marginBottom: valueContainerMarginBottomMulti
};

const containerBase: CSSObject = {
  borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
  border: `${Border.BordersDdsBorderStyle1StrokeWeight} solid`,
  borderColor: Colors.DdsColorNeutralsGray5,
  backgroundColor: Colors.DdsColorNeutralsWhite
};

const containerHoverBase: CSSObject = {
  backgroundColor: Colors.DdsColorInteractiveLightest,
  borderColor: Colors.DdsColorInteractiveBase
};

const containerFocusBase: CSSObject = {
  borderColor: Colors.DdsColorInteractiveBase
};

const containerDangerBase: CSSObject = {
  borderColor: Colors.DdsColorDangerBase
};

const containerDangerHoverBase: CSSObject = {
  backgroundColor: Colors.DdsColorDangerLightest,
  borderColor: Colors.DdsColorDangerBase
};

const containerDangerFocusBase: CSSObject = {
  borderColor: Colors.DdsColorDangerDark
};

const inputBase: CSSObject = {
  padding: `0 ${Spacing.SizesDdsSpacingLocalX05} 0 ${Spacing.SizesDdsSpacingLocalX1}`,
  ...FontPackages.supportingStyle_inputtext_02.base
};
const inputNoLabelBase: CSSObject = {
  paddingTop: Spacing.SizesDdsSpacingLocalX075
};
const placeholderBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray6,
  ...FontPackages.supportingStyle_placeholdertext_01.base
};

const indicatorsContainerWithLabelBase: CSSObject = {
  marginBottom: Spacing.SizesDdsSpacingLocalX1
};
const indicatorsContainerNoLabelBase: CSSObject = {
  marginBottom: Spacing.SizesDdsSpacingLocalX075
};

const indicatorsContainerIsMultiBase: CSSObject = {
  marginBottom: Spacing.SizesDdsSpacingLocalX05
};

const dropdownIndicatorBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray6,
  padding: 0
};

const dropdownIndicatorHoverBase: CSSObject = {
  color: Colors.DdsColorInteractiveBase
};

const drodownIndicatorReadOnlyBase: CSSObject = {
  color: 'transparent'
};

const clearIndicatorBase: CSSObject = {
  color: Colors.DdsColorNeutralsGray6,
  padding: ` 0 ${Spacing.SizesDdsSpacingLocalX025} 0 0`
};

const clearIndicatorHoverBase: CSSObject = {
  color: Colors.DdsColorInteractiveBase
};

const optionsListBase: CSSObject = {
  border: '1px solid',
  borderColor: Colors.DdsColorInteractiveBase,
  backgroundColor: Colors.DdsColorNeutralsWhite,
  borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius
};

const optionBase: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX05} ${Spacing.SizesDdsSpacingLocalX1}`,
  ...FontPackages.body_sans_02.base,
  color: textDefault.textColor
};

const optionHoverBase: CSSObject = {
  backgroundColor: Colors.DdsColorInteractiveLighter
};

const optionSelectedBase: CSSObject = {
  backgroundColor: Colors.DdsColorInteractiveLightest,
  ...FontPackages.body_sans_02.base,
  fontWeight: 600
};

const noOptionsMessageBase: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX05} ${Spacing.SizesDdsSpacingLocalX1}`,
  color: Colors.DdsColorNeutralsGray6,
  ...FontPackages.supportingStyle_placeholdertext_01.base
};

const multiValueBase: CSSObject = {
  borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
  margin: Spacing.SizesDdsSpacingLocalX0125
};
const multiValueEnabledBase: CSSObject = {
  backgroundColor: Colors.DdsColorInteractiveLighter
};

const multiValueDisabledBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsGray3
};

const multiValueLabelBase: CSSObject = {
  paddingTop: `${Spacing.SizesDdsSpacingLocalX025}`,
  paddingRight: `${Spacing.SizesDdsSpacingLocalX05}`,
  paddingLeft: `${Spacing.SizesDdsSpacingLocalX05}`,
  paddingBottom: `${Spacing.SizesDdsSpacingLocalX025}`,
  color: Colors.DdsColorNeutralsGray9,
  ...FontPackages.supportingStyle_inputtext_01.base,
  fontWeight: 'bold'
};
const multiValueRemoveBase: CSSObject = {
  padding: `${Spacing.SizesDdsSpacingLocalX05}`,
  color: Colors.DdsColorNeutralsGray9
};

const multiValueRemoveHoverBase: CSSObject = {
  color: Colors.DdsColorNeutralsWhite,
  backgroundColor: Colors.DdsColorInteractiveBase
};

const containerDisabledBase: CSSObject = {
  backgroundColor: Colors.DdsColorNeutralsGray1,
  borderColor: Colors.DdsColorNeutralsGray5
};

const containerReadOnlyBase: CSSObject = {
  borderColor: 'transparent',
  backgroundColor: 'transparent'
};

const defaultWidth: CSS.WidthProperty<string> = '320px';

export const selectTokens = {
  container: {
    base: containerBase,
    defaultWidth: defaultWidth,
    hover: {
      base: containerHoverBase
    },
    focus: {
      base: containerFocusBase
    },
    danger: {
      base: containerDangerBase,
      hover: {
        base: containerDangerHoverBase
      },
      focus: {
        base: containerDangerFocusBase
      }
    },
    disabled: {
      base: containerDisabledBase
    },
    readOnly: {
      base: containerReadOnlyBase
    }
  },
  label: {
    base: labelBase,
    hover: {
      base: labelHoverBase
    },
    focus: {
      base: labelFocusBase
    }
  },
  input: {
    base: inputBase,
    noLabel: {
      base: inputNoLabelBase
    }
  },
  placeholder: {
    base: placeholderBase
  },
  optionsList: {
    base: optionsListBase,
    spaceTop: Spacing.SizesDdsSpacingLocalX1NumberPx + 2 //grunnet shadow-box
  },
  option: {
    base: optionBase,
    hover: {
      base: optionHoverBase
    },
    selected: {
      base: optionSelectedBase,
      icon: {
        margin: `0 ${Spacing.SizesDdsSpacingLocalX05} 0 0`
      }
    }
  },
  valueContainer: {
    withLabel: {
      base: valueContainerWithLabelBase
    },
    noLabel: {
      base: valueContainerNoLabelBase
    },
    isMulti: {
      base: valueContainerIsMultiBase
    }
  },
  multiValue: {
    base: multiValueBase,
    enabled: {
      base: multiValueEnabledBase
    },
    disabled: {
      base: multiValueDisabledBase
    }
  },
  multiValueLabel: {
    base: multiValueLabelBase
  },
  multiValueRemove: {
    base: multiValueRemoveBase,
    hover: {
      base: multiValueRemoveHoverBase
    }
  },
  indicatorsContainer: {
    withLabel: {
      base: indicatorsContainerWithLabelBase
    },
    noLabel: {
      base: indicatorsContainerNoLabelBase
    },
    isMulti: {
      base: indicatorsContainerIsMultiBase
    }
  },
  dropdownIndicator: {
    base: dropdownIndicatorBase,
    hover: {
      base: dropdownIndicatorHoverBase
    },
    readOnly: {
      base: drodownIndicatorReadOnlyBase
    }
  },
  noOptionsMessage: {
    base: noOptionsMessageBase
  },
  clearIndicator: {
    base: clearIndicatorBase,
    hover: {
      base: clearIndicatorHoverBase
    }
  }
};
