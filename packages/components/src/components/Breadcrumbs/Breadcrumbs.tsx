import { Children, forwardRef } from 'react';
import styled from 'styled-components';

import { breadcrumbTokens, typographyType } from './Breadcrumb.tokens';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { removeListStyling } from '../helpers';
import { Icon } from '../Icon';
import { ChevronRightIcon } from '../Icon/icons';
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

const ListItem = styled.li`
  align-items: center;
  display: flex;
  gap: ${listItem.gap};
  ${getFontStyling(typographyType)}
`;
ListItem.displayName = 'ListItem';

const StyledIcon = styled(Icon)`
  color: ${icon.color};
`;

export type BreadcrumbsProps = BaseComponentPropsWithChildren<HTMLElement>;

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  (props, ref) => {
    const { children, id, className, htmlProps, ...rest } = props;

    const childrenArray = Children.toArray(children);

    const breadcrumbChildren = childrenArray.map((item, index) => {
      return (
        <ListItem key={`breadcrumb-${index}`}>
          {index !== 0 && <StyledIcon icon={ChevronRightIcon} />}
          {item}
        </ListItem>
      );
    });

    return (
      <nav
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
        ref={ref}
        aria-label="brødsmulesti"
      >
        <List>{breadcrumbChildren}</List>
      </nav>
    );
  },
);

Breadcrumbs.displayName = 'Breadcrumbs';
