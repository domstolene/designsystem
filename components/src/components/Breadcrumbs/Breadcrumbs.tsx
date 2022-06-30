import { forwardRef, HTMLAttributes, Children } from 'react';
import styled from 'styled-components';
import { breadcrumbTokens as tokens } from './Breadcrumb.tokens';
import { Icon } from '../Icon';

const List = styled.ol`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const ListItem = styled.li`
  align-items: center;
  display: flex;
  ${tokens.breadcrumb.base}
`;

const StyledIcon = styled(Icon).attrs(
  ({ iconSize = tokens.icon.size, color = tokens.icon.base.color }) => ({
    iconSize,
    color
  })
)`
  ${tokens.icon.base}
`;
export type BreadcrumbsProps = {
  /** Spesifiserer om versjonen for små skjermer skal vises; den viser `<Breadcrumb />` kun til den forrige siden.  */
  smallScreen?: boolean;
} & HTMLAttributes<HTMLElement>;

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ smallScreen, children, ...rest }, ref) => {
    const childrenArray = Children.toArray(children);

    const breadcrumbChildren = smallScreen ? (
      <ListItem>
        <StyledIcon iconName="arrowLeft" />
        {childrenArray[childrenArray.length - 2]}
      </ListItem>
    ) : (
      childrenArray.map((item, index) => {
        return (
          <ListItem key={`breadcrumb-${index}`}>
            {index !== 0 && <StyledIcon iconName="chevronRight" />}
            {item}
          </ListItem>
        );
      })
    );

    return (
      <nav ref={ref} aria-label="brødsmulesti" {...rest}>
        <List>{breadcrumbChildren}</List>
      </nav>
    );
  }
);
