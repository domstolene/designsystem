import { forwardRef, Children } from 'react';
import styled from 'styled-components';
import { breadcrumbTokens as tokens } from './Breadcrumb.tokens';
import { Icon } from '../Icon';
import { ChevronRightIcon, ArrowLeftIcon } from '../../icons/tsx';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { removeListStyling } from '../../helpers/styling/removeListStyling';

const { icon, list, listItem } = tokens;

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
  ${listItem.font}
`;

const StyledIcon = styled(Icon)`
  color: ${icon.color};
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
        <StyledIcon icon={ArrowLeftIcon} iconSize="small" />
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
