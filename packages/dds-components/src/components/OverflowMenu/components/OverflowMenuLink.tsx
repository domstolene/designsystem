import { forwardRef, useEffect, useRef } from 'react';

import { useCombinedRef } from '../../../hooks';
import { cn } from '../../../utils';
import focusStyles from '../../helpers/styling/focus.module.css';
import { Icon } from '../../Icon';
import typographyStyles from '../../Typography/typographyStyles.module.css';
import { useOverflowMenu } from '../OverflowMenu.context';
import styles from '../OverflowMenu.module.css';
import { type OverflowMenuLinkProps } from '../OverflowMenu.types';

export const OverflowMenuLink = forwardRef<
  HTMLAnchorElement,
  OverflowMenuLinkProps
>((props, ref) => {
  const { id, href, icon, className, onClick, children, ...rest } = props;

  const itemRef = useRef<HTMLAnchorElement>(null);
  const combinedRef = useCombinedRef(ref, itemRef);

  const { onToggle, onClose, registerItem, unregisterItem, focusedRef } =
    useOverflowMenu();

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
          typographyStyles['body-small'],
          styles['list__item--link'],
          focusStyles['focusable--inset'],
        )}
        href={href}
        onClick={e => {
          onClick && onClick(e);
          onClose && onClose();
          onToggle && onToggle();
        }}
        {...rest}
        tabIndex={focusedRef === itemRef ? 0 : -1}
      >
        {icon && <Icon iconSize="inherit" icon={icon} />}
        {children}
      </a>
    </li>
  );
});

OverflowMenuLink.displayName = 'OverflowMenuLink';
