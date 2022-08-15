import { forwardRef, Children } from 'react';
import styled from 'styled-components';
import { breadcrumbTokens as tokens } from './Breadcrumb.tokens';
import { Icon } from '../Icon';
import { ChevronRightIcon, ArrowLeftIcon } from '../../icons/tsx';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';

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

export type BreadcrumbsProps = BaseComponentPropsWithChildren<
  HTMLElement,
  {
    /** Spesifiserer om versjonen for små skjermer skal vises; den viser `<Breadcrumb />` kun til den forrige siden.  */
    smallScreen?: boolean;
  }
>;

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  (props, ref) => {
    const { smallScreen, children, id, className, htmlProps, ...rest } = props;

    const childrenArray = Children.toArray(children);

    const breadcrumbChildren = smallScreen ? (
      <ListItem>
        <StyledIcon icon={ArrowLeftIcon} />
        {childrenArray[childrenArray.length - 2]}
      </ListItem>
    ) : (
      childrenArray.map((item, index) => {
        return (
          <ListItem key={`breadcrumb-${index}`}>
            {index !== 0 && <StyledIcon icon={ChevronRightIcon} />}
            {item}
          </ListItem>
        );
      })
    );

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
