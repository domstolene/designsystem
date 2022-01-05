import { ElementType, useEffect, useRef, useState } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { InternalHeaderProps } from './InternalHeader.types';
import {
  Wrapper,
  NavigationListItem,
  NavigationLink,
  Navigation,
  NavigationList,
  ContextMenuList,
  ContextMenuListItem,
  ContextMenuLink,
  StyledIconWrapper,
  ContextMenuElement,
  ContextMenuWrapper,
  StyledDivider,
  BannerWrapper,
  BannerLeftWrapper,
  LovisaWrapper,
  ApplicationNameWrapper
} from './InternalHeader.styles';

export const InternalHeader = ({
  applicationName,
  smallScreen,
  navigationElements,
  contextMenuElements,
  currentPageHref,
  userProps,
  onCurrentPageChange,
  ...rest
}: InternalHeaderProps) => {
  const [contextMenuIsClosed, setContextMenuIsClosed] = useState(true);
  const [currentPage, setCurrentPage] = useState<string | undefined>(
    currentPageHref
  );
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

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      setContextMenuIsClosed(true);
      buttonRef.current?.focus();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);

  const onBlurContextMenu = () => {
    setContextMenuIsClosed(true);
  };

  const handleCurrentPageChange = (href: string) => {
    setCurrentPage(href);
    onCurrentPageChange && onCurrentPageChange();
  };

  const handleContextMenuClick = () => {
    setContextMenuIsClosed(!contextMenuIsClosed);
  };

  const userLinkAs: ElementType = userProps?.href ? 'a' : 'span';
  const userIsLastFocusableItem =
    !contextMenuElements && userProps && userProps.href;

  const userElementProps = {
    as: userLinkAs,
    href: userProps?.href,
    onBlur: userIsLastFocusableItem ? onBlurContextMenu : undefined
  };

  const navigationContent =
    navigationElements &&
    navigationElements.map((item, index) => {
      const { href, title, ...rest } = item;
      const isCurrent = href === currentPage;
      return (
        <NavigationListItem key={index}>
          <NavigationLink
            {...rest}
            href={href}
            isCurrent={isCurrent}
            onClick={() => handleCurrentPageChange(href)}
            role={smallScreen ? 'menuitem' : undefined}
          >
            {title}
          </NavigationLink>
        </NavigationListItem>
      );
    });

  const navigation = navigationElements && (
    <Navigation aria-label="sidenavigasjon">
      <NavigationList>{navigationContent}</NavigationList>
    </Navigation>
  );

  const userContextMenuItem = userProps && (
    <ContextMenuListItem>
      {userProps.href ? (
        <ContextMenuLink {...userElementProps} role="menuitem">
          <StyledIconWrapper
            iconSize="inline"
            Icon={PersonOutlineOutlinedIcon}
          />
          {userProps.name}
        </ContextMenuLink>
      ) : (
        <ContextMenuElement {...userElementProps}>
          <StyledIconWrapper
            iconSize="inline"
            Icon={PersonOutlineOutlinedIcon}
          />
          {userProps.name}
        </ContextMenuElement>
      )}
    </ContextMenuListItem>
  );

  const contextMenuElementsContent =
    contextMenuElements &&
    contextMenuElements.map((item, index) => {
      const { Icon, href, title, onClick, ...rest } = item;
      const as: ElementType = href ? 'a' : 'button';
      const isLastItem =
        index === contextMenuElements.length - 1 ? true : false;
      const props = {
        as: as,
        href,
        onClick,
        onBlur: isLastItem ? onBlurContextMenu : undefined,
        ...rest
      };
      return (
        <ContextMenuListItem key={index}>
          <ContextMenuLink
            {...props}
            role={href || onClick ? 'menuitem' : undefined}
          >
            {Icon && <StyledIconWrapper iconSize="inline" Icon={Icon} />}
            {title}
          </ContextMenuLink>
        </ContextMenuListItem>
      );
    });

  const contextMenuWrapperProps = {
    ref: contextMenuRef,
    closed: contextMenuIsClosed
  };

  const contextMenu = (contextMenuElements || userProps) && (
    <ContextMenuWrapper
      {...contextMenuWrapperProps}
      aria-hidden={contextMenuIsClosed}
      role="menu"
    >
      <ContextMenuList>
        {userContextMenuItem}
        {contextMenuElementsContent}
      </ContextMenuList>
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
      role="menu"
    >
      <ContextMenuList>{userContextMenuItem}</ContextMenuList>
      {navigationElements && (
        <nav aria-label="sidenavigasjon">
          <NavigationList {...navListProps}>{navigationContent}</NavigationList>
        </nav>
      )}
      {contextMenuElements && navigationElements && (
        <StyledDivider color="primaryLighter" />
      )}
      <ContextMenuList>{contextMenuElementsContent}</ContextMenuList>
    </ContextMenuWrapper>
  );

  const isSmallScreenAndHasNavElements = smallScreen && navigationElements;

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
        {(isSmallScreenAndHasNavElements || contextMenuElements) && (
          <Button
            ref={buttonRef}
            Icon={
              isSmallScreenAndHasNavElements
                ? MenuOutlinedIcon
                : MoreVertOutlinedIcon
            }
            appearance="borderless"
            purpose="secondary"
            onClick={handleContextMenuClick}
            aria-haspopup="menu"
            aria-expanded={!contextMenuIsClosed ? true : undefined}
            aria-label="åpne meny"
          />
        )}
        {smallScreen ? contextMenuMobile : contextMenu}
      </BannerWrapper>
      {!smallScreen && navigation}
    </Wrapper>
  );
};
