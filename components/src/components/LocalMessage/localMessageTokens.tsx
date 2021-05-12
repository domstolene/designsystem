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
    minHeight: '48px',
    border: '2px solid',
    padding: `0 ${Spacing.SizesDdsSpacingLocalX1}`,
    width: '400px'
}

const contentContainerBase: CSSObject = {
    padding: `${Spacing.SizesDdsSpacingLocalX075} ${Spacing.SizesDdsSpacingLocalX15} ${Spacing.SizesDdsSpacingLocalX075} 0`
}

export const localMessageTokens = {
    base: containerBase,
    contentContainer: {
        base: contentContainerBase
    },
    icon: {
        marginRight: `${Spacing.SizesDdsSpacingLocalX075}`,
    },
    size: {
        small: '',
        medium: '',
        large: ''
    },
    typography: {
        font: FontPackages.sansRegularx1.base,
        info: {
            color: Colors.DdsColorNeutralsGray8
        },
        success: {
            color: Colors.DdsColorNeutralsGray8
        },
        danger: {
            color: Colors.DdsColorNeutralsGray8
        },
        confidential: {
            color: Colors.DdsColorNeutralsGray8
        },
        warning: {
            color: Colors.DdsColorNeutralsGray8
        },
        tips: {
            color: Colors.DdsColorNeutralsGray8
        },
        system: {
            color: Colors.DdsColorNeutralsWhite
        },
    },
    info: {
        color: {
            border: Colors.DdsColorPrimaryLighter,
            background: Colors.DdsColorPrimaryLightest,
            icon: Colors.DdsColorPrimaryDarkest,
            button: 'secondary'
        },
        icon: <InfoOutlinedIcon />
    },
    danger: {
        color: {
            border: Colors.DdsColorDangerLighter,
            background: Colors.DdsColorDangerLightest,
            icon: Colors.DdsColorDangerDarkest,
            button: 'danger'
        },
        icon: <DangerOutlinedIcon />
    },
    success: {
        color: {
            border: Colors.DdsColorSuccessLighter,
            background: Colors.DdsColorSuccessLightest,
            icon: Colors.DdsColorSuccessDarkest,
            button: 'secondary'
        },
        icon: <CheckCircleOutlinedIcon />
    },
    warning: {
        color: {
            border: Colors.DdsColorWarningLighter,
            background: Colors.DdsColorWarningLightest,
            icon: Colors.DdsColorWarningDarkest,
            button: 'secondary'
        },
        icon: <WarningOutlinedIcon />
    },
    confidential: {
        color: {
            border: Colors.DdsColorDangerBase,
            background: Colors.DdsColorDangerLightest,
            icon: Colors.DdsColorDangerDarkest,
            button: 'danger'
        },
        icon: <DangerOutlinedIcon />
    },
    tips: {
        color: {
            border: Colors.DdsColorInfoBase,
            background: Colors.DdsColorInfoLightest,
            icon: Colors.DdsColorInfoDarkest,
            button: 'secondary'
        },
        icon: <EmojiObjectsOutlinedIcon />
    }
}