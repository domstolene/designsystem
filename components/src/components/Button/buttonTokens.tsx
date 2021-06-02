import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { calculateHeightWithLineHeight } from "../../helpers/functions";

const {
    colors: Colors,
    border: Border,
    spacing: Spacing,
    fontPackages: FontPackages,
    borderRadius: BorderRadius,
    outerShadow: OuterShadow
} = ddsBaseTokens;

const colorPalette = {
    primary: {
        default: Colors.DdsColorPrimaryBase,
        hover: Colors.DdsColorPrimaryDark,
        active: Colors.DdsColorPrimaryDarker,
        text: Colors.DdsColorNeutralsWhite,
        border: Colors.DdsColorPrimaryBase,
        hover_border: Colors.DdsColorPrimaryDark,
        active_border: Colors.DdsColorPrimaryDarker
    },
    secondary: {
        default: Colors.DdsColorNeutralsGray1,
        hover: Colors.DdsColorNeutralsGray2,
        active: Colors.DdsColorNeutralsGray3,
        text: Colors.DdsColorNeutralsGray8,
        border: Colors.DdsColorNeutralsGray5,
        hover_border: Colors.DdsColorNeutralsGray5,
        active_border: Colors.DdsColorNeutralsGray5,

    },
    danger: {
        default: Colors.DdsColorDangerBase,
        hover: Colors.DdsColorDangerDark,
        active: Colors.DdsColorDangerDarker,
        text: Colors.DdsColorNeutralsWhite,
        border: Colors.DdsColorDangerBase,
        hover_border: Colors.DdsColorDangerDark,
        active_border: Colors.DdsColorDangerDark,
    }
}

const colors = {
    filled: {
        primary: colorPalette.primary,
        secondary: colorPalette.secondary,
        danger: colorPalette.danger
    },
    ghost: {
        primary: {
            default: 'transparent',
            hover: 'transparent',
            active: 'transparent',
            text: Colors.DdsColorPrimaryBase,
            hover_text: Colors.DdsColorPrimaryBase,
            active_text: Colors.DdsColorPrimaryBase,
            border: Colors.DdsColorPrimaryBase,
            hover_border: Colors.DdsColorPrimaryBase,
            active_border: Colors.DdsColorPrimaryBase,
        },
        secondary: {
            default: 'transparent',
            hover: 'transparent',
            active: 'transparent',
            text: Colors.DdsColorNeutralsGray7,
            hover_text: Colors.DdsColorNeutralsGray8,
            active_text: Colors.DdsColorNeutralsGray9,
            border: Colors.DdsColorNeutralsGray7,
            hover_border: Colors.DdsColorNeutralsGray8,
            active_border: Colors.DdsColorNeutralsGray9
        },
        danger: {
            default: 'transparent',
            hover: 'transparent',
            active: 'transparent',
            text: Colors.DdsColorDangerBase,
            hover_text: Colors.DdsColorDangerDarker,
            active_text: Colors.DdsColorDangerDarkest,
            border: Colors.DdsColorDangerBase,
            hover_border: Colors.DdsColorDangerDarker,
            active_border: Colors.DdsColorDangerDarkest
        }
    },
    rounded: {
        primary: colorPalette.primary,
        secondary: colorPalette.secondary,
        danger: colorPalette.danger
    },

    borderless: {
        primary: {
            default: 'transparent',
            border: 'transparent',
            text: Colors.DdsColorPrimaryBase,
            hover: Colors.DdsColorPrimaryDark,
            active: Colors.DdsColorPrimaryDarker,
            justIcon: {
                hover_border: Colors.DdsColorPrimaryDark,
                active_border: Colors.DdsColorPrimaryDarker,
            }
        },
        secondary: {
            default: 'transparent',
            border: 'transparent',
            text: Colors.DdsColorNeutralsGray7,
            hover: Colors.DdsColorNeutralsGray8,
            active: Colors.DdsColorNeutralsGray9,
            justIcon: {
                hover_border: Colors.DdsColorNeutralsGray8,
                active_border: Colors.DdsColorNeutralsGray9,
            }
        },
        danger: {
            default: 'transparent',
            border: 'transparent',
            text: Colors.DdsColorDangerBase,
            hover: Colors.DdsColorDangerDark,
            active: Colors.DdsColorDangerDarker,
            justIcon: {
                hover_border: Colors.DdsColorDangerDark,
                active_border: Colors.DdsColorDangerDarker,
            }
        }
    }
}

const sizes = {
    icon_margin: {
        small: Spacing.SizesDdsSpacingLocalX025,
        medium: Spacing.SizesDdsSpacingLocalX05,
        large: Spacing.SizesDdsSpacingLocalX075
    },
    padding: {
        text: {
            small: `${Spacing.SizesDdsSpacingLocalX05} ${Spacing.SizesDdsSpacingLocalX1NumberPx-2}`,
            medium: `${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX15NumberPx-2}`,
            large: `${Spacing.SizesDdsSpacingLocalX1} ${Spacing.SizesDdsSpacingLocalX2NumberPx-2}`
        },
        icon: {
            small: `${Spacing.SizesDdsSpacingLocalX05}`,
            medium: `${Spacing.SizesDdsSpacingLocalX075}`,
            large: `${Spacing.SizesDdsSpacingLocalX1}`
        }
    },
    icon: {
        small: `${calculateHeightWithLineHeight(FontPackages.sansRegularx0_875.numbers.lineHeightNumber, FontPackages.sansRegularx0_875.numbers.fontSizeNumber)}px`,
        medium: `${calculateHeightWithLineHeight(FontPackages.sansRegularx1.numbers.lineHeightNumber, FontPackages.sansRegularx1.numbers.fontSizeNumber)}px`,
        large: `${calculateHeightWithLineHeight(FontPackages.sansRegularx1_25.numbers.lineHeightNumber, FontPackages.sansRegularx1_25.numbers.fontSizeNumber)}px`,
    }
}

const font = {
    icon: {
        small: FontPackages.sansRegularx1_25.base,
        medium: FontPackages.sansRegularx1_5.base,
        large: FontPackages.sansRegularx2.base
    },
    text: {
        small: FontPackages.sansRegularx0_875.base,
        medium: FontPackages.sansRegularx1.base,
        large: FontPackages.sansRegularx1_25.base
    }
}

const boxShadow = {
        filled: OuterShadow.DdsShadow1Onlight,
        ghost: 'none',
        borderless: 'none',
        rounded: OuterShadow.DdsShadow1Onlight,
    }

const borderRadius = {
    filled: BorderRadius.RadiiDdsBorderRadius1Radius,
    ghost: BorderRadius.RadiiDdsBorderRadius1Radius,
    borderless: BorderRadius.RadiiDdsBorderRadius1Radius,
    rounded: '100px',
}

export const buttonTokens = {
    borderWidth: Border.BordersDdsBorderStyle1StrokeWeight,
    focusOutline: {
        color: Colors.DdsColorWarningDarker,
        width: Border.BordersDdsBorderStyle1StrokeWeight,
    },
    colors,
    sizes,
    font,
    borderRadius,
    boxShadow
}

