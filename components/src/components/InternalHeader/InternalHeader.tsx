import { useRef, useState } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { useOnClickOutside, useOnKeyDown, useRoveFocus } from '../../hooks';
import { InternalHeaderProps } from './InternalHeader.types';
import {
  Wrapper,
  Navigation,
  NavigationList,
  ContextMenuList,
  ContextMenuWrapper,
  StyledDivider,
  BannerWrapper,
  BannerLeftWrapper,
  LovisaWrapper,
  ApplicationNameWrapper
} from './InternalHeader.styles';

import { NavigationItem } from './NavigationItem';
import { ContextMenuItem } from './ContextMenuItem';
import { InternalHeaderListItem } from './InternalHeaderListItem';

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

  useOnClickOutside([contextMenuRef.current, buttonRef.current], () => {
    setContextMenuIsClosed(true);
  });

  useOnKeyDown(['Esc', 'Escape'], () => {
    if (!contextMenuIsClosed) {
      setContextMenuIsClosed(true);
      buttonRef.current?.focus();
    }
  });

  useOnKeyDown(['Tab'], () => {
    if (!contextMenuIsClosed) {
      setContextMenuIsClosed(true);
    }
  });

  const handleCurrentPageChange = (href: string) => {
    setCurrentPage(href);
    onCurrentPageChange && onCurrentPageChange();
  };

  const handleContextMenuClick = () => {
    setContextMenuIsClosed(!contextMenuIsClosed);
  };

  const completeContextMenuElements = [];

  // if (smallScreen && navigationElements) completeContextMenuElements.push(...navigationElements);

  if (userProps && userProps.href) {
    completeContextMenuElements.push({
      title: userProps.name,
      href: userProps.href,
      Icon: PersonOutlineOutlinedIcon
    });
  }

  if (contextMenuElements)
    completeContextMenuElements.push(...contextMenuElements);

  const [focus, setFocus] = useRoveFocus(
    completeContextMenuElements && completeContextMenuElements.length,
    contextMenuIsClosed
  );

  const navigationContent =
    navigationElements &&
    navigationElements.map((item, index) => {
      const { href, ...rest } = item;
      const isCurrent = href === currentPage;
      return (
        <InternalHeaderListItem key={index}>
          <NavigationItem
            key={index}
            href={href}
            {...rest}
            isCurrent={isCurrent}
            onClick={() => handleCurrentPageChange(href)}
            role={smallScreen ? 'menuitem' : undefined}
            aria-current="page"
          />
        </InternalHeaderListItem>
      );
    });

  const navigation = navigationElements && (
    <Navigation aria-label="sidenavigasjon">
      <NavigationList>{navigationContent}</NavigationList>
    </Navigation>
  );

  const userContextMenuItem = userProps && (
    <ContextMenuItem
      key={userProps.name}
      title={userProps.name}
      Icon={PersonOutlineOutlinedIcon}
    />
  );

  const contextMenuElementsContent =
    completeContextMenuElements &&
    completeContextMenuElements.map((item, index) => {
      const { ...rest } = item;

      return (
        <InternalHeaderListItem key={index}>
          <ContextMenuItem
            key={index}
            focus={focus === index && !contextMenuIsClosed}
            setFocus={setFocus}
            index={index}
            {...rest}
          />
          {console.log(focus, contextMenuIsClosed)}
        </InternalHeaderListItem>
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
        {userProps && !userProps.href && (
          <ContextMenuItem
            key={userProps.name}
            title={userProps.name}
            Icon={PersonOutlineOutlinedIcon}
          />
        )}
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
