import { forwardRef, Children } from 'react';
import styled from 'styled-components';
import { breadcrumbTokens, typographyType } from './Breadcrumb.tokens';
import { Icon } from '../Icon';
import { ChevronRightIcon } from '../../icons/tsx';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { removeListStyling } from '../../helpers/styling/removeListStyling';
import { getFontStyling } from '../Typography/Typography.utils';

const { icon, list, listItem } = breadcrumbTokens;

const List = styled.ol`
  ${removeListStyling}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${list.gap};
`;

const ListItem = styled.li`
  align-items: center;
  display: flex;
  gap: ${listItem.gap};
  ${getFontStyling(typographyType)}
`;

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
  }
);
