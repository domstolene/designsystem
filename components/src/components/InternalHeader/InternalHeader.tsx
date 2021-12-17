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
          >
            {title}
          </NavigationLink>
        </NavigationListItem>
      );
    });

  const navigation = navigationElements && (
    <Navigation>
      <NavigationList>{navigationContent}</NavigationList>
    </Navigation>
  );

  const contextMenuContent = (userProps || contextMenuElements) && (
    <ContextMenuList role="menu">
      {userProps && (
        <ContextMenuListItem>
          {userProps.href ? (
            <ContextMenuLink {...userElementProps}>
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
      )}
      {contextMenuElements &&
        contextMenuElements.map((item, index) => {
          const { Icon, href, title, ...rest } = item;
          const as: ElementType = href ? 'a' : 'button';
          const isLastItem =
            index === contextMenuElements.length - 1 ? true : false;
          const props = {
            as: as,
            href,
            onBlur: isLastItem ? onBlurContextMenu : undefined,
            ...rest
          };
          return (
            <ContextMenuListItem key={index} role="menuitem">
              <ContextMenuLink {...props}>
                {Icon && <StyledIconWrapper iconSize="inline" Icon={Icon} />}
                {title}
              </ContextMenuLink>
            </ContextMenuListItem>
          );
        })}
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
