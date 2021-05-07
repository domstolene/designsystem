import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
    colors: Colors,
    spacing: Spacing,
    fontPackages: FontPackages,
    borderRadius: BorderRadius,
} = ddsBaseTokens;

const labelBase: CSSObject = {
    color: Colors.DdsColorNeutralsGray7,
    padding: `${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX05} 0 ${Spacing.SizesDdsSpacingLocalX1}`,
    ...FontPackages.sansBoldx0_875.base
}

const labelHoverBase: CSSObject = {
    color: Colors.DdsColorPrimaryBase,
}

const labelFocusBase: CSSObject = {
    color: Colors.DdsColorPrimaryBase,
}

const containerBase: CSSObject = {
    borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
    border: '1px solid',
    borderColor: Colors.DdsColorNeutralsGray5,
    height: '72px',
    width: '320px'
}

const containerHoverBase: CSSObject = {
    backgroundColor: Colors.DdsColorPrimaryLightest,
    borderColor: Colors.DdsColorPrimaryBase
}

const containerFocusBase: CSSObject = {
    borderColor: Colors.DdsColorPrimaryBase
}

const containerDangerBase: CSSObject = {
    borderColor: Colors.DdsColorDangerBase
}

const containerDangerHoverBase: CSSObject = {
    backgroundColor: Colors.DdsColorDangerLightest,
    borderColor: Colors.DdsColorDangerBase
}

const containerDangerFocusBase: CSSObject = {
    borderColor: Colors.DdsColorDangerDark
}

const inputBase: CSSObject = {
    padding: `0 ${Spacing.SizesDdsSpacingLocalX05} 0 ${Spacing.SizesDdsSpacingLocalX1}`,
    ...FontPackages.sansRegularx1_125.base
}
const placeholderBase: CSSObject = {
    color: Colors.DdsColorNeutralsGray6,
    ...FontPackages.sansItalicx1_125.base
}

const dropdownIndicatorBase: CSSObject = {
    color: Colors.DdsColorNeutralsGray6,
    padding: `${Spacing.SizesDdsSpacingLocalX025} ${Spacing.SizesDdsSpacingLocalX05}`,
}
const clearIndicatorBase: CSSObject = {
    color: Colors.DdsColorNeutralsGray6,
    padding: `${Spacing.SizesDdsSpacingLocalX025} ${Spacing.SizesDdsSpacingLocalX05}`,
}

const optionsListBase: CSSObject = {
    border: '1px solid',
    borderColor: Colors.DdsColorPrimaryBase,
    backgroundColor: Colors.DdsColorNeutralsWhite,
    borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
}

const optionBase: CSSObject = {
    padding: `${Spacing.SizesDdsSpacingLocalX05} ${Spacing.SizesDdsSpacingLocalX1}`,
    ...FontPackages.sansRegularx1.base
}

const optionHoverBase: CSSObject = {
    backgroundColor: Colors.DdsColorPrimaryLighter
}

const optionSelectedBase: CSSObject = {
    backgroundColor: Colors.DdsColorPrimaryLightest,
    ...FontPackages.sansBoldx1.base

}

const noOptionsMessageBase: CSSObject = {
    padding: `${Spacing.SizesDdsSpacingLocalX05} ${Spacing.SizesDdsSpacingLocalX1}`,
    color: Colors.DdsColorNeutralsGray6,
    ...FontPackages.sansItalicx1.base
}

const clearIndicatorHoverBase: CSSObject = {
    color: Colors.DdsColorPrimaryBase
}

const containerDisabledBase: CSSObject = {
    backgroundColor: Colors.DdsColorNeutralsGray1
}

const containerReadOnlyBase: CSSObject = {
    borderColor:'transparent',
    backgroundColor: 'transparent',
}


export const selectTokens = {
    container: {
        base: containerBase,
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
            },
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
        },
    },
    input: {
        base: inputBase
    },
    placeholder: {
        base: placeholderBase
    },
    optionsList: {
        base: optionsListBase
    },
    option: {
        base: optionBase,
        hover: {
            base: optionHoverBase,
        },
        selected: {
            base: optionSelectedBase,
            icon: {
                margin: `0 ${Spacing.SizesDdsSpacingLocalX05} 0 0`
            }
        }
    },
    dropdownIndicator: {
        base: dropdownIndicatorBase
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
}