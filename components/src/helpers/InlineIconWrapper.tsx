import React from 'react';
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";
import { OverridableComponent } from '@material-ui/core/OverridableComponent';


type Props = {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    className?: string;
}

function InlineIconWrapper({ Icon, className }: Props) {
    const InlineIcon = Icon;

    return (
        <InlineIcon className={className} style={{ fontSize: '1em' }} />
    );
}

export default InlineIconWrapper;