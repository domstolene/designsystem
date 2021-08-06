import { forwardRef, HTMLAttributes, Children } from "react";
import styled from 'styled-components';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { breadcrumbTokens as tokens } from './breadcrumbTokens';
import { IconSize, IconWrapper } from '../../helpers/IconWrapper/IconWrapper';

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const ListItem = styled.li`
    align-items: center;
    display: flex;
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

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(({ smallScreen, children, ...rest }, ref) => {

    const breadcrumbIconSize = tokens.icon.size as IconSize;

    const childrenArray = Children.toArray(children);
    const breadcrumbChildren = smallScreen ?
    <ListItem>
        <IconWrapper Icon={BackIcon} iconSize={breadcrumbIconSize} />
        {childrenArray[childrenArray.length - 2]}
    </ListItem>
    :
    childrenArray.map((item, index) => {
        return (
            <ListItem key={`breadcrumb-${index}`}>
                {index !== 0 ? <IconWrapper Icon={BreadcrumbIcon} iconSize={breadcrumbIconSize} /> : ''}
                {item}
            </ListItem>
        )
    })

    return (
        <nav
            ref={ref}
            aria-label='breadcrumbs'
            {...rest}
        >
            <List>
                {breadcrumbChildren}
            </List>
        </nav>
    )
});