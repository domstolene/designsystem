import React, {
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
import { overflowMenuTokens as tokens } from './OverflowMenu.tokens';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { IconWrapper } from '../IconWrapper';
import { useCombinedRef } from '../../hooks';

export const Span = styled.span`
  ${tokens.link.base}
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
  ${tokens.link.base}
  display: flex;
  align-items: center;
  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.2s;
  }
  &:hover {
    ${tokens.link.hover.base}
  }
  &:active {
    ${tokens.link.active.base}
  }
  &:focus-visible,
  &.focus-visible {
    ${tokens.link.focus.base}
  }
`;

export const StyledIconWrapper = styled(IconWrapper)``;

export type OverflowMenuItemProps = {
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

export const OverflowMenuItem = forwardRef<
  HTMLAnchorElement,
  OverflowMenuItemProps
>(
  (
    { title, href, onClick, onKeyDown, Icon, focus, setFocus, index, ...rest },
    ref
  ) => {
    const itemRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
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
      href,
      onClick: handleOnClick,
      onKeyDown: handleOnKeyDown,
      role: 'menuitem',
      tabIndex: focus ? 0 : -1
    };
    const icon = Icon && <StyledIconWrapper iconSize="inline" Icon={Icon} />;

    if (!href && !onClick) {
      return (
        <Span {...elementProps}>
          {icon}
          {title}
        </Span>
      );
    }

    if (!href) {
      return (
        <Link
          as="button"
          {...linkProps}
          {...(rest as HTMLAttributes<HTMLButtonElement>)}
          ref={combinedRef as React.ForwardedRef<HTMLButtonElement>}
        >
          {icon}
          {title}
        </Link>
      );
    }

    return (
      <Link
        as="a"
        {...linkProps}
        {...(rest as HTMLAttributes<HTMLAnchorElement>)}
        ref={combinedRef as React.ForwardedRef<HTMLAnchorElement>}
      >
        {icon}
        {title}
      </Link>
    );
  }
);
