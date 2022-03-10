import { typographyTokens } from '../Typography/Typography.tokens';
import styled, { css } from 'styled-components';
import { internalHeaderTokens as tokens } from './InternalHeader.tokens';
import { InternalHeaderProps } from './InternalHeader.types';
import { Divider } from '../Divider';
import scrollbarStyling from '../../helpers/scrollbarStyling';

export const Wrapper = styled.div`
  position: relative;
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
  display: flex;
  align-items: center;
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
  box-sizing: border-box;
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

type ContextMenuWrapperProps = { closed?: boolean };

export const ContextMenuWrapper = styled.div<ContextMenuWrapperProps>`
  box-sizing: border-box;
  position: absolute;
  z-index: 3;
  top: 100%;
  right: 0;
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

export const StyledDivider = styled(Divider)`
  ${tokens.contextMenuDivider.base}
`;

export const ContextMenuGroup = styled.div`
  position: absolute;
  ${tokens.contextGroup.base}
`;
