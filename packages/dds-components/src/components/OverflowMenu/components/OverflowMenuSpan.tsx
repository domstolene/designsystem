import { DropdownItem } from '../../helpers/Dropdown/DropdownItem';
import { type OverflowMenuSpanProps } from '../OverflowMenu.types';

export const OverflowMenuSpan = (props: OverflowMenuSpanProps) => (
  <li>
    <DropdownItem as="span" {...props} />
  </li>
);

OverflowMenuSpan.displayName = 'OverflowMenuSpan';
