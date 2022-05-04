import { forwardRef, HTMLAttributes, Children } from 'react';
import styled from 'styled-components';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { breadcrumbTokens as tokens } from './Breadcrumb.tokens';
import { IconSize, IconWrapper } from '../../helpers/IconWrapper/IconWrapper';

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

export type BreadcrumbsProps = {
  smallScreen?: boolean;
} & HTMLAttributes<HTMLElement>;

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ smallScreen, children, ...rest }, ref) => {
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
      <nav ref={ref} aria-label="brødsmulesti" {...rest}>
        <List>{breadcrumbChildren}</List>
      </nav>
    );
  }
);
