import { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import scrollbarStyling from '../../helpers/scrollbarStyling';
import {
  useCombinedRef,
  useId,
  useOnClickOutside,
  useOnKeyDown,
  useReactPopper,
  useRoveFocus
} from '../../hooks';
import { OverflowMenuItem } from './OverflowMenuItem';
import { overflowMenuTokens as tokens } from './OverflowMenu.tokens';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Divider } from '../Divider';
import {
  OverflowMenuContextItem,
  OverflowMenuNavItem,
  OverflowMenuProps
} from '.';
import { typographyTokens } from '../Typography/Typography.tokens';

type ContainerProps = { isOpen?: boolean };

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  z-index: 3;
  overflow-y: auto;
  min-width: 180px;
  max-width: 300px;
  transition: visibility 0.4s, opacity 0.2s;
  visibility: ${({ isOpen }) => (!isOpen ? 'hidden' : 'visible')};
  opacity: ${({ isOpen }) => (!isOpen ? 0 : 1)};
  ${tokens.container.base}
  ${scrollbarStyling}
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
  ${tokens.divider.base}
`;

export const OverflowMenu = forwardRef<HTMLDivElement, OverflowMenuProps>(
  (
    {
      anchorRef,
      onClose,
      isOpen,
      placement = 'bottom-end',
      items,
      navItems,
      userProps,
      id,
      offset = tokens.offset,
      style,
      ...rest
    },
    ref
  ) => {
    const [referenceElement, setReferenceElement] = useState(null) as any;
    const [popperElement, setPopperElement] = useState(null) as any;
    const combinedRef = useCombinedRef(ref, setPopperElement);

    const { styles, attributes } = useReactPopper(
      referenceElement,
      popperElement,
      undefined,
      placement,
      offset
    );

    useEffect(() => {
      anchorRef
        ? setReferenceElement(anchorRef.current)
        : setReferenceElement(null);
    }, [anchorRef]);

    useOnClickOutside([popperElement, referenceElement], () => {
      if (isOpen) onClose();
    });

    useOnKeyDown(['Esc', 'Escape'], () => {
      if (isOpen) {
        onClose();
        anchorRef.current?.focus();
      }
    });

    useOnKeyDown(['Tab'], () => {
      if (isOpen) {
        onClose();
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
      !isOpen
    );

    const interactiveItemsList = hasInteractiveItems
      ? interactiveItems.map((item, index) => (
          <li key={index}>
            <OverflowMenuItem
              index={index}
              focus={focus === index && isOpen}
              setFocus={setFocus}
              Icon={
                hasInteractiveUser && index === 0
                  ? PersonOutlineOutlinedIcon
                  : undefined
              }
              {...item}
              onClick={(
                e: React.MouseEvent<HTMLAnchorElement, MouseEvent> &
                  React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => {
                item.onClick && item.onClick(e);
                onClose();
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

    const containerProps = {
      ref: combinedRef,
      id: id ?? useId('overflowMenu'),
      isOpen,
      style: { ...style, ...styles.popper },
      ...rest,
      ...attributes.popper,
      'aria-hidden': !isOpen,
      role: 'menu'
    };

    return (
      <Container {...containerProps}>
        {hasStaticUser && (
          <OverflowMenuItem title={username} Icon={PersonOutlineOutlinedIcon} />
        )}

        {interactiveContent()}
      </Container>
    );
  }
);
