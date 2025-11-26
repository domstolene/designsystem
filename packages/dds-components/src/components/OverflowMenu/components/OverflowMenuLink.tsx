import { useEffect, useRef } from 'react';

import { useCombinedRef } from '../../../hooks';
import { DropdownItem } from '../../helpers/Dropdown/DropdownItem';
import { useOverflowMenuContext } from '../OverflowMenu.context';
import { type OverflowMenuLinkProps } from '../OverflowMenu.types';

export const OverflowMenuLink = ({
  onClick,
  ref,
  ...rest
}: OverflowMenuLinkProps) => {
  const itemRef = useRef<HTMLAnchorElement>(null);
  const combinedRef = useCombinedRef(ref, itemRef);

  const { onClose, registerItem, unregisterItem, focusedRef } =
    useOverflowMenuContext();

  useEffect(() => {
    registerItem(itemRef);
    return () => unregisterItem(itemRef);
  }, []);

  return (
    <li>
      <DropdownItem
        as="a"
        ref={combinedRef}
        role="menuitem"
        onClick={e => {
          onClick?.(e);
          onClose?.();
        }}
        {...rest}
        tabIndex={focusedRef === itemRef ? 0 : -1}
      />
    </li>
  );
};

OverflowMenuLink.displayName = 'OverflowMenuLink';
