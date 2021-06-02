import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';
import * as CSS from 'csstype';

const {
    colors: Colors,
    spacing: Spacing,
    fontPackages: FontPackages,
} = ddsBaseTokens;

const base: CSSObject = {
    padding: `${Spacing.SizesDdsSpacingLocalX025} ${Spacing.SizesDdsSpacingLocalX05}`,
}

const defaultMaxWidth: CSS.Property.MaxWidth<string> = '100%';

const tipBase: CSSObject = {
    ...FontPackages.sansRegularx0_875.base,
    color: Colors.DdsColorNeutralsGray6,
    backgroundColor: Colors.DdsColorNeutralsWhite
}

const errorBase: CSSObject = {
    ...FontPackages.sansBoldx0_875.base,
    color: Colors.DdsColorDangerBase,
    backgroundColor: Colors.DdsColorDangerLightest
}

const smallErrorBase: CSSObject = {
    ...FontPackages.sansBoldx0_75.base
}

const mediumErrorBase: CSSObject = {
    ...FontPackages.sansBoldx0_875.base
}

const smallTipBase: CSSObject = {
    ...FontPackages.sansRegularx0_75.base
}

const mediumTipBase: CSSObject = {
    ...FontPackages.sansRegularx0_875.base
}

export const inputMessageTokens = {

    padding: `${Spacing.SizesDdsSpacingLocalX025} ${Spacing.SizesDdsSpacingLocalX05}`,
    base: base,
    defaultMaxWidth: defaultMaxWidth,
    tip: {
        base: tipBase,
        small: {
            base: smallTipBase
        },
        medium: {
            base: mediumTipBase
        },
    },
    error: {
        base: errorBase,
        small: {
            base: smallErrorBase
        },
        medium: {
            base: mediumErrorBase
        },
    },
    icon: {
        spaceRight: Spacing.SizesDdsSpacingLocalX05
    },
}