import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import WarningOutlinedIcon from '@material-ui/icons/ReportOutlined';
import DangerOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import { CSSObject } from 'styled-components';
import * as CSS from 'csstype';

const {
    colors: Colors,
    spacing: Spacing,
    fontPackages: FontPackages,
    borderRadius: BorderRadius,
    outerShadow: OuterShadow
} = ddsBaseTokens;

const containerBase: CSSObject = {
    boxShadow: OuterShadow.DdsShadow1Onlight,
    borderRadius: BorderRadius.RadiiDdsBorderRadius2Radius,
    border: '2px solid',
    padding: `0 ${Spacing.SizesDdsSpacingLocalX1}`,
    ...FontPackages.sansRegularx1.base,
    color: Colors.DdsColorNeutralsGray8
}

const defaultWidth: CSS.Property.Width<string> = '400px';

const contentContainerBase: CSSObject = {
    paddingRight: Spacing.SizesDdsSpacingLocalX15,
    paddingTop: Spacing.SizesDdsSpacingLocalX075,
    paddingBottom: Spacing.SizesDdsSpacingLocalX075,
}

const contentContainerWithClosableBase: CSSObject = {
    paddingRight: Spacing.SizesDdsSpacingLocalX075,
}

const containerInfoBase: CSSObject = {
    borderColor: Colors.DdsColorPrimaryLighter,
    backgroundColor: Colors.DdsColorPrimaryLightest,
}

const containerDangerBase: CSSObject = {
    borderColor: Colors.DdsColorDangerLighter,
    backgroundColor: Colors.DdsColorDangerLightest,
}

const containerWarningBase: CSSObject = {
    borderColor: Colors.DdsColorWarningLighter,
    backgroundColor: Colors.DdsColorWarningLightest,
}

const containerSuccessBase: CSSObject = {
    borderColor: Colors.DdsColorSuccessLighter,
    backgroundColor: Colors.DdsColorSuccessLightest,
}

const containerTipsBase: CSSObject = {
    borderColor: Colors.DdsColorInfoLighter,
    backgroundColor: Colors.DdsColorInfoLightest,
}

const containerConfidentialBase: CSSObject = {
    borderColor: Colors.DdsColorDangerBase,
    backgroundColor: Colors.DdsColorDangerLightest,
}

export const localMessageTokens = {
    container: {
        base: containerBase,
        defaultWidth: defaultWidth,
        info: {
            base: containerInfoBase,
        },
        danger: {
            base: containerDangerBase,
        },
        warning: {
            base: containerWarningBase,
        },
        success: {
            base: containerSuccessBase,
        },
        tips: {
            base: containerTipsBase,
        },
        confidential: {
            base: containerConfidentialBase,
        },

    },
    contentContainer: {
        base: contentContainerBase,
        withClosable: {
            base: contentContainerWithClosableBase
        }
    },
    icon: {
        marginRight: `${Spacing.SizesDdsSpacingLocalX075}`,
        info: {
            icon: InfoOutlinedIcon ,
            color: Colors.DdsColorPrimaryDarkest,
        },
        danger: {
            icon: DangerOutlinedIcon,
            color: Colors.DdsColorDangerDarkest,
        },
        warning: {
            icon: WarningOutlinedIcon,
            color: Colors.DdsColorWarningDarkest,
        },
        success: {
            icon: CheckCircleOutlinedIcon,
            color: Colors.DdsColorSuccessDarkest
        },
        tips: {
            icon: EmojiObjectsOutlinedIcon,
            color: Colors.DdsColorInfoDarkest
        },
        confidential: {
            icon: DangerOutlinedIcon,
            color: Colors.DdsColorDangerDarkest

        }
    },
    button: {
        info: {
            purpose: 'secondary'
        },
        danger: {
            purpose: 'danger'
        },
        warning: {
            purpose: 'secondary'
        },
        success: {
            purpose: 'secondary'
        },
        confidential: {
            purpose: 'danger'
        },
        tips: {
            purpose: 'secondary'
        },
    }
}