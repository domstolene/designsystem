import { useEffect, useRef } from 'react';

import { useCombinedRef } from '../../../hooks';
import { cn } from '../../../utils';
import focusStyles from '../../helpers/styling/focus.module.css';
import { Icon } from '../../Icon';
import typographyStyles from '../../Typography/typographyStyles.module.css';
import { useOverflowMenuContext } from '../OverflowMenu.context';
import styles from '../OverflowMenu.module.css';
import { type OverflowMenuLinkProps } from '../OverflowMenu.types';

export const OverflowMenuLink = ({
  id,
  href,
  icon,
  className,
  onClick,
  children,
  ref,
  purpose = 'default',
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
      <a
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
        href={href}
        onClick={e => {
          onClick?.(e);
          onClose?.();
        }}
        {...rest}
        tabIndex={focusedRef === itemRef ? 0 : -1}
      >
        {icon && <Icon iconSize="inherit" icon={icon} />}
        {children}
      </a>
    </li>
  );
};

OverflowMenuLink.displayName = 'OverflowMenuLink';
