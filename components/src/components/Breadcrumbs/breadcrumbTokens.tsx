import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { CSSObject } from 'styled-components';

const {
    colors: Colors,
    spacing: Spacing
} = ddsBaseTokens;

const lastItemBase: CSSObject = {
    color: Colors.DdsColorPrimaryBase,
    margin: 0
}

const iconBase: CSSObject = {
    color: Colors.DdsColorPrimaryBase,
    marginLeft: Spacing.SizesDdsSpacingLocalX05,
    marginRight: Spacing.SizesDdsSpacingLocalX05,
}

export const breadcrumbTokens = {
    icon: {
        base: iconBase,
        size: 'small'
    },
    lastItem: {
        base: lastItemBase
    }
}