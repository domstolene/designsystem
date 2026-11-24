import { useEffect, useRef } from 'react';

import { useCombinedRef } from '../../../hooks';
import { DropdownItem } from '../../helpers/Dropdown/DropdownItem';
import { Toggle } from '../../Toggle';
import { useOverflowMenuContext } from '../OverflowMenu.context';
import { type OverflowMenuToggleProps } from '../OverflowMenu.types';

export const OverflowMenuToggle = ({
  ref,
  className,
  style,
  children,
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
        className={className}
        style={style}
        onClick={() => itemRef.current?.click()}
      >
        <Toggle
          {...rest}
          ref={combinedRef}
          htmlProps={{
            role: 'menuitemcheckbox',
            tabIndex: focusedRef === itemRef ? 0 : -1,
          }}
        >
          {children}
        </Toggle>
      </DropdownItem>
    </li>
  );
};

OverflowMenuToggle.displayName = 'OverflowMenuToggle';
