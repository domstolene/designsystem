import { Children, isValidElement } from 'react';

import styles from './Breadcrumbs.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import { type ScreenSizeLiteral, StylelessList } from '../helpers';
import { Icon } from '../Icon';
import { ChevronRightIcon, MoreHorizontalIcon } from '../Icon/icons';
import {
  OverflowMenu,
  OverflowMenuGroup,
  OverflowMenuLink,
  OverflowMenuList,
  OverflowMenuSpan,
} from '../OverflowMenu';
import { type BreadcrumbProps, isAnchorTypographyProps } from './Breadcrumb';

export type BreadcrumbsProps = BaseComponentPropsWithChildren<
  HTMLElement,
  {
    /**
     * Spesifiserer ved hvilket brekkpunkt og nedover versjonen for små skjermer skal vises.
     * Trunkerer barn unntatt første og siste; trunkerte barn er tilgjengelige ved å trykke på trunkeringsknappen.
     */
    smallScreenBreakpoint?: ScreenSizeLiteral;
  }
>;

export const Breadcrumbs = ({
  children,
  smallScreenBreakpoint,
  id,
  className,
  htmlProps,
  ...rest
}: BreadcrumbsProps) => {
  const chevronIcon = (
    <Icon
      className={cn(styles.icon)}
      iconSize="inherit"
      icon={ChevronRightIcon}
    />
  );

  const childrenArray = Children.toArray(children);

  const breadcrumbChildren = childrenArray.map((item, index) => {
    return (
      <li
        key={`breadcrumb-${index}`}
        className={cn(styles['list-item'], styles[`list-item--large-screen`])}
      >
        {index !== 0 && chevronIcon}
        {item}
      </li>
    );
  });

  const breadcrumbChildrenTruncated =
    childrenArray.length > 2
      ? childrenArray.slice(1, childrenArray.length - 1).map((item, index) => {
          if (isValidElement<BreadcrumbProps>(item)) {
            if (isAnchorTypographyProps(item.props)) {
              return (
                <OverflowMenuLink key={index} href={item.props.href}>
                  {item.props.children}
                </OverflowMenuLink>
              );
            } else
              return (
                <OverflowMenuSpan key={index}>
                  {item.props.children}
                </OverflowMenuSpan>
              );
          }
        })
      : [];

  const breadcrumbChildrenSmallScreen = (
    <>
      <li className={styles['list-item']}>{childrenArray[0]}</li>
      {breadcrumbChildrenTruncated.length > 0 && (
        <li className={styles['list-item']}>
          {chevronIcon}
          <OverflowMenuGroup>
            <Button
              size="xsmall"
              icon={MoreHorizontalIcon}
              purpose="tertiary"
              aria-label={`Vis brødsmulesti brødsmule 2 ${breadcrumbChildrenTruncated.length > 1 && `til ${breadcrumbChildren.length - 1}`}`}
            />
            <OverflowMenu>
              <OverflowMenuList>{breadcrumbChildrenTruncated}</OverflowMenuList>
            </OverflowMenu>
          </OverflowMenuGroup>
        </li>
      )}
      <li className={styles['list-item']}>
        {chevronIcon}
        {childrenArray[childrenArray.length - 1]}
      </li>
    </>
  );

  const hasSmallScreenBreakpoint = !!smallScreenBreakpoint;

  return (
    <nav
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      aria-label="brødsmulesti"
    >
      <StylelessList
        className={cn(
          styles.list,
          hasSmallScreenBreakpoint &&
            styles[`list--large-screen-hide-${smallScreenBreakpoint}`],
        )}
      >
        {breadcrumbChildren}
      </StylelessList>
      {hasSmallScreenBreakpoint && (
        <StylelessList
          className={cn(
            styles.list,
            styles['list--small-screen'],
            styles[`list--small-screen-show-${smallScreenBreakpoint}`],
          )}
        >
          {breadcrumbChildrenSmallScreen}
        </StylelessList>
      )}
    </nav>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';
