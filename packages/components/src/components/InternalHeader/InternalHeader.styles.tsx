import styled, { css } from 'styled-components';

import { internalHeaderTokens as tokens } from './InternalHeader.tokens';
import { type InternalHeaderProps } from './InternalHeader.types';
import {
  focusVisible,
  focusVisibleTransitionValue,
  inheritLinkStyling,
  selection,
} from '../helpers';
import { OverflowMenu } from '../OverflowMenu';

const { bar, separator } = tokens;

export const Bar = styled.div<{
  $hasNavigation: boolean;
  $smallScreen?: boolean;
}>`
  *::selection {
    ${selection}
  }
  background-color: ${bar.backgroundColor};
  display: flex;
  gap: ${bar.itemGap};
  align-items: center;
  min-height: ${bar.minHeight};
  border-bottom: ${bar.borderBottom};
  padding-left: ${bar.paddingLeft};
  padding-right: ${bar.paddingRight};
  ${({ $smallScreen }) =>
    $smallScreen &&
    css`
      gap: ${bar.smallScreen.itemGap};
      padding-left: ${bar.smallScreen.paddingLeft};
      padding-right: ${bar.smallScreen.paddingRight};
    `}

  ${({ $hasNavigation }) =>
    $hasNavigation
      ? css`
          ${ContextMenuGroup} {
            margin-left: auto;
          }
        `
      : css`
          ${BarSeparator} {
            margin-left: auto;
          }
        `}
`;

export const BarSeparator = styled.div`
  border-left: ${separator.width} solid ${separator.color};
  align-self: stretch;
`;

export const AppNameLink = styled.a`
  ${inheritLinkStyling}
  transition: ${focusVisibleTransitionValue};
  &:focus-visible,
  &.focus-visible {
    ${focusVisible}
  }
`;

type NavListProps = Pick<InternalHeaderProps, 'smallScreen'>;

export const NavigationList = styled.ul<NavListProps>`
  box-sizing: border-box;
  display: flex;
  gap: ${bar.itemGap};
  align-items: center;
  width: 100%;
  ${({ smallScreen }) =>
    smallScreen &&
    css`
      align-items: initial;
      flex-direction: column;
    `}
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ContextMenuGroup = styled.div``;

export const StyledOverflowMenu = styled(OverflowMenu)`
  max-height: calc(100vh - 110px);
`;

export const NavLi = styled.li`
  display: flex;
`;
