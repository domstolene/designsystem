import { Children, isValidElement } from 'react';

import styles from './Breadcrumbs.module.css';
import { createTexts, useTranslation } from '../../i18n';
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
import tgStyles from '../Typography/typographyStyles.module.css';

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
      iconSize="component"
      icon={ChevronRightIcon}
    />
  );
  const { t } = useTranslation();
  const childrenArray = Children.toArray(children);

  const responsiveLiProps: HStackProps<'li'> = {
    as: 'li',
    alignItems: 'center',
    gap: 'x0.5',
    padding: 'x0',
  };

  const bChildren = childrenArray.map((item, index) => {
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

  const bChildrenTruncated =
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

  const bChildrenSmallScreen = (
    <>
      <HStack {...responsiveLiProps}>{childrenArray[0]}</HStack>
      {bChildrenTruncated.length > 0 && (
        <HStack {...responsiveLiProps}>
          {chevronIcon}
          <OverflowMenuGroup>
            <Button
              size="xsmall"
              icon={MoreHorizontalIcon}
              purpose="tertiary"
              aria-label={
                bChildrenTruncated.length > 1
                  ? t(texts.showHiddenTo(bChildren.length - 1))
                  : t(texts.showHidden)
              }
            />
            <OverflowMenu>
              <OverflowMenuList>{bChildrenTruncated}</OverflowMenuList>
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
      {...getBaseHTMLProps(
        id,
        cn(className, tgStyles['body-short-medium']),
        htmlProps,
        rest,
      )}
      aria-label={t(texts.breadcrumbs)}
    >
      <HStack
        {...responsiveListProps}
        hideBelow={hasSmallScreenBreakpoint ? smallScreenBreakpoint : undefined}
      >
        {bChildren}
      </HStack>
      {hasSmallScreenBreakpoint && (
        <HStack {...responsiveListProps} showBelow={smallScreenBreakpoint}>
          {bChildrenSmallScreen}
        </HStack>
      )}
    </nav>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';

const texts = createTexts({
  breadcrumbs: {
    nb: 'Brødsmulesti',
    no: 'Brødsmulesti',
    nn: 'Brødsmulesti',
    en: 'Breadcrumbs',
    se: 'Láibemoallobálggis',
  },
  showHiddenTo: to => ({
    nb: `Vis brødsmule 2 til ${to}`,
    no: `Vis brødsmule 2 til ${to}`,
    nn: `Vis brødsmule 2 til ${to}`,
    en: `Show breadcrumb 2 to ${to}`,
    se: `Čájet láibemoalu 2 ${to}`,
  }),
  showHidden: {
    nb: 'Vis brødsmule 2',
    no: 'Vis brødsmule 2',
    nn: 'Vis brødsmule 2',
    en: 'Show breadcrumb 2',
    se: 'Čájet láibemoalu 2',
  },
});
