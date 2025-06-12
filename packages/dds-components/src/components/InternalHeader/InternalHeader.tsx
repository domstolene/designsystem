import { useState } from 'react';

import styles from './InternalHeader.module.css';
import { type InternalHeaderProps } from './InternalHeader.types';
import { NavigationItem } from './NavigationItem';
import { createTexts, useTranslation } from '../../i18n/translation';
import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import { StylelessList } from '../helpers';
import { focusable } from '../helpers/styling/focus.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { MenuIcon, MoreVerticalIcon, PersonIcon } from '../Icon/icons';
import { Box } from '../layout';
import { applyResponsiveStyle } from '../layout/common/utils';
import { ShowHide } from '../layout/ShowHide';
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

  const { t } = useTranslation();

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
    <nav aria-label={t(texts.siteNavigation)}>
      <ShowHide
        as={StylelessList}
        hideBelow={hasSmallScreenBreakpoint ? smallScreenBreakpoint : undefined}
        className={cn(styles['nav-list'])}
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
      </ShowHide>
    </nav>
  ) : null;

  const hasContextMenu =
    hasContextMenuElements || !!user || hasNavInContextMenu;
  const hasContextMenuLargeScreen = hasContextMenuElements || !!user;

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={applyResponsiveStyle('x1.5', smallScreenBreakpoint, 'x1')}
      paddingInline={applyResponsiveStyle(
        'x1.5',
        smallScreenBreakpoint,
        'x1 x0.5',
      )}
      {...getBaseHTMLProps(
        id,
        cn(className, styles.bar, !!navigation && styles['bar--with-nav']),
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
        <ShowHide
          showBelow={
            !hasContextMenuLargeScreen && hasSmallScreenBreakpoint
              ? smallScreenBreakpoint
              : undefined
          }
          className={cn(styles['context-menu-group'])}
        >
          <OverflowMenuGroup>
            <Button
              icon={hasNavInContextMenu ? MenuIcon : MoreVerticalIcon}
              purpose="tertiary"
              aria-label={t(texts.openMenu)}
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
                <ShowHide
                  as="nav"
                  aria-label={t(texts.siteNavigation)}
                  showBelow={smallScreenBreakpoint}
                >
                  <OverflowMenuList>
                    {navItems.map(item => (
                      <OverflowMenuLink {...item} />
                    ))}
                  </OverflowMenuList>
                </ShowHide>
              )}
              {hasNavInContextMenu && hasContextMenuElements && (
                <ShowHide
                  as={OverflowMenuDivider}
                  showBelow={smallScreenBreakpoint}
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
        </ShowHide>
      )}
    </Box>
  );
};

InternalHeader.displayName = 'InternalHeader';

const texts = createTexts({
  openMenu: {
    nb: 'Åpne meny',
    no: 'Åpne meny',
    nn: 'Opna meny',
    en: 'Open menu',
  },
  siteNavigation: {
    nb: 'Sidenavigasjon',
    no: 'Sidenavigasjon',
    nn: 'Sidenavigasjon',
    en: 'Site navigation',
  },
});
