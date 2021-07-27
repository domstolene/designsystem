import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const getSize = (iconSize: IconSize): string => {
    switch (iconSize) {
        case 'small':
            return ddsBaseTokens.iconSizes.DdsIconsizeSmall;
        case 'medium':
            return ddsBaseTokens.iconSizes.DdsIconsizeMedium;
        case 'large':
            return ddsBaseTokens.iconSizes.DdsIconsizeLarge;
        case 'inline':
            return '1em';
        default:
            return ddsBaseTokens.iconSizes.DdsIconsizeMedium;
    }
}


export type IconSize = 'small' | 'medium' | 'large' | 'inline'

type Props = {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    iconSize?: IconSize;
    className?: string;
}

export function IconWrapper({ Icon, iconSize = 'medium', className }: Props) {
    const PropIcon = Icon;
    const size = getSize(iconSize);
    return (
        <PropIcon className={className} style={{ fontSize: size }} />
    );
}