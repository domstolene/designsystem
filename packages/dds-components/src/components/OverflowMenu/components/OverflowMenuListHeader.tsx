import { type ComponentPropsWithRef } from 'react';

import { DropdownHeader } from '../../helpers/Dropdown/DropdownHeader';

type OverflowMenuListHeaderProps = ComponentPropsWithRef<'h2'>;

export const OverflowMenuListHeader = (props: OverflowMenuListHeaderProps) => {
  return <DropdownHeader {...props} />;
};

OverflowMenuListHeader.displayName = 'OverflowMenuListHeader';
