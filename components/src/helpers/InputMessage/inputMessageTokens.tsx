import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const {
    colors: Colors,
    spacing: Spacing,
    fontPackages: FontPackages,
} = ddsBaseTokens;

export const inputMessageTokens = {
    padding: `${Spacing.SizesDdsSpacingLocalX025} ${Spacing.SizesDdsSpacingLocalX05}`,
    font: {
        tip: FontPackages.sansRegularx0_875.base,
        error: FontPackages.sansBoldx0_875.base
    },
    colors: {
        tip: {
            text: Colors.DdsColorNeutralsGray6,
            background: Colors.DdsColorNeutralsWhite
        },
        error: {
            text: Colors.DdsColorDangerBase,
            background: Colors.DdsColorDangerLightest
        }
    },
    margin: {
        icon: {
            marginRight: Spacing.SizesDdsSpacingLocalX05
        }
    }
}