import { Children, isValidElement } from 'react';

import styles from './Breadcrumbs.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import { StylelessList } from '../helpers';
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
import { type Breakpoint, HStack, type HStackProps } from '../layout';

export type BreadcrumbsProps = BaseComponentPropsWithChildren<
  HTMLElement,
  {
    /**
     * Spesifiserer ved hvilket brekkpunkt og nedover versjonen for små skjermer skal vises.
     * Trunkerer barn unntatt første og siste; trunkerte barn er tilgjengelige ved å trykke på trunkeringsknappen.
     */
    smallScreenBreakpoint?: Breakpoint;
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

  const responsiveLiProps: HStackProps<'li'> = {
    as: 'li',
    alignItems: 'center',
    gap: 'x0.5',
    padding: 'x0',
  };

  const breadcrumbChildren = childrenArray.map((item, index) => {
    return (
      <HStack
        key={`breadcrumb-${index}`}
        {...responsiveLiProps}
        padding="x0.125 0"
      >
        {index !== 0 && chevronIcon}
        {item}
      </HStack>
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
      <HStack {...responsiveLiProps}>{childrenArray[0]}</HStack>
      {breadcrumbChildrenTruncated.length > 0 && (
        <HStack {...responsiveLiProps}>
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
        </HStack>
      )}
      <HStack {...responsiveLiProps}>
        {chevronIcon}
        {childrenArray[childrenArray.length - 1]}
      </HStack>
    </>
  );

  const hasSmallScreenBreakpoint = !!smallScreenBreakpoint;

  const responsiveListProps: HStackProps<typeof StylelessList> = {
    as: StylelessList,
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 'x0.5',
  };
  return (
    <nav
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      aria-label="brødsmulesti"
    >
      <HStack
        {...responsiveListProps}
        hideBelow={hasSmallScreenBreakpoint ? smallScreenBreakpoint : undefined}
      >
        {breadcrumbChildren}
      </HStack>
      {hasSmallScreenBreakpoint && (
        <HStack {...responsiveListProps} showBelow={smallScreenBreakpoint}>
          {breadcrumbChildrenSmallScreen}
        </HStack>
      )}
    </nav>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';
