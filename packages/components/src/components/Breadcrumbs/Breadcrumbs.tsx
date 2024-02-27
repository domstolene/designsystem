import { Children, forwardRef, isValidElement } from 'react';
import styled from 'styled-components';

import { breadcrumbTokens, typographyType } from './Breadcrumb.tokens';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { Button } from '../Button';
import { removeListStyling } from '../helpers';
import { Icon } from '../Icon';
import { ChevronRightIcon, MoreHorizontalIcon } from '../Icon/icons';
import { OverflowMenu, OverflowMenuGroup } from '../OverflowMenu';
import { type OverflowMenuItemProps } from '../OverflowMenu/OverflowMenuItem';
import { getFontStyling } from '../Typography';

const { icon, list, listItem } = breadcrumbTokens;

const List = styled.ol`
  ${removeListStyling}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${list.gap};
`;
List.displayName = 'List';

type ListItemProps = Pick<BreadcrumbsProps, 'smallScreen'>;

const ListItem = styled.li.withConfig({
  shouldForwardProp: prop => prop !== 'smallScreen',
})<ListItemProps>`
  align-items: center;
  display: flex;
  gap: ${listItem.gap};
  ${getFontStyling(typographyType)}
  padding: ${({ smallScreen }) =>
    smallScreen ? '0' : listItem.notSmallScreen.padding};
`;
ListItem.displayName = 'ListItem';

const StyledIcon = styled(Icon)`
  color: ${icon.color};
`;

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
      <StyledIcon iconSize="inherit" icon={ChevronRightIcon} />
    );

    const childrenArray = Children.toArray(children);

    const breadcrumbChildren = childrenArray.map((item, index) => {
      return (
        <ListItem key={`breadcrumb-${index}`} smallScreen={smallScreen}>
          {index !== 0 && chevronIcon}
          {item}
        </ListItem>
      );
    });

    const breadcrumbChildrenTruncated: Array<OverflowMenuItemProps> =
      childrenArray.length > 2
        ? (childrenArray
            .slice(1, childrenArray.length - 1)
            .map(item => {
              if (isValidElement(item))
                return {
                  title: item.props.children as string,
                  href: item.props.href as string,
                };
            })
            .filter(item => item) as Array<OverflowMenuItemProps>)
        : [];

    const breadcrumbChildrenSmallScreen = (
      <>
        <ListItem smallScreen={smallScreen}>{childrenArray[0]}</ListItem>
        {breadcrumbChildrenTruncated.length > 0 && (
          <ListItem smallScreen={smallScreen}>
            {chevronIcon}
            <OverflowMenuGroup>
              <Button
                size="tiny"
                icon={MoreHorizontalIcon}
                appearance="borderless"
                aria-label={`Vis brødsmulesti brødsmule 2 ${breadcrumbChildrenTruncated.length > 1 && `til ${breadcrumbChildren.length - 1}`}`}
              />
              <OverflowMenu items={breadcrumbChildrenTruncated}></OverflowMenu>
            </OverflowMenuGroup>
          </ListItem>
        )}
        <ListItem smallScreen={smallScreen}>
          {chevronIcon}
          {childrenArray[childrenArray.length - 1]}
        </ListItem>
      </>
    );

    return (
      <nav
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
        ref={ref}
        aria-label="brødsmulesti"
      >
        <List>
          {smallScreen ? breadcrumbChildrenSmallScreen : breadcrumbChildren}
        </List>
      </nav>
    );
  },
);

Breadcrumbs.displayName = 'Breadcrumbs';
