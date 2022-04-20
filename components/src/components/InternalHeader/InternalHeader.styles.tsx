import { typographyTokens } from '../Typography/Typography.tokens';
import styled, { css } from 'styled-components';
import { internalHeaderTokens as tokens } from './InternalHeader.tokens';
import { InternalHeaderProps } from './InternalHeader.types';
import { OverflowMenu } from '../OverflowMenu';

export const Wrapper = styled.div`
  position: relative;
  *::selection {
    ${typographyTokens.selection.base}
  }
  ${tokens.wrapper.base}
`;

type BannerProps = {
  hasContextMenu?: boolean;
};

export const BannerWrapper = styled.div<BannerProps>`
  position: relative;
  display: flex;
  align-items: center;
  ${tokens.banner.base}
  ${({ hasContextMenu }) =>
    hasContextMenu &&
    css`
      padding-right: ${tokens.banner.contextMenuSpacing};
    `}
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

export const ContextMenuGroup = styled.div`
  position: absolute;
  ${tokens.contextGroup.base}
`;

export const StyledOverflowMenu = styled(OverflowMenu)`
  max-height: calc(100vh - 110px);
`;
