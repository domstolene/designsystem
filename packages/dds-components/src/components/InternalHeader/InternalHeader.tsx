import { useState } from 'react';

import styles from './InternalHeader.module.css';
import { type InternalHeaderProps } from './InternalHeader.types';
import { NavigationItem } from './NavigationItem';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import { StylelessList } from '../helpers';
import { focusable } from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { MenuIcon, MoreVerticalIcon, PersonIcon } from '../Icon/icons';
import {
  OverflowMenu,
  OverflowMenuButton,
  type OverflowMenuButtonProps,
  OverflowMenuDivider,
  OverflowMenuGroup,
  OverflowMenuLink,
  type OverflowMenuLinkProps,
  OverflowMenuList,
  OverflowMenuSpan,
} from '../OverflowMenu';
import { Typography } from '../Typography';

export const InternalHeader = (props: InternalHeaderProps) => {
  const {
    applicationDesc,
    applicationName,
    applicationHref,
    smallScreenBreakpoint,
    navItems,
    contextMenuItems,
    currentPageHref,
    user,
    onCurrentPageChange,
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  const [currentPage, setCurrentPage] = useState<string | undefined>(
    currentPageHref,
  );

  const handleCurrentPageChange = (href: string) => {
    setCurrentPage(href);
    onCurrentPageChange?.();
  };

  const hasNavigationElements = !!navItems && navItems.length > 0;
  const hasContextMenuElements =
    !!contextMenuItems && contextMenuItems.length > 0;
  const hasSmallScreenBreakpoint = !!smallScreenBreakpoint;
  const hasNavInContextMenu = hasSmallScreenBreakpoint && hasNavigationElements;

  const navigation = hasNavigationElements ? (
    <nav aria-label="sidenavigasjon">
      <StylelessList
        className={cn(
          styles['nav-list'],
          hasSmallScreenBreakpoint &&
            styles[`nav-list--small-screen-${smallScreenBreakpoint}`],
        )}
      >
        {navItems.map((item, index) => {
          const { href, ...rest } = item;
          const isCurrent = href === currentPage;
          return (
            <li key={index} className={styles['nav-list__item']}>
              <NavigationItem
                href={href}
                {...rest}
                isCurrent={isCurrent}
                onClick={() => handleCurrentPageChange(href)}
              />
            </li>
          );
        })}
      </StylelessList>
    </nav>
  ) : null;

  const hasContextMenu =
    hasContextMenuElements || !!user || hasNavInContextMenu;
  const hasContextMenuLargeScreen = hasContextMenuElements || !!user;

  return (
    <div
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          styles.bar,
          hasSmallScreenBreakpoint &&
            styles[`bar--small-screen-${smallScreenBreakpoint}`],
          !!navigation && styles['bar--with-nav'],
        ),
        htmlProps,
        rest,
      )}
    >
      <Typography typographyType="headingSmall" bold as="span">
        {applicationHref ? (
          <a
            href={applicationHref}
            rel="noopener noreferrer"
            className={cn(utilStyles['inherit-link-styling'], focusable)}
          >
            {applicationName}
          </a>
        ) : (
          applicationName
        )}
      </Typography>
      <Typography typographyType="bodyMedium" as="span">
        {applicationDesc}
      </Typography>
      {(hasContextMenu || navigation !== null) && (
        <div className={styles['bar-separator']} />
      )}
      {navigation}
      {hasContextMenu && (
        <div
          className={cn(
            styles['context-menu-group'],
            !hasContextMenuLargeScreen &&
              styles['context-menu-group--small-screen-only'],
            !hasContextMenuLargeScreen &&
              hasSmallScreenBreakpoint &&
              styles[
                `context-menu-group--small-screen-only-${smallScreenBreakpoint}`
              ],
          )}
        >
          <OverflowMenuGroup>
            <Button
              icon={hasNavInContextMenu ? MenuIcon : MoreVerticalIcon}
              purpose="tertiary"
              aria-label="åpne meny"
            />
            <OverflowMenu className={styles['context-menu']}>
              {user && (
                <OverflowMenuList>
                  {user.href ? (
                    <OverflowMenuLink icon={PersonIcon} {...user} />
                  ) : (
                    <OverflowMenuSpan icon={PersonIcon} {...user} />
                  )}
                </OverflowMenuList>
              )}
              {hasNavInContextMenu && (
                <nav
                  aria-label="sidenavigasjon"
                  className={cn(
                    styles['nav--in-menu--small-screen'],
                    styles[
                      `nav--in-menu--small-screen-${smallScreenBreakpoint}`
                    ],
                  )}
                >
                  <OverflowMenuList>
                    {navItems.map(item => (
                      <OverflowMenuLink {...item} />
                    ))}
                  </OverflowMenuList>
                </nav>
              )}
              {hasNavInContextMenu && hasContextMenuElements && (
                <OverflowMenuDivider
                  className={cn(
                    styles['menu-divider'],
                    styles[
                      `menu-divider--small-screen-${smallScreenBreakpoint}`
                    ],
                  )}
                />
              )}
              {hasContextMenuElements && (
                <OverflowMenuList>
                  {contextMenuItems.map(item => {
                    return item.href ? (
                      <OverflowMenuLink {...(item as OverflowMenuLinkProps)} />
                    ) : (
                      <OverflowMenuButton
                        {...(item as OverflowMenuButtonProps)}
                      />
                    );
                  })}
                </OverflowMenuList>
              )}
            </OverflowMenu>
          </OverflowMenuGroup>
        </div>
      )}
    </div>
  );
};

InternalHeader.displayName = 'InternalHeader';
