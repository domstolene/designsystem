import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
    colors: Colors,
    spacing: Spacing,
    fontPackages: FontPackages,
    borderRadius: BorderRadius,
} = ddsBaseTokens;

const inputBase: CSSObject = {
    borderRadius: BorderRadius.RadiiDdsBorderRadius1Radius,
    border: `1px solid ${Colors.DdsColorNeutralsGray5}`,
    color: Colors.DdsColorNeutralsGray9
}
const inputFocusBase: CSSObject = {
    border: `1px solid ${Colors.DdsColorPrimaryBase}`,
    boxShadow: `0 0 0 1px ${Colors.DdsColorPrimaryBase}`,
    paddingLeft: `${Spacing.SizesDdsSpacingLocalX1NumberPx-1}px`
}
const inputHoverBase: CSSObject = {
    backgroundColor: Colors.DdsColorPrimaryLightest,
    border: `1px solid ${Colors.DdsColorPrimaryBase}`,
    boxShadow: `0 0 0 1px ${Colors.DdsColorPrimaryBase}`
}
const inputWithLabelBase: CSSObject = {
    padding:`${Spacing.SizesDdsSpacingLocalX15} ${Spacing.SizesDdsSpacingLocalX1} 0 ${Spacing.SizesDdsSpacingLocalX1NumberPx-1}px`
}

const inputNoLabelBase: CSSObject = {
    padding: `0 ${Spacing.SizesDdsSpacingLocalX1} 0 ${Spacing.SizesDdsSpacingLocalX1NumberPx-1}px`,
}

 const inputDisabledBase: CSSObject = {
     backgroundColor: Colors.DdsColorNeutralsGray1
 }

 const inputErrorBase: CSSObject = {
    borderColor: Colors.DdsColorDangerBase,
    boxShadow: `0 0 0 1px ${Colors.DdsColorDangerBase}`
 }

 const inputErrorHoverBase: CSSObject = {
     backgroundColor: Colors.DdsColorDangerLightest,
    borderColor: Colors.DdsColorDangerBase,
    boxShadow: `0 0 0 1px ${Colors.DdsColorDangerBase}`
 }

 const inputErrorFocusBase: CSSObject = {
    borderColor: Colors.DdsColorDangerDarker,
    boxShadow: `0 0 0 1px ${Colors.DdsColorDangerDarker}`
 }

 const inputMultilineBase: CSSObject = {
    paddingTop: Spacing.SizesDdsSpacingLocalX2,
    paddingBottom: Spacing.SizesDdsSpacingLocalX05
 }

 const inputReadOnlyBase: CSSObject = {
     border:'none',
     backgroundColor: 'transparent',
     paddingLeft: Spacing.SizesDdsSpacingLocalX1
 }

const inputLabelBase: CSSObject = {
    color: Colors.DdsColorNeutralsGray7,
    padding: `${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX1}`,
}

const inputLabel = {
    font: FontPackages.sansBoldx0_875,
    base: inputLabelBase,
    multiline: {
        base: {
            backgroundColor: Colors.DdsColorNeutralsWhite,
            padding: `${Spacing.SizesDdsSpacingLocalX075NumberPx-1}px ${Spacing.SizesDdsSpacingLocalX1}px 0px ${Spacing.SizesDdsSpacingLocalX1NumberPx-1}px`
        }
    }
}



 const inputMultilineHoverBase: CSSObject = {

 }

export const inputTokens = {
    base: inputBase,
    font: FontPackages.sansRegularx1_125,
    focusColor: Colors.DdsColorPrimaryBase,
    hover: {
        base: inputHoverBase
    },
    focus: {
        base: inputFocusBase
    },
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
        hover: {
            base: inputMultilineHoverBase
        }
    },
    error: {
        base: inputErrorBase,
        hover: {
          base: inputErrorHoverBase,
        },
        focus: {
            base: inputErrorFocusBase
        }
    },
    label: inputLabel
}