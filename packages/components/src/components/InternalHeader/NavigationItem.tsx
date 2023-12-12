import { AnchorHTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
  internalHeaderTokens as tokens,
  typographyTypes,
} from './InternalHeader.tokens';
import { getFontStyling } from '../Typography';
import { focusVisible } from '../helpers';

const { navLink } = tokens;

interface LinkProps {
  isCurrent?: boolean;
}

export const Link = styled.a.withConfig({
  shouldForwardProp: prop => prop !== 'isCurrent',
})<LinkProps>`
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  text-decoration: none;
  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.2s;
  }
  color: ${navLink.base.color};
  background-color: ${navLink.base.backgroundColor};
  padding: ${navLink.base.padding};
  ${getFontStyling(typographyTypes.navLink)}
  &:hover {
    color: ${navLink.hover.color};
  }
  &:active {
    color: ${navLink.active.color};
  }
  &:focus-visible,
  &.focus-visible {
    ${focusVisible};
  }
  ${({ isCurrent }) =>
    isCurrent &&
    css`
      color: ${navLink.current.color};
      background-color: ${navLink.current.backgroundColor};
      &:hover {
        color: ${navLink.current.color};
      }
    `}
`;

export type NavigationItemProps = {
  title: string;
  isCurrent?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavigationItem = forwardRef<
  HTMLAnchorElement,
  NavigationItemProps
>(({ title, isCurrent, ...rest }, ref) => {
  const linkProps = {
    ref,
    isCurrent,

    ...rest,
  };

  return (
    <Link {...linkProps} aria-current={isCurrent ? 'page' : undefined}>
      {title}
    </Link>
  );
});
