import { forwardRef, useEffect } from 'react';
import styled, { CSSObject } from 'styled-components';
import { visibilityTransition } from '../../helpers/styling';
import { scrollbarStyling } from '../ScrollableContainer';
import {
  useCombinedRef,
  useId,
  useOnClickOutside,
  useOnKeyDown,
  useFloatPosition,
  useRoveFocus,
} from '../../hooks';
import { OverflowMenuItem } from './OverflowMenuItem';
import { overflowMenuTokens as tokens } from './OverflowMenu.tokens';
import { Divider } from '../Divider';
import {
  OverflowMenuContextItem,
  OverflowMenuNavItem,
  OverflowMenuProps,
} from '.';
import { typographyTokens } from '../Typography/Typography.tokens';
import { getBaseHTMLProps } from '../../types';
import { PersonIcon } from '../../icons/tsx';

const { container, divider } = tokens;

type ContainerProps = { isOpen: boolean };

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  z-index: 3;
  overflow-y: auto;
  min-width: 180px;
  max-width: 300px;
  ${({ isOpen }) => visibilityTransition(isOpen)}
  border: ${container.border};
  background-color: ${container.backgroundColor};
  border-radius: ${container.borderRadius};

  ${scrollbarStyling.webkit}
  ${scrollbarStyling.firefox as CSSObject}

  *::selection {
    ${typographyTokens.selection.base}
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

    const { reference, floating, refs, styles } = useFloatPosition(
      null,
      placement,
      offset
    );

    const combinedRef = useCombinedRef(ref, floating);

    useEffect(() => {
      anchorRef ? reference(anchorRef.current) : reference(null);
    }, [anchorRef]);

    useOnClickOutside(
      [refs?.floating?.current, refs?.reference?.current as HTMLElement | null],
      () => {
        if (isOpen) onClose && onClose();
      }
    );

    useOnKeyDown(['Esc', 'Escape'], () => {
      if (isOpen) {
        onClose && onClose();
        anchorRef && anchorRef.current?.focus();
      }
    });

    useOnKeyDown(['Tab'], () => {
      if (isOpen) onClose && onClose();
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
      !isOpen
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
                  React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => {
                item.onClick && item.onClick(e);
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
                    navItemsLastPos + 1
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
                  interactiveItemsList.length
                )}
              </OverflowMenuList>
            )}
          </>
        );
      }
    };

    const { style = {}, ...restHTMLProps } = htmlProps;

    const containerProps = {
      ...getBaseHTMLProps(id, className, restHTMLProps, rest),
      ref: combinedRef,
      id: id ?? useId('overflowMenu'),
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
  }
);
