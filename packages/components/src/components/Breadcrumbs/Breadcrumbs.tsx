import { Children, forwardRef, isValidElement } from 'react';

import styles from './Breadcrumbs.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { Icon } from '../Icon';
import { ChevronRightIcon, MoreHorizontalIcon } from '../Icon/icons';
import {
  OverflowMenu,
  OverflowMenuGroup,
  OverflowMenuLink,
  OverflowMenuList,
} from '../OverflowMenu';

export type BreadcrumbsProps = BaseComponentPropsWithChildren<
  HTMLElement,
  {
    /**
     * Om variant for mindre skjerm skal vises.
     * Trunkerer barn unntatt første og siste; trunkerte barn er tigjengelige ved å trykke på trukeringsknappen.
     */
    smallScreen?: boolean;
  }
>;

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  (props, ref) => {
    const { children, smallScreen, id, className, htmlProps, ...rest } = props;

    const chevronIcon = (
      <Icon
        className={cn(styles.icon)}
        iconSize="inherit"
        icon={ChevronRightIcon}
      />
    );

    const childrenArray = Children.toArray(children);
    const listItemCn = cn(
      styles['list-item'],
      !smallScreen && styles[`list-item--large-screen`],
    );

    const breadcrumbChildren = childrenArray.map((item, index) => {
      return (
        <li key={`breadcrumb-${index}`} className={listItemCn}>
          {index !== 0 && chevronIcon}
          {item}
        </li>
      );
    });

    const breadcrumbChildrenTruncated =
      childrenArray.length > 2
        ? childrenArray.slice(1, childrenArray.length - 1).map(item => {
            if (isValidElement(item)) {
              return (
                <OverflowMenuLink href={item.props.href}>
                  {item.props.children}
                </OverflowMenuLink>
              );
            }
          })
        : [];

    const breadcrumbChildrenSmallScreen = (
      <>
        <li className={listItemCn}>{childrenArray[0]}</li>
        {breadcrumbChildrenTruncated.length > 0 && (
          <li className={listItemCn}>
            {chevronIcon}
            <OverflowMenuGroup>
              <Button
                size="tiny"
                icon={MoreHorizontalIcon}
                purpose="tertiary"
                aria-label={`Vis brødsmulesti brødsmule 2 ${breadcrumbChildrenTruncated.length > 1 && `til ${breadcrumbChildren.length - 1}`}`}
              />
              <OverflowMenu>
                <OverflowMenuList>
                  {breadcrumbChildrenTruncated}
                </OverflowMenuList>
              </OverflowMenu>
            </OverflowMenuGroup>
          </li>
        )}
        <li className={listItemCn}>
          {chevronIcon}
          {childrenArray[childrenArray.length - 1]}
        </li>
      </>
    );

    return (
      <nav
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
        ref={ref}
        aria-label="brødsmulesti"
      >
        <ul className={cn(styles.list, utilStyles['remove-list-styling'])}>
          {smallScreen ? breadcrumbChildrenSmallScreen : breadcrumbChildren}
        </ul>
      </nav>
    );
  },
);

Breadcrumbs.displayName = 'Breadcrumbs';
