import { useRef, useState } from 'react';

import {
  AppNameLink,
  Bar,
  BarSeparator,
  ContextMenuGroup,
  NavLi,
  NavigationList,
  StyledOverflowMenu,
} from './InternalHeader.styles';
import { type InternalHeaderProps } from './InternalHeader.types';
import { NavigationItem } from './NavigationItem';
import { getBaseHTMLProps } from '../../types';
import { Button } from '../Button';
import { MenuIcon, MoreVerticalIcon } from '../Icon/icons';
import { Typography } from '../Typography';

export const InternalHeader = (props: InternalHeaderProps) => {
  const {
    applicationDesc,
    applicationName,
    applicationHref,
    smallScreen,
    navigationElements,
    contextMenuElements,
    currentPageHref,
    userProps,
    onCurrentPageChange,
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  const [contextMenuIsClosed, setContextMenuIsClosed] = useState(true);
  const [currentPage, setCurrentPage] = useState<string | undefined>(
    currentPageHref,
  );

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCurrentPageChange = (href: string) => {
    setCurrentPage(href);
    onCurrentPageChange && onCurrentPageChange();
  };

  const handleContextMenuClick = () => {
    setContextMenuIsClosed(!contextMenuIsClosed);
  };

  const onOveflowMenuClose = () => setContextMenuIsClosed(true);

  const hasNavigationElements =
    !!navigationElements && navigationElements.length > 0;
  const hasContextMenuElements =
    !!contextMenuElements && contextMenuElements.length > 0;
  const hasNavInContextMenu = smallScreen && hasNavigationElements;

  const navigation =
    hasNavigationElements && !smallScreen ? (
      <nav aria-label="sidenavigasjon">
        <NavigationList>
          {navigationElements.map((item, index) => {
            const { href, ...rest } = item;
            const isCurrent = href === currentPage;
            return (
              <NavLi key={index}>
                <NavigationItem
                  href={href}
                  {...rest}
                  isCurrent={isCurrent}
                  onClick={() => handleCurrentPageChange(href)}
                />
              </NavLi>
            );
          })}
        </NavigationList>
      </nav>
    ) : null;

  const hasContextMenu =
    hasContextMenuElements || !!userProps || hasNavInContextMenu;
  return (
    <Bar
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      $hasNavigation={!!navigation}
    >
      <Typography typographyType="bodySans02" bold as="span">
        {applicationHref ? (
          <AppNameLink href={applicationHref} rel="noopener noreferrer">
            {applicationName}
          </AppNameLink>
        ) : (
          applicationName
        )}
      </Typography>
      <Typography typographyType="bodySans02" as="span">
        {applicationDesc}
      </Typography>
      {(hasContextMenu || navigation !== null) && <BarSeparator />}
      {navigation}
      {hasContextMenu && (
        <ContextMenuGroup>
          <Button
            ref={buttonRef}
            icon={hasNavInContextMenu ? MenuIcon : MoreVerticalIcon}
            appearance="borderless"
            purpose="secondary"
            onClick={handleContextMenuClick}
            aria-haspopup="menu"
            aria-expanded={!contextMenuIsClosed ? true : undefined}
            aria-label="åpne meny"
          />
          <StyledOverflowMenu
            isOpen={!contextMenuIsClosed}
            onClose={onOveflowMenuClose}
            anchorRef={buttonRef}
            navItems={hasNavInContextMenu ? navigationElements : undefined}
            items={hasContextMenuElements ? contextMenuElements : undefined}
            userProps={userProps}
          />
        </ContextMenuGroup>
      )}
    </Bar>
  );
};

InternalHeader.displayName = 'InternalHeader';
