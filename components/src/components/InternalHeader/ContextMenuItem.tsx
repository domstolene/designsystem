import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
  MouseEvent,
  KeyboardEvent
} from 'react';
import styled from 'styled-components';
import { internalHeaderTokens as tokens } from './InternalHeader.tokens';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
import { IconWrapper } from '../../helpers/IconWrapper';
import { useCombinedRef } from '../../hooks';

export const Element = styled.span`
  ${tokens.contextMenuLink.base}
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const Link = styled.a`
  box-sizing: border-box;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 100%;
  ${tokens.contextMenuLink.base}
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
  &:hover {
    ${tokens.contextMenuLink.hover.base}
  }
  &:active {
    ${tokens.contextMenuLink.active.base}
  }
  &:focus-visible {
    outline: none;
    ${tokens.contextMenuLink.focus.base}
  }
`;

export const StyledIconWrapper = styled(IconWrapper)`
  ${tokens.icon.base}
`;

export type ContextMenuItemProps = {
  title: string;
  href?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  focus?: boolean;
  setFocus?: Dispatch<SetStateAction<number>>;
  index?: number;
  isMenuClosed?: boolean;
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
  | HTMLAttributes<HTMLSpanElement>
);

export const ContextMenuItem = forwardRef<
  HTMLAnchorElement,
  ContextMenuItemProps
>(
  (
    { title, href, onClick, onKeyDown, Icon, focus, setFocus, index, ...rest },
    ref
  ) => {
    const itemRef = useRef<HTMLAnchorElement | HTMLAnchorElement>(null);
    const combinedRef = useCombinedRef(ref, itemRef);

    useEffect(() => {
      if (focus) {
        itemRef.current?.focus();
      }
    }, [focus]);

    const handleSelect = useCallback(() => {
      if (setFocus && index) {
        setFocus(index);
      }
    }, [index, setFocus]);

    const handleOnClick = (
      e: MouseEvent<HTMLAnchorElement> & MouseEvent<HTMLButtonElement>
    ) => {
      handleSelect();
      onClick && onClick(e);
    };

    const handleOnKeyDown = (
      e: KeyboardEvent<HTMLAnchorElement> & KeyboardEvent<HTMLButtonElement>
    ) => {
      handleSelect();
      onKeyDown && onKeyDown(e);
    };

    const elementProps = {
      ref: ref,
      ...rest
    };

    const linkProps = {
      ref: combinedRef,
      href,
      onClick: handleOnClick,
      onKeyDown: handleOnKeyDown,
      role: 'menuitem',
      tabIndex: focus ? 0 : -1,
      ...rest
    };
    const icon = Icon && <StyledIconWrapper iconSize="inline" Icon={Icon} />;

    return !href && !onClick ? (
      <Element {...elementProps}>
        {icon}
        {title}
      </Element>
    ) : (
      <Link as={href ? 'a' : 'button'} {...linkProps}>
        {icon}
        {title}
      </Link>
    );
  }
);
