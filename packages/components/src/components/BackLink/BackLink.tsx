import { forwardRef } from 'react';

import styles from './BackLink.module.css';
import { Icon } from '../Icon';
import * as icons from '../Icon/icons';
import { Link } from '../Typography';

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
      <Link href={props.href} className={styles.link}>
        <Icon icon={icons.ArrowLeftIcon} iconSize="small" />
        {props.label}
      </Link>
    </nav>
  );
});

BackLink.displayName = 'BackLink';
