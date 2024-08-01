import { useRef, useState } from 'react';

import styles from './InternalHeader.module.css';
import { type InternalHeaderProps } from './InternalHeader.types';
import { NavigationItem } from './NavigationItem';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import { focusable } from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { MenuIcon, MoreVerticalIcon, PersonIcon } from '../Icon/icons';
import {
  OverflowMenu,
  OverflowMenuButton,
  type OverflowMenuButtonProps,
  OverflowMenuDivider,
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
  const hasSmallScreenBreakpoint = !!smallScreenBreakpoint;
  const hasNavInContextMenu = hasSmallScreenBreakpoint && hasNavigationElements;

  const navigation = hasNavigationElements ? (
    <nav aria-label="sidenavigasjon">
      <ul
        className={cn(
          styles['nav-list'],
          hasSmallScreenBreakpoint &&
            styles[`nav-list--small-screen-${smallScreenBreakpoint}`],
          utilStyles['remove-list-styling'],
        )}
      >
        {navigationElements.map((item, index) => {
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
      </ul>
    </nav>
  ) : null;

  const hasContextMenu =
    hasContextMenuElements || !!userProps || hasNavInContextMenu;
  const hasContextMenuLargeScreen = hasContextMenuElements || !!userProps;

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
      <Typography typographyType="bodySans02" bold as="span">
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
      <Typography typographyType="bodySans02" as="span">
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
          <Button
            ref={buttonRef}
            icon={hasNavInContextMenu ? MenuIcon : MoreVerticalIcon}
            purpose="tertiary"
            onClick={handleContextMenuClick}
            aria-haspopup="menu"
            aria-expanded={!contextMenuIsClosed ? true : undefined}
            aria-label="åpne meny"
          />
          <OverflowMenu
            isOpen={!contextMenuIsClosed}
            onClose={onOveflowMenuClose}
            anchorRef={buttonRef}
            className={styles['context-menu']}
          >
            {userProps && (
              <OverflowMenuList>
                {userProps.href ? (
                  <OverflowMenuLink icon={PersonIcon} href={userProps.href}>
                    {userProps.name}
                  </OverflowMenuLink>
                ) : (
                  <OverflowMenuSpan icon={PersonIcon}>
                    {userProps.name}
                  </OverflowMenuSpan>
                )}
              </OverflowMenuList>
            )}
            {hasNavInContextMenu && (
              <nav
                aria-label="sidenavigasjon"
                className={cn(
                  styles['nav--in-menu--small-screen'],
                  styles[`nav--in-menu--small-screen-${smallScreenBreakpoint}`],
                )}
              >
                <OverflowMenuList>
                  {navigationElements.map(item => (
                    <OverflowMenuLink {...item}>{item.title}</OverflowMenuLink>
                  ))}
                </OverflowMenuList>
              </nav>
            )}
            {hasNavInContextMenu && hasContextMenuElements && (
              <OverflowMenuDivider
                className={cn(
                  styles['menu-divider'],
                  styles[`menu-divider--small-screen-${smallScreenBreakpoint}`],
                )}
              />
            )}
            {hasContextMenuElements && (
              <OverflowMenuList>
                {contextMenuElements.map(item => {
                  const { title } = item;

                  return item.href ? (
                    <OverflowMenuLink {...(item as OverflowMenuLinkProps)}>
                      {title}
                    </OverflowMenuLink>
                  ) : (
                    <OverflowMenuButton {...(item as OverflowMenuButtonProps)}>
                      {title}
                    </OverflowMenuButton>
                  );
                })}
              </OverflowMenuList>
            )}
          </OverflowMenu>
        </div>
      )}
    </div>
  );
};

InternalHeader.displayName = 'InternalHeader';
