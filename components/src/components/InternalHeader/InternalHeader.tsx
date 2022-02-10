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
import { ContextMenuElementProps, NavigationLinkProps } from '.';

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

  const completeContextMenuElements: (
    | NavigationLinkProps
    | ContextMenuElementProps
  )[] = [];

  if (userProps && userProps.href) {
    completeContextMenuElements.push({
      title: userProps.name,
      href: userProps.href,
      Icon: PersonOutlineOutlinedIcon
    });
  }

  if (smallScreen && navigationElements)
    completeContextMenuElements.push(...navigationElements);

  if (contextMenuElements)
    completeContextMenuElements.push(...contextMenuElements);

  const [focus, setFocus] = useRoveFocus(
    completeContextMenuElements && completeContextMenuElements.length,
    contextMenuIsClosed
  );

  const navigation =
    navigationElements && !smallScreen ? (
      <Navigation aria-label="sidenavigasjon">
        <NavigationList>
          {navigationElements &&
            navigationElements.map((item, index) => {
              const { href, ...rest } = item;
              const isCurrent = href === currentPage;
              return (
                <InternalHeaderListItem key={index}>
                  <NavigationItem
                    href={href}
                    {...rest}
                    isCurrent={isCurrent}
                    onClick={() => handleCurrentPageChange(href)}
                  />
                </InternalHeaderListItem>
              );
            })}
        </NavigationList>
      </Navigation>
    ) : null;

  const userContextMenuItemNonInteractive = userProps && (
    <ContextMenuItem
      key={userProps.name}
      title={userProps.name}
      Icon={PersonOutlineOutlinedIcon}
    />
  );

  const contextMenuWrapperProps = {
    ref: contextMenuRef,
    closed: contextMenuIsClosed
  };

  const contextMenu =
    (contextMenuElements || userProps) && !smallScreen ? (
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
          {completeContextMenuElements &&
            completeContextMenuElements.map((item, index) => {
              const { ...rest } = item;

              return (
                <InternalHeaderListItem key={index}>
                  <ContextMenuItem
                    focus={focus === index && !contextMenuIsClosed}
                    setFocus={setFocus}
                    index={index}
                    {...rest}
                  />
                  {console.log(focus, contextMenuIsClosed)}
                </InternalHeaderListItem>
              );
            })}
        </ContextMenuList>
      </ContextMenuWrapper>
    ) : null;

  const contextMenuSmallScreenContent =
    completeContextMenuElements && smallScreen
      ? completeContextMenuElements.map((item, index) => {
          const { ...rest } = item;
          return (
            <InternalHeaderListItem key={index}>
              <ContextMenuItem
                index={index}
                focus={focus === index && !contextMenuIsClosed}
                setFocus={setFocus}
                {...rest}
              />
            </InternalHeaderListItem>
          );
        })
      : null;

  const hasInteractiveUser = userProps && userProps.href;
  const userPropsInteractivePos = hasInteractiveUser ? 0 : -1;
  const navItemsFirstPos = navigationElements
    ? userPropsInteractivePos + 1
    : -1;
  const navItemsLastPos = navigationElements
    ? userPropsInteractivePos + navigationElements.length
    : -1;
  const contextItemsFirstPos = !contextMenuElements
    ? -1
    : navigationElements
    ? navItemsLastPos + 1
    : userPropsInteractivePos + 1;

  const contextMenuSmallScreen = (contextMenuElements ||
    navigationElements ||
    userProps) && (
    <ContextMenuWrapper
      {...contextMenuWrapperProps}
      aria-hidden={contextMenuIsClosed}
      role="menu"
    >
      {userProps && !userProps.href
        ? userContextMenuItemNonInteractive
        : contextMenuSmallScreenContent?.slice(0, 1)}
      {navigationElements && (
        <nav aria-label="sidenavigasjon">
          <NavigationList smallScreen={smallScreen}>
            {contextMenuSmallScreenContent?.slice(
              navItemsFirstPos,
              navItemsLastPos + 1
            )}
          </NavigationList>
        </nav>
      )}
      {contextMenuElements && navigationElements && (
        <StyledDivider color="primaryLighter" />
      )}
      {contextMenuElements && (
        <ContextMenuList>
          {contextMenuSmallScreenContent?.slice(contextItemsFirstPos)}
        </ContextMenuList>
      )}
    </ContextMenuWrapper>
  );

  const isSmallScreenAndHasNavElements =
    smallScreen && navigationElements ? true : false;

  return (
    <Wrapper {...rest}>
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
        {completeContextMenuElements && (
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
        {smallScreen ? contextMenuSmallScreen : contextMenu}
      </BannerWrapper>
      {!smallScreen && navigation}
    </Wrapper>
  );
};
