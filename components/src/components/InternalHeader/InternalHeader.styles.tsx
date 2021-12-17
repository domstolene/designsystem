import { typographyTokens } from '../Typography/Typography.tokens';
import styled, { css } from 'styled-components';
import { internalHeaderTokens as tokens } from './InternalHeader.tokens';
import { InternalHeaderProps } from './InternalHeader.types';
import { IconWrapper } from '../../helpers/IconWrapper';
import { Divider } from '../Divider';
import scrollbarStyling from '../../helpers/scrollbarStyling';

export const Wrapper = styled.div`
  *::selection {
    ${typographyTokens.selection.base}
  }
  ${tokens.wrapper.base}
`;

export const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tokens.banner.base}
`;

export const BannerLeftWrapper = styled.div`
  display: flex;
  ${tokens.bannerLeft.base}
`;

export const ApplicationNameWrapper = styled.div`
  ${tokens.applicationNameWrapper.base}
`;
export const LovisaWrapper = styled.div`
  ${tokens.lovisaWrapper.base}
`;

export const Navigation = styled.nav`
  ${tokens.navigation.base}
`;

type NavListProps = Pick<InternalHeaderProps, 'smallScreen'>;

export const NavigationList = styled.ul<NavListProps>`
  display: flex;
  ${({ smallScreen }) =>
    smallScreen &&
    css`
      flex-direction: column;
    `}
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
export const NavigationListItem = styled.li``;

type StyledNavigationListProps = { isCurrent?: boolean };

export const NavigationLink = styled.a<StyledNavigationListProps>`
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
  height: 100%;
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

type ContextMenuWrapperProps = { closed?: boolean };

export const ContextMenuWrapper = styled.div<ContextMenuWrapperProps>`
  position: absolute;
  z-index: 3;
  top: calc(100% - 2px);
  right: ${tokens.banner.base.paddingRight};
  overflow-y: auto;
  min-width: 180px;
  max-width: 300px;
  max-height: calc(100vh - 110px);
  transition: visibility 0.4s, opacity 0.2s;
  visibility: ${({ closed }) => (closed ? 'hidden' : 'visible')};
  opacity: ${({ closed }) => (closed ? 0 : 1)};
  ${tokens.contextMenu.base}
  ${scrollbarStyling}
`;

export const ContextMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ContextMenuListItem = styled.li``;

export const ContextMenuElement = styled.span`
  ${tokens.contextMenuLink.base}
  display: flex;
  align-items: center;
`;

export const ContextMenuLink = styled.a`
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

export const StyledDivider = styled(Divider)`
  ${tokens.contextMenuDivider.base}
`;

export const StyledIconWrapper = styled(IconWrapper)`
  ${tokens.icon.base}
`;
