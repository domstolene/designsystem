import { ddsBaseTokens, ddsReferenceTokens } from '@norges-domstoler/dds-design-tokens';

const {
    colors: Colors,
    fontPackages: FontPackages,
    spacing: Spacing
} = ddsBaseTokens;

const {
    focus,
    textDefault
} = ddsReferenceTokens;

export const textColors = {
    primary: Colors.DdsColorPrimaryBase,
    danger: Colors.DdsColorDangerBase,
    success: Colors.DdsColorSuccessBase,
    warning: Colors.DdsColorWarningBase
}

export const typographyTokens = {
    p: {
        base: {
            ...textDefault.font,
            color: textDefault.textColor
        }
    },
    a: {
        base: {
            color: Colors.DdsColorPrimaryBase,
            ...FontPackages.sansRegularx1,
            textDecoration: 'underline',
            width: 'fit-content',
            padding: `0 ${Spacing.SizesDdsSpacingLocalX0125}`
        },
        hover: {
            color: Colors.DdsColorPrimaryDarker
        },
        focus: {
            // outline: `${focus.outlineWidth} solid ${focus.colorDefault}`
            // backgroundColor: focus.colorDefault,
            backgroundColor: Colors.DdsColorWarningDarkest,
            color: Colors.DdsColorNeutralsWhite,
            textDecoration: 'none',
            outline: 'none'
        },
        bold: {
            ...FontPackages.sansBoldx1,
        },
        icon: {
            marginLeft: Spacing.SizesDdsSpacingLocalX0125
        }
    }
}