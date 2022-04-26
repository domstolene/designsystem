import React from 'react';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type Props = {
  Icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  className?: string;
};

function InlineIconWrapper({ Icon, className }: Props) {
  const InlineIcon = Icon;

  return <InlineIcon className={className} style={{ fontSize: '1em' }} />;
}

export default InlineIconWrapper;
