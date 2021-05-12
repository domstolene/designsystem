import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import WarningOutlinedIcon from '@material-ui/icons/ReportOutlined';
import DangerOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import { CSSObject } from 'styled-components';

const {
    colors: Colors,
    spacing: Spacing,
    fontPackages: FontPackages,
} = ddsBaseTokens;

const containerBase: CSSObject = {
    borderBottom: '1px solid',
    padding: `${Spacing.SizesDdsSpacingLocalX025} ${Spacing.SizesDdsSpacingLocalX1}`,
    minHeight: '48px',
    width: '100%'
}

const contentContainerBase: CSSObject = {
    marginRight: Spacing.SizesDdsSpacingLocalX15
}

export const globalMessageTokens = {
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
        danger: {
            color: Colors.DdsColorNeutralsGray8
        },
        warning: {
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
    warning: {
        color: {
            border: Colors.DdsColorWarningLighter,
            background: Colors.DdsColorWarningLightest,
            icon: Colors.DdsColorWarningDarkest,
            button: 'secondary'
        },
        icon: <WarningOutlinedIcon />
    },
    system: {
        color: {
            border: Colors.DdsColorNeutralsGray9,
            background: Colors.DdsColorNeutralsGray8,
            icon: Colors.DdsColorNeutralsWhite,
            button: 'secondary'
        },
        icon: <EmojiObjectsOutlinedIcon />
    }
}