import styled, { css } from 'styled-components';
import { internalHeaderTokens as tokens } from './InternalHeader.tokens';
import { InternalHeaderProps } from './InternalHeader.types';
import { OverflowMenu } from '../OverflowMenu';
import { selection } from '../helpers';

const {
  outerContainer,
  applicationNameWrapper,
  lovisaWrapper,
  banner,
  navigation,
  contextGroup,
} = tokens;

export const OuterContainer = styled.div`
  position: relative;
  *::selection {
    ${selection}
  }
  background-color: ${outerContainer.backgroundColor};
`;

interface BannerProps {
  $hasContextMenu?: boolean;
}

export const BannerWrapper = styled.div<BannerProps>`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: ${banner.borderBottom};
  padding-right: ${banner.paddingRight};
  ${({ $hasContextMenu }) =>
    $hasContextMenu &&
    css`
      padding-right: ${banner.hasContextMenu.paddingRight};
    `}
`;

export const BannerLeftWrapper = styled.div`
  display: flex;
`;

export const ApplicationNameWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${applicationNameWrapper.padding};
`;

export const LovisaWrapper = styled.div`
  padding: ${lovisaWrapper.padding};
  border-right: ${lovisaWrapper.borderRight};
`;

export const Navigation = styled.nav`
  border-bottom: ${navigation.borderBottom};
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
  top: ${contextGroup.top};
  right: ${contextGroup.right};
`;

export const StyledOverflowMenu = styled(OverflowMenu)`
  max-height: calc(100vh - 110px);
`;
