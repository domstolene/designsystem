import {
  ElementType,
  HTMLAttributes,
  useEffect,
  useRef,
  useState
} from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '../Typography';
import { Button } from '../Button';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import { internalHeaderTokens as tokens } from './InternalHeader.tokens';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { IconWrapper } from '../../helpers/IconWrapper';
import { typographyTokens } from '../Typography/Typography.tokens';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { Divider } from '../Divider';
import scrollbarStyling from '../../helpers/scrollbarStyling';

const Wrapper = styled.div`
  *::selection {
    ${typographyTokens.selection.base}
  }
  ${tokens.wrapper.base}
`;

const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tokens.banner.base}
`;

const BannerLeftWrapper = styled.div`
  display: flex;
  ${tokens.bannerLeft.base}
`;

const ApplicationNameWrapper = styled.div`
  ${tokens.applicationNameWrapper.base}
`;
const LovisaWrapper = styled.div`
  ${tokens.lovisaWrapper.base}
`;

const Navigation = styled.nav`
  ${tokens.navigation.base}
`;

type NavListProps = Pick<InternalHeaderProps, 'smallScreen'>;

const NavigationList = styled.ul<NavListProps>`
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
const NavigationListItem = styled.li``;

const NavigationLink = styled.a`
  display: block;
  transition: background-color 0.2s;
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
`;

type ContextMenuWrapperProps = { closed?: boolean };

const ContextMenuWrapper = styled.div<ContextMenuWrapperProps>`
  position: absolute;
  z-index: 3;
  top: 100%;
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

const ContextMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ContextMenuListItem = styled.li``;

const ContextMenuLink = styled.a`
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

const StyledDivider = styled(Divider)`
  ${tokens.contextMenuDivider.base}
`;

const StyledIconWrapper = styled(IconWrapper)`
  ${tokens.icon.base}
`;

export type MenuLink = {
  href: string;
  title: string;
};

export type ContextMenuLink = MenuLink & {
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
};

export type InternaHeaderUserProps = {
  name: string;
  href?: string;
};

type InternalHeaderProps = {
  applicationName?: string;
  smallScreen?: boolean;
  userProps?: InternaHeaderUserProps;
  navigationElements?: MenuLink[];
  contextMenuElements?: ContextMenuLink[];
} & HTMLAttributes<HTMLDivElement>;

export const InternalHeader = ({
  applicationName,
  smallScreen,
  navigationElements,
  contextMenuElements,
  userProps,
  ...rest
}: InternalHeaderProps) => {
  const [contextMenuIsClosed, setContextMenuIsClosed] = useState(true);
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleContextMenuClickOutside = (e: MouseEvent | TouchEvent) => {
    if (
      contextMenuIsClosed !== true &&
      contextMenuRef.current !== null &&
      !contextMenuRef.current.contains(e.target as Node) &&
      buttonRef.current !== null &&
      !buttonRef.current.contains(e.target as Node)
    ) {
      setContextMenuIsClosed(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleContextMenuClickOutside, true);
    return () => {
      document.removeEventListener(
        'click',
        handleContextMenuClickOutside,
        true
      );
    };
  });

  const handleContextMenuClick = () => {
    setContextMenuIsClosed(!contextMenuIsClosed);
  };

  const userLinkAs: ElementType = userProps?.href ? 'a' : 'span';

  const userElementProps = {
    as: userLinkAs,
    href: userProps?.href
  };

  const navigationContent =
    navigationElements &&
    navigationElements.map((item, index) => (
      <NavigationListItem key={index}>
        <NavigationLink href={item.href}>{item.title}</NavigationLink>
      </NavigationListItem>
    ));

  const navigation = navigationElements && (
    <Navigation>
      <NavigationList>{navigationContent}</NavigationList>
    </Navigation>
  );

  const contextMenuContent = (userProps || contextMenuElements) && (
    <ContextMenuList role="menu">
      {userProps && (
        <ContextMenuListItem>
          <ContextMenuLink {...userElementProps}>
            <StyledIconWrapper
              iconSize="inline"
              Icon={PersonOutlineOutlinedIcon}
            />
            {userProps.name}
          </ContextMenuLink>
        </ContextMenuListItem>
      )}
      {contextMenuElements &&
        contextMenuElements.map((item, index) => (
          <ContextMenuListItem key={index} role="menuitem">
            <ContextMenuLink href={item.href}>
              {item.Icon && (
                <StyledIconWrapper iconSize="inline" Icon={item.Icon} />
              )}
              {item.title}
            </ContextMenuLink>
          </ContextMenuListItem>
        ))}
    </ContextMenuList>
  );

  const contextMenuWrapperProps = {
    ref: contextMenuRef,
    closed: contextMenuIsClosed
  };

  const contextMenu = (contextMenuElements || userProps) && (
    <ContextMenuWrapper
      {...contextMenuWrapperProps}
      aria-hidden={contextMenuIsClosed}
    >
      {contextMenuContent}
    </ContextMenuWrapper>
  );

  const navListProps = {
    smallScreen
  };

  const contextMenuMobile = (contextMenuElements ||
    navigationElements ||
    userProps) && (
    <ContextMenuWrapper
      {...contextMenuWrapperProps}
      aria-hidden={contextMenuIsClosed}
    >
      {navigationElements && (
        <nav>
          <NavigationList {...navListProps}>{navigationContent}</NavigationList>
        </nav>
      )}
      {contextMenuElements && navigationElements && (
        <StyledDivider color="primaryLighter" />
      )}
      {contextMenuContent}
    </ContextMenuWrapper>
  );

  const wrapperProps = {
    ...rest
  };

  return (
    <Wrapper {...wrapperProps}>
      <BannerWrapper>
        <BannerLeftWrapper>
          <LovisaWrapper>
            <Typography typographyType="bodySans02" bold as="span">
              Lovisa Web
            </Typography>
          </LovisaWrapper>
          <ApplicationNameWrapper>
            <Typography typographyType="bodySans02" as="span">
              {applicationName}
            </Typography>
          </ApplicationNameWrapper>
        </BannerLeftWrapper>
        <Button
          ref={buttonRef}
          Icon={
            smallScreen && navigationElements
              ? MenuOutlinedIcon
              : MoreVertOutlinedIcon
          }
          appearance="borderless"
          purpose="secondary"
          onClick={handleContextMenuClick}
        />
        {smallScreen ? contextMenuMobile : contextMenu}
      </BannerWrapper>
      {!smallScreen && navigation}
    </Wrapper>
  );
};
