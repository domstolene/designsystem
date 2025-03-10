import { useEffect, useRef } from 'react';

import { useCombinedRef } from '../../../hooks';
import { cn } from '../../../utils';
import focusStyles from '../../helpers/styling/focus.module.css';
import { Icon } from '../../Icon';
import typographyStyles from '../../Typography/typographyStyles.module.css';
import { useOverflowMenuContext } from '../OverflowMenu.context';
import styles from '../OverflowMenu.module.css';
import { type OverflowMenuButtonProps } from '../OverflowMenu.types';

export const OverflowMenuButton = ({
  id,
  icon,
  children,
  className,
  onClick,
  purpose = 'default',
  ref,
  ...rest
}: OverflowMenuButtonProps) => {
  const itemRef = useRef<HTMLButtonElement>(null);
  const combinedRef = useCombinedRef(ref, itemRef);

  const { onClose, registerItem, unregisterItem, focusedRef } =
    useOverflowMenuContext();

  useEffect(() => {
    registerItem(itemRef);
    return () => unregisterItem(itemRef);
  }, []);

  return (
    <li>
      <button
        ref={combinedRef}
        role="menuitem"
        id={id}
        className={cn(
          className,
          styles.list__item,
          styles[purpose],
          typographyStyles['body-small'],
          styles['list__item--link'],
          focusStyles['focusable--inset'],
        )}
        onClick={e => {
          onClick?.(e);
          onClose?.();
        }}
        {...rest}
        tabIndex={focusedRef === itemRef ? 0 : -1}
      >
        {icon && <Icon iconSize="inherit" icon={icon} />}
        {children}
      </button>
    </li>
  );
};

OverflowMenuButton.displayName = 'OverflowMenuButton';
