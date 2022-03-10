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
  ApplicationNameWrapper,
  ContextMenuGroup
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

  const interactiveContextMenuElements: (
    | NavigationLinkProps
    | ContextMenuElementProps
  )[] = [];

  const hasInteractiveUser = userProps && userProps.href;
  if (hasInteractiveUser) {
    interactiveContextMenuElements.push({
      title: userProps.name,
      href: userProps.href,
      Icon: PersonOutlineOutlinedIcon
    });
  }

  if (smallScreen && navigationElements)
    interactiveContextMenuElements.push(...navigationElements);

  if (contextMenuElements)
    interactiveContextMenuElements.push(...contextMenuElements);

  const [focus, setFocus] = useRoveFocus(
    interactiveContextMenuElements && interactiveContextMenuElements.length,
    contextMenuIsClosed
  );

  const hasInteractiveContextMenuElements =
    interactiveContextMenuElements.length > 0;
  const hasNavigationElements =
    navigationElements && navigationElements.length > 0;
  const hasContextMenuElements =
    contextMenuElements && contextMenuElements.length > 0;

  const navigation =
    hasNavigationElements && !smallScreen ? (
      <Navigation aria-label="sidenavigasjon">
        <NavigationList>
          {navigationElements.map((item, index) => {
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

  const userContextMenuItemNonInteractive =
    userProps && !userProps.href ? (
      <ContextMenuItem
        key={userProps.name}
        title={userProps.name}
        Icon={PersonOutlineOutlinedIcon}
      />
    ) : null;

  const contextMenuContentArray = hasInteractiveContextMenuElements
    ? interactiveContextMenuElements.map((item, index) => {
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

  const contextMenuWrapperProps = {
    ref: contextMenuRef,
    closed: contextMenuIsClosed,
    'aria-hidden': contextMenuIsClosed,
    role: 'menu'
  };

  const contextMenu =
    (hasInteractiveContextMenuElements || userProps) && !smallScreen ? (
      <ContextMenuWrapper {...contextMenuWrapperProps}>
        {userContextMenuItemNonInteractive}
        <ContextMenuList>{contextMenuContentArray}</ContextMenuList>
      </ContextMenuWrapper>
    ) : null;

  const contextMenuSmallScreen = () => {
    if ((hasInteractiveContextMenuElements || userProps) && smallScreen) {
      if (hasInteractiveContextMenuElements) {
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

        return (
          <ContextMenuWrapper {...contextMenuWrapperProps}>
            {userProps && !userProps.href ? (
              userContextMenuItemNonInteractive
            ) : (
              <ContextMenuList>
                {contextMenuContentArray?.slice(0, 1)}
              </ContextMenuList>
            )}
            {hasNavigationElements && (
              <nav aria-label="sidenavigasjon">
                <NavigationList smallScreen={smallScreen}>
                  {contextMenuContentArray?.slice(
                    navItemsFirstPos,
                    navItemsLastPos + 1
                  )}
                </NavigationList>
              </nav>
            )}
            {hasContextMenuElements && hasNavigationElements && (
              <StyledDivider color="primaryLighter" />
            )}
            {hasContextMenuElements && (
              <ContextMenuList>
                {contextMenuContentArray?.slice(contextItemsFirstPos)}
              </ContextMenuList>
            )}
          </ContextMenuWrapper>
        );
      } else if (userProps) {
        return (
          <ContextMenuWrapper {...contextMenuWrapperProps}>
            {userContextMenuItemNonInteractive}
          </ContextMenuWrapper>
        );
      }
    }
  };

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
      </BannerWrapper>
      {!smallScreen && navigation}
      {(hasInteractiveContextMenuElements || userProps) && (
        <ContextMenuGroup>
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
          {smallScreen ? contextMenuSmallScreen() : contextMenu}
        </ContextMenuGroup>
      )}
    </Wrapper>
  );
};
