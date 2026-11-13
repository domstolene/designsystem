import { useEffect, useRef } from 'react';

import { useCombinedRef } from '../../../hooks';
import { DropdownItem } from '../../helpers/Dropdown/DropdownItem';
import { Toggle } from '../../Toggle';
import { useOverflowMenuContext } from '../OverflowMenu.context';
import { type OverflowMenuToggleProps } from '../OverflowMenu.types';

export const OverflowMenuToggle = ({
  ref,
  ...rest
}: OverflowMenuToggleProps) => {
  const itemRef = useRef<HTMLInputElement>(null);
  const combinedRef = useCombinedRef(ref, itemRef);

  const { registerItem, unregisterItem, focusedRef } = useOverflowMenuContext();

  useEffect(() => {
    registerItem(itemRef);
    return () => unregisterItem(itemRef);
  }, []);

  return (
    <li role="presentation">
      <DropdownItem
        as={Toggle}
        ref={combinedRef}
        {...rest}
        htmlProps={{
          role: 'menuitemcheckbox',
          tabIndex: focusedRef === itemRef ? 0 : -1,
        }}
      />
    </li>
  );
};

OverflowMenuToggle.displayName = 'OverflowMenuToggle';
