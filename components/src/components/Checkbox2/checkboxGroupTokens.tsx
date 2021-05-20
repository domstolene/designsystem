import { CSSObject } from "styled-components";
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const {
    colors: Colors,
    spacing: Spacing,
    fontPackages: FontPackages,
} = ddsBaseTokens;

const labelBase: CSSObject = {
    ...FontPackages.sansBoldx0_875.base,
    color: Colors.DdsColorNeutralsGray7
}

export const checkboxGroupTokens = {
    label: {
        base: labelBase,
        spaceLeft: Spacing.SizesDdsSpacingLocalX025
    }
}