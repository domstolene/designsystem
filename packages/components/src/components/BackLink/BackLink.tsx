import { forwardRef } from 'react';
import styled from 'styled-components';

import { backLinkTokens } from './BackLink.tokens';
import { Icon } from '../Icon';
import * as icons from '../Icon/icons';
import { Link } from '../Typography';

const StyledLink = styled(Link)`
  align-items: center;
  display: flex;
  gap: ${backLinkTokens.link.gap};
`;

export interface BackLinkProps {
  /**
   * Ledetekst.
   */
  label: string;
  /**
   * URL til forrige nivå.
   */
  href: string;
}

export const BackLink = forwardRef<HTMLElement, BackLinkProps>((props, ref) => {
  return (
    <nav ref={ref} aria-label="gå tilbake">
      <StyledLink href={props.href}>
        <Icon icon={icons.ArrowLeftIcon} iconSize="small" />
        {props.label}
      </StyledLink>
    </nav>
  );
});

BackLink.displayName = 'BackLink';
