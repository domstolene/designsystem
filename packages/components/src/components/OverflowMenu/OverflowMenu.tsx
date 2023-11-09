import { forwardRef, useEffect, useId } from 'react';
import styled from 'styled-components';
import { selection, visibilityTransition } from '@norges-domstoler/dds-core';
import { scrollbarStyling } from '../ScrollableContainer';
import {
  useCombinedRef,
  useOnClickOutside,
  useOnKeyDown,
  useFloatPosition,
  useRoveFocus,
} from '@norges-domstoler/dds-core';
import { OverflowMenuItem } from './OverflowMenuItem';
import { overflowMenuTokens as tokens } from './OverflowMenu.tokens';
import { Divider } from '../Divider';
import {
  OverflowMenuContextItem,
  OverflowMenuNavItem,
  OverflowMenuProps,
} from '.';
import { getBaseHTMLProps } from '@norges-domstoler/dds-core';
import { PersonIcon } from '@norges-domstoler/dds-icons';

const { container, divider } = tokens;

interface ContainerProps { isOpen: boolean }

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  z-index: 100;
  overflow-y: auto;
  min-width: 180px;
  max-width: 300px;
  ${({ isOpen }) => visibilityTransition(isOpen)}
  border: ${container.border};
  background-color: ${container.backgroundColor};
  border-radius: ${container.borderRadius};

  ${scrollbarStyling.webkit}
  ${scrollbarStyling.firefox}

  *::selection {
    ${selection}
  }
`;

export const OverflowMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledDivider = styled(Divider)`
  margin-left: ${divider.marginLeft};
  margin-right: ${divider.marginRight};
`;

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
      offset = tokens.offset,
      className,
      htmlProps = {},
      ...rest
    } = props;

    const { refs, styles } = useFloatPosition(null, {
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

    const interactiveItems: (OverflowMenuContextItem | OverflowMenuNavItem)[] =
      [];

    const hasContextItems = !!items && items.length > 0;
    const hasNavItems = !!navItems && navItems.length > 0;
    const { name: username, ...userPropsRest } = userProps || {};
    const hasStaticUser =
      username && userProps && !userProps.href && !userProps.onClick;
    const hasInteractiveUser =
      username && userProps && (!!userProps.href || !!userProps.onClick);

    hasInteractiveUser &&
      interactiveItems.push({ title: username, ...userPropsRest });
    hasNavItems && interactiveItems.push(...navItems);
    hasContextItems && interactiveItems.push(...items);

    const hasInteractiveItems = interactiveItems.length > 0;

    const [focus, setFocus] = useRoveFocus(
      interactiveItems && interactiveItems.length,
      !isOpen,
    );

    const interactiveItemsList = hasInteractiveItems
      ? interactiveItems.map((item, index) => (
          <li key={index}>
            <OverflowMenuItem
              index={index}
              focus={focus === index && isOpen}
              setFocus={setFocus}
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
              <OverflowMenuList>{interactiveItemsList?.[0]}</OverflowMenuList>
            )}
            {hasNavItems && (
              <nav>
                <OverflowMenuList>
                  {interactiveItemsList?.slice(
                    navItemsFirstPos,
                    navItemsLastPos + 1,
                  )}
                </OverflowMenuList>
              </nav>
            )}
            {hasNavItems && hasContextItems && (
              <StyledDivider color="primaryLighter" />
            )}
            {hasContextItems && (
              <OverflowMenuList aria-label="kontekstmeny">
                {interactiveItemsList?.slice(
                  contextItemsFirstPos,
                  interactiveItemsList.length,
                )}
              </OverflowMenuList>
            )}
          </>
        );
      }
    };

    const { style = {}, ...restHTMLProps } = htmlProps;
    const generatedId = useId();

    const containerProps = {
      ...getBaseHTMLProps(id, className, restHTMLProps, rest),
      ref: combinedRef,
      id: id ?? `${generatedId}-overflowMenu`,
      isOpen,
      style: { ...style, ...styles.floating },
      'aria-hidden': !isOpen,
      role: 'menu',
    };

    return (
      <Container {...containerProps} aria-label="bruk piltaster for å navigere">
        {hasStaticUser && (
          <OverflowMenuItem title={username} icon={PersonIcon} />
        )}

        {interactiveContent()}
      </Container>
    );
  },
);

OverflowMenu.displayName = 'OverflowMenu';
