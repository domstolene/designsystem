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
    width: '100%',
    ...FontPackages.sansRegularx1.base,
    color: Colors.DdsColorNeutralsGray8,
}

const contentContainerBase: CSSObject = {
    marginRight: Spacing.SizesDdsSpacingLocalX15,
    paddingTop: Spacing.SizesDdsSpacingLocalX05,
    paddingBottom: Spacing.SizesDdsSpacingLocalX05,
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

export const globalMessageTokens = {
    container: {
        base: containerBase,
        info: {
            base: containerInfoBase,
        },
        danger: {
            base: containerDangerBase,
        },
        warning: {
            base: containerWarningBase,
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
    }
}