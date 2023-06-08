import { forwardRef } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { ArrowLeftIcon } from '../../icons/tsx';
import { Typography } from '../Typography';
import { backLinkTokens } from './BackLink.tokens';

const Nav = styled('nav')`
  align-items: center;
  display: flex;
  gap: ${backLinkTokens.nav.gap};
`;

const StyledIcon = styled(Icon)`
  color: ${backLinkTokens.icon.color};
`;

export type BackLinkProps = {
  label: string;
  href: string;
};

export const BackLink = forwardRef<HTMLElement, BackLinkProps>((props, ref) => {
  return (
    <Nav ref={ref}>
      <StyledIcon icon={ArrowLeftIcon} iconSize="small" />
      <Typography typographyType="a" href={props.href}>
        {props.label}
      </Typography>
    </Nav>
  );
});

BackLink.displayName = 'BackLink';
