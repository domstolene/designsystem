import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import WarningOutlinedIcon from '@material-ui/icons/ReportOutlined';
import DangerOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { CSSObject } from 'styled-components';

const {
    colors: Colors,
    spacing: Spacing,
    fontPackages: FontPackages,
} = ddsBaseTokens;

const containerBase: CSSObject = {
    borderBottom: '2px solid',
    padding: `0 ${Spacing.SizesDdsSpacingLocalX1}`,
    width: '100%',
    ...FontPackages.sansRegularx1.base,
    color: Colors.DdsColorNeutralsGray8,
}

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
        base: contentContainerBase,
        withClosable: {
            base: contentContainerWithClosableBase
        }
    },
    icon: {
        marginRight: `${Spacing.SizesDdsSpacingLocalX075}`,
        info: {
            icon: InfoOutlinedIcon,
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