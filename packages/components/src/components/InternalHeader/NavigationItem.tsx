import { type AnchorHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

import { getNavTokens } from './NavigationItem.tokens';
import { focusVisibleInset } from '../helpers';
import { getFontStyling } from '../Typography';

interface LinkProps {
  $active: boolean;
}

export const Link = styled.a<LinkProps>`
  ${getFontStyling('bodySans02')}
  text-decoration: none;

  color: ${({ $active }) => getNavTokens({ active: $active }).color};
  background-color: ${({ $active }) =>
    getNavTokens({ active: $active }).backgroundColor};
  padding: ${({ $active }) => getNavTokens({ active: $active }).padding};
  border-radius: ${({ $active }) =>
    getNavTokens({ active: $active }).borderRadius};

  &:hover {
    color: ${({ $active }) => getNavTokens({ active: $active }).hover.color};
    background-color: ${({ $active }) =>
      getNavTokens({ active: $active }).hover.backgroundColor};
  }

  &:active {
    color: ${getNavTokens({ active: true }).color};
    background-color: ${getNavTokens({ active: true }).backgroundColor};
  }
  &:focus-visible,
  &.focus-visible {
    ${focusVisibleInset};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.2s;
  }
`;

export type NavigationItemProps = {
  title: string;
  isCurrent?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavigationItem = forwardRef<
  HTMLAnchorElement,
  NavigationItemProps
>(({ title, isCurrent, ...rest }, ref) => {
  return (
    <Link
      {...rest}
      ref={ref}
      aria-current={isCurrent ? 'page' : undefined}
      $active={isCurrent ?? false}
    >
      {title}
    </Link>
  );
});
