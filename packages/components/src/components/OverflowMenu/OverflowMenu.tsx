import { ddsTokens } from '@norges-domstoler/dds-design-tokens';
import { forwardRef, useEffect, useId } from 'react';

import { OverflowMenuContextProvider } from './OverflowMenu.context';
import styles from './OverflowMenu.module.css';
import { OverflowMenuItem } from './OverflowMenuItem';
import {
  useCombinedRef,
  useFloatPosition,
  useOnClickOutside,
  useOnKeyDown,
  useRoveFocus,
} from '../../hooks';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { Divider } from '../Divider';
import { Paper } from '../helpers';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { PersonIcon } from '../Icon/icons';

import {
  type OverflowMenuContextItem,
  type OverflowMenuNavItem,
  type OverflowMenuProps,
} from '.';

export const OverflowMenu = forwardRef<HTMLDivElement, OverflowMenuProps>(
  (props, ref) => {
    const {
      anchorRef,
      onClose,
      onToggle,
      isOpen = false,
      placement = 'bottom-end',
      items,
      navItems,
      userProps,
      id,
      offset = ddsTokens.ddsSpacingX0125NumberPx,
      className,
      htmlProps = {},
      ...rest
    } = props;

    const { refs, styles: floatingStyles } = useFloatPosition(null, {
      placement,
      offset,
    });

    const combinedRef = useCombinedRef(ref, refs.setFloating);

    useEffect(() => {
      anchorRef
        ? refs.setReference(anchorRef.current)
        : refs.setReference(null);
    }, [anchorRef]);

    useOnClickOutside(
      [refs?.floating?.current, refs?.reference?.current as HTMLElement | null],
      () => {
        if (isOpen) {
          onClose && onClose();
          onToggle && onToggle();
        }
      },
    );

    useOnKeyDown(['Esc', 'Escape'], () => {
      if (isOpen) {
        onClose && onClose();
        onToggle && onToggle();
        anchorRef && anchorRef.current?.focus();
      }
    });

    useOnKeyDown(['Tab'], () => {
      if (isOpen) {
        onClose && onClose();
        onToggle && onToggle();
      }
    });

    const interactiveItems: Array<
      OverflowMenuContextItem | OverflowMenuNavItem
    > = [];

    const hasContextItems = !!items && items.length > 0;
    const hasNavItems = !!navItems && navItems.length > 0;
    const { name: username, ...userPropsRest } = userProps ?? {};
    const hasStaticUser =
      username && userProps && !userProps.href && !userProps.onClick;
    const hasInteractiveUser =
      username && userProps && (!!userProps.href || !!userProps.onClick);

    hasInteractiveUser &&
      interactiveItems.push({ title: username, ...userPropsRest });
    hasNavItems && interactiveItems.push(...navItems);
    hasContextItems && interactiveItems.push(...items);

    const hasInteractiveItems = interactiveItems.length > 0;

    const [focus] = useRoveFocus(interactiveItems?.length, isOpen);

    const interactiveItemsList = hasInteractiveItems
      ? interactiveItems.map((item, index) => (
          <li key={index}>
            <OverflowMenuItem
              index={index}
              focus={focus === index && isOpen}
              icon={hasInteractiveUser && index === 0 ? PersonIcon : undefined}
              {...item}
              onClick={(
                e: React.MouseEvent<HTMLAnchorElement, MouseEvent> &
                  React.MouseEvent<HTMLButtonElement, MouseEvent>,
              ) => {
                item.onClick && item.onClick(e);
                onToggle && onToggle();
                onClose && onClose();
              }}
            />
          </li>
        ))
      : null;

    const interactiveContent = () => {
      const ulCn = cn(styles.list, utilStyles['remove-list-styling']);

      if (hasInteractiveItems) {
        const userPropsPos = hasInteractiveUser ? 0 : -1;
        const navItemsFirstPos = hasNavItems ? userPropsPos + 1 : -1;
        const navItemsLastPos = hasNavItems
          ? userPropsPos + navItems.length
          : -1;
        const contextItemsFirstPos = !hasContextItems
          ? -1
          : hasNavItems
            ? navItemsLastPos + 1
            : userPropsPos + 1;
        return (
          <>
            {hasInteractiveUser && (
              <ul className={ulCn}>{interactiveItemsList?.[0]}</ul>
            )}
            {hasNavItems && (
              <nav>
                <ul className={ulCn}>
                  {interactiveItemsList?.slice(
                    navItemsFirstPos,
                    navItemsLastPos + 1,
                  )}
                </ul>
              </nav>
            )}
            {hasNavItems && hasContextItems && (
              <Divider color="subtle" className={styles.divider} />
            )}
            {hasContextItems && (
              <ul className={ulCn} aria-label="kontekstmeny">
                {interactiveItemsList?.slice(
                  contextItemsFirstPos,
                  interactiveItemsList.length,
                )}
              </ul>
            )}
          </>
        );
      }
    };

    const { style = {}, ...restHTMLProps } = htmlProps;
    const generatedId = useId();

    return (
      <Paper
        ref={combinedRef}
        {...getBaseHTMLProps(
          id ?? `${generatedId}-overflowMenu`,
          cn(
            className,
            styles.container,
            utilStyles.scrollbar,
            utilStyles['visibility-transition'],
            isOpen
              ? utilStyles['visibility-transition--open']
              : utilStyles['visibility-transition--closed'],
          ),
          restHTMLProps,
          rest,
        )}
        role="menu"
        aria-hidden={!isOpen}
        border="default"
        elevation={1}
        style={{ ...style, ...floatingStyles.floating }}
      >
        {items || navItems || userProps ? (
          <>
            {hasStaticUser && (
              <OverflowMenuItem title={username} icon={PersonIcon} />
            )}

            {interactiveContent()}
          </>
        ) : (
          <OverflowMenuContextProvider
            isOpen={isOpen}
            onToggle={onToggle}
            onClose={onClose}
          >
            {props.children}
          </OverflowMenuContextProvider>
        )}
      </Paper>
    );
  },
);

OverflowMenu.displayName = 'OverflowMenu';
