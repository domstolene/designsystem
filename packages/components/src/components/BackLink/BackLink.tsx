import { forwardRef } from 'react';
import styled from 'styled-components';
import { backLinkTokens } from './BackLink.tokens';
import { Typography } from '../Typography';
import { icons } from '../..';
import { Icon } from '../Icon';

const Nav = styled('nav')`
  align-items: center;
  display: flex;
  gap: ${backLinkTokens.nav.gap};
`;

const StyledIcon = styled(Icon)`
  color: ${backLinkTokens.icon.color};
`;

export interface BackLinkProps {
  label: string;
  href: string;
}

export const BackLink = forwardRef<HTMLElement, BackLinkProps>((props, ref) => {
  return (
    <Nav ref={ref}>
      <StyledIcon icon={icons.ArrowLeftIcon} iconSize="small" />
      <Typography typographyType="a" href={props.href}>
        {props.label}
      </Typography>
    </Nav>
  );
});

BackLink.displayName = 'BackLink';
