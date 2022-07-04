import { forwardRef, Children } from 'react';
import styled from 'styled-components';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { breadcrumbTokens as tokens } from './Breadcrumb.tokens';
import { IconSize, IconWrapper } from '../IconWrapper';
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

const BreadcrumbIcon = styled(ChevronRightOutlinedIcon)`
  ${tokens.icon.base}
`;
const BackIcon = styled(ArrowBackOutlinedIcon)`
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

    const breadcrumbIconSize = tokens.icon.size as IconSize;

    const childrenArray = Children.toArray(children);
    const breadcrumbChildren = smallScreen ? (
      <ListItem>
        <IconWrapper
          Icon={BackIcon}
          iconSize={breadcrumbIconSize}
          color={tokens.icon.base.color}
        />
        {childrenArray[childrenArray.length - 2]}
      </ListItem>
    ) : (
      childrenArray.map((item, index) => {
        return (
          <ListItem key={`breadcrumb-${index}`}>
            {index !== 0 ? (
              <IconWrapper
                Icon={BreadcrumbIcon}
                iconSize={breadcrumbIconSize}
                color={tokens.icon.base.color}
              />
            ) : (
              ''
            )}
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
