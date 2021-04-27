import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const {
    colors: Colors,
    spacing: Spacing,
    fontPackages: FontPackages,
} = ddsBaseTokens;

export const inputMessageTokens = {
    padding: `${Spacing.SizesDdsSpacingLocalX0125} ${Spacing.SizesDdsSpacingLocalX05} ${Spacing.SizesDdsSpacingLocalX0125} ${Spacing.SizesDdsSpacingLocalX05}`,
    maxWidth: '320px',
    font: {
        tip: FontPackages.sansRegularx0_875,
        error: FontPackages.sansBoldx0_875
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