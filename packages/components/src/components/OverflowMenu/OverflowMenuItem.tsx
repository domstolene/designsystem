import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
} from 'react';
import styled, { css } from 'styled-components';

import {
  overflowMenuTokens as tokens,
  typographyType,
} from './OverflowMenu.tokens';
import { useCombinedRef } from '../../hooks';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { normalizeButton } from '../helpers';
import { Icon } from '../Icon';
import { type SvgIcon } from '../Icon/utils';
import { focusVisibleLink, getFontStyling } from '../Typography';

const { element, link } = tokens;

const elementBaseCSS = css`
  display: flex;
  box-sizing: border-box;
  color: ${element.base.color};
  text-decoration: ${element.base.textDecoration};
  background-color: ${element.base.backgroundColor};
  padding: ${element.base.padding};
  gap: ${element.base.gap};
  ${getFontStyling(typographyType)}
`;

export const Span = styled.span`
  ${elementBaseCSS}
`;

export const Link = styled.a`
  ${normalizeButton}
  text-align: left;
  user-select: text;
  border: none;
  cursor: pointer;
  outline: inherit;
  width: 100%;
  ${elementBaseCSS}
  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.2s;
  }
  &:hover {
    background-color: ${link.hover.backgroundColor};
  }
  &:active {
    background-color: ${link.active.backgroundColor};
  }
  &:focus-visible,
  &.focus-visible {
    ${focusVisibleLink}
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  height: ${link.iconWrapper.height};
`;

interface BaseOverflowMenuItemProps {
  title: string;
  icon?: SvgIcon;
  focus?: boolean;
  index?: number;
  isMenuClosed?: boolean;
}

type AnchorOverflowMenuItemProps = BaseOverflowMenuItemProps &
  BaseComponentProps<
    HTMLAnchorElement,
    {
      href?: string;
    },
    AnchorHTMLAttributes<HTMLAnchorElement>
  >;

type ButtonOverflowMenuItemProps = BaseOverflowMenuItemProps &
  BaseComponentProps<
    HTMLButtonElement,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>,
    ButtonHTMLAttributes<HTMLButtonElement>
  >;

type OtherOverflowMenuItemProps = BaseOverflowMenuItemProps &
  BaseComponentProps<HTMLSpanElement>;

export type OverflowMenuItemProps =
  | AnchorOverflowMenuItemProps
  | ButtonOverflowMenuItemProps
  | OtherOverflowMenuItemProps;

const isAnchorProps = (
  props: OverflowMenuItemProps,
): props is AnchorOverflowMenuItemProps =>
  (props as AnchorOverflowMenuItemProps).href !== undefined;

const isButtonProps = (
  props: OverflowMenuItemProps,
): props is ButtonOverflowMenuItemProps =>
  (props as AnchorOverflowMenuItemProps).href === undefined &&
  (props as ButtonOverflowMenuItemProps).onClick !== undefined;

export const OverflowMenuItem = forwardRef<
  HTMLAnchorElement,
  OverflowMenuItemProps
>((props, ref) => {
  const { title, icon, focus, id, className, htmlProps = {}, ...rest } = props;

  let href: AnchorOverflowMenuItemProps['href'];
  let onClick: ButtonOverflowMenuItemProps['onClick'];
  if (isAnchorProps(props)) {
    href = props.href;
  } else if (isButtonProps(props)) {
    onClick = props.onClick;
  }

  const itemRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const combinedRef = useCombinedRef(ref, itemRef);

  useEffect(() => {
    if (focus) {
      itemRef.current?.focus();
    }
  }, [focus]);

  const linkProps = {
    href,
    role: 'menuitem',
    tabIndex: focus ? 0 : -1,
  };
  const iconElement = icon && <Icon iconSize="inherit" icon={icon} />;

  if (!href && !onClick) {
    return (
      <Span {...{ ...getBaseHTMLProps(id, className, htmlProps, rest), ref }}>
        <IconWrapper>{iconElement}</IconWrapper>
        {title}
      </Span>
    );
  }

  if (!href) {
    return (
      <Link
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
        {...linkProps}
        as="button"
        ref={combinedRef as ForwardedRef<HTMLButtonElement>}
      >
        <IconWrapper>{iconElement}</IconWrapper>
        {title}
      </Link>
    );
  }

  return (
    <Link
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      {...linkProps}
      as="a"
      ref={combinedRef as ForwardedRef<HTMLAnchorElement>}
    >
      <IconWrapper>{iconElement}</IconWrapper>
      {title}
    </Link>
  );
});

OverflowMenuItem.displayName = 'OverflowMenuItem';
