import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  HTMLAttributes,
  RefObject,
  useEffect,
  useState
} from 'react';
import styled from 'styled-components';
import scrollbarStyling from '../../helpers/scrollbarStyling';
import {
  Placement,
  useCombinedRef,
  useId,
  useOnClickOutside,
  useOnKeyDown,
  useReactPopper,
  useRoveFocus
} from '../../hooks';
import { OverflowMenuItem } from '.';
import { overflowMenuTokens as tokens } from './OverflowMenu.tokens';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Divider } from '../Divider';

type ContextMenuWrapperProps = { isOpen?: boolean };

export const Container = styled.div<ContextMenuWrapperProps>`
  box-sizing: border-box;
  z-index: 3;
  overflow-y: auto;
  min-width: 180px;
  max-width: 300px;
  max-height: calc(100vh - 110px);
  transition: visibility 0.4s, opacity 0.2s;
  visibility: ${({ isOpen }) => (!isOpen ? 'hidden' : 'visible')};
  opacity: ${({ isOpen }) => (!isOpen ? 0 : 1)};
  ${tokens.wrapper.base}
  ${scrollbarStyling}
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

export type OverflowMenuContextItem = {
  name: string;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
);
export type OverflowMenuNavItem = {
  name: string;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type UserProps = {
  name: string;
  href?: string;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
);

export type OverflowMenuProps = {
  isOpen?: boolean;
  triggerRef: RefObject<HTMLButtonElement>;
  onClose: () => void;
  placement?: Placement;
  staticUsername?: string;
  userProps?: UserProps;
  items?: OverflowMenuContextItem[];
  navItems?: OverflowMenuNavItem[];
} & HTMLAttributes<HTMLDivElement>;

export const OverflowMenu = forwardRef<HTMLDivElement, OverflowMenuProps>(
  (
    {
      triggerRef,
      onClose,
      children,
      isOpen,
      placement = 'bottom-end',
      staticUsername,
      items,
      navItems,
      userProps,
      id,
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
      4
    );

    useEffect(() => {
      isOpen
        ? setReferenceElement(triggerRef.current)
        : setReferenceElement(null);
      return () => setReferenceElement(null);
    }, [triggerRef, isOpen]);

    useOnClickOutside([popperElement, referenceElement], () => {
      onClose();
    });

    useOnKeyDown(['Esc', 'Escape'], () => {
      if (isOpen) {
        onClose();
        triggerRef.current?.focus();
      }
    });

    useOnKeyDown(['Tab'], () => {
      if (isOpen) {
        onClose();
      }
    });

    const allItems: (OverflowMenuContextItem | OverflowMenuNavItem)[] = [];

    const hasContextItems = !!items && items.length > 0;
    const hasNavItems = !!navItems && navItems.length > 0;
    const hasStaticUser = userProps && !userProps.href && !userProps.onClick;
    const hasInteractiveUser =
      userProps && (!!userProps.href || !!userProps.onClick);
    hasInteractiveUser && allItems.push(userProps);
    hasNavItems && allItems.push(...navItems);
    hasContextItems && allItems.push(...items);

    const hasAnyItems = allItems.length > 0;

    const [focus, setFocus] = useRoveFocus(
      allItems && allItems.length,
      !isOpen
    );

    const allItemsList = hasAnyItems
      ? allItems.map((item, index) => (
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
            />
          </li>
        ))
      : null;

    const content = () => {
      if (hasAnyItems) {
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
              <OverflowMenuList>{allItemsList?.[0]}</OverflowMenuList>
            )}
            {hasNavItems && (
              <nav>
                <OverflowMenuList>
                  {allItemsList?.slice(navItemsFirstPos, navItemsLastPos + 1)}
                </OverflowMenuList>
              </nav>
            )}
            {hasNavItems && hasContextItems && (
              <StyledDivider color="primaryLighter" />
            )}
            {hasContextItems && (
              <OverflowMenuList aria-label="kontekstmeny">
                {allItemsList?.slice(contextItemsFirstPos, allItemsList.length)}
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
          <OverflowMenuItem
            name={userProps.name}
            Icon={PersonOutlineOutlinedIcon}
          />
        )}

        {content()}
      </Container>
    );
  }
);
