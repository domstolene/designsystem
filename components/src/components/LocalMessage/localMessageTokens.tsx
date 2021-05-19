import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import WarningOutlinedIcon from '@material-ui/icons/ReportOutlined';
import DangerOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import { CSSObject } from 'styled-components';

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
    width: '400px',
    ...FontPackages.sansRegularx1.base,
    color: Colors.DdsColorNeutralsGray8
}

const contentContainerBase: CSSObject = {
    padding: `${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX15} ${Spacing.SizesDdsSpacingLocalX075} 0`
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
        info: {
            base: containerInfoBase,
            iconColor: Colors.DdsColorPrimaryDarkest,
            buttonPurpose: 'secondary'
        },
        danger: {
            base: containerDangerBase,
            iconColor: Colors.DdsColorDangerDarkest,
            buttonPurpose: 'danger'
        },
        warning: {
            base: containerWarningBase,
            iconColor: Colors.DdsColorWarningDarkest,
            buttonPurpose: 'secondary'
        },
        success: {
            base: containerSuccessBase,
            iconColor: Colors.DdsColorPrimaryDarkest,
            buttonPurpose: 'secondary'
        },
        tips: {
            base: containerTipsBase,
            iconColor: Colors.DdsColorDangerDarkest,
            buttonPurpose: 'danger'
        },
        confidential: {
            base: containerConfidentialBase,
            iconColor: Colors.DdsColorWarningDarkest,
            buttonPurpose: 'secondary'
        },

    },
    contentContainer: {
        base: contentContainerBase
    },
    icon: {
        marginRight: `${Spacing.SizesDdsSpacingLocalX075}`,
        info: {
            icon: <InfoOutlinedIcon />,
            color: Colors.DdsColorPrimaryDarkest,
        },
        danger: {
            icon: <DangerOutlinedIcon />,
            color: Colors.DdsColorDangerDarkest,
        },
        warning: {
            icon: <WarningOutlinedIcon />,
            color: Colors.DdsColorWarningDarkest,
        },
        success: {
            icon: <CheckCircleOutlinedIcon />,
            color: Colors.DdsColorSuccessDarkest
        },
        tips: {
            icon: <EmojiObjectsOutlinedIcon />,
            color: Colors.DdsColorInfoDarkest
        },
        confidential: {
            icon: <DangerOutlinedIcon />,
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