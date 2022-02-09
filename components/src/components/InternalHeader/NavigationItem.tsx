import { AnchorHTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { internalHeaderTokens as tokens } from './InternalHeader.tokens';

type LinkProps = { isCurrent?: boolean };

export const Link = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
  height: 100%;
  box-sizing: border-box;
  ${tokens.navigationLink.base}
  &:hover {
    ${tokens.navigationLink.hover.base}
  }
  &:active {
    ${tokens.navigationLink.active.base}
  }
  &:focus-visible {
    outline: none;
    ${tokens.navigationLink.focus.base}
  }
  ${({ isCurrent }) =>
    isCurrent &&
    css`
      ${tokens.navigationLink.current.base}
    `}
`;

export type NavigationItemProps = {
  title: string;
  isCurrent?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavigationItem = forwardRef<
  HTMLAnchorElement,
  NavigationItemProps
>(({ title, ...rest }, ref) => {
  const linkProps = {
    ref,
    ...rest
  };

  return <Link {...linkProps}>{title}</Link>;
});
