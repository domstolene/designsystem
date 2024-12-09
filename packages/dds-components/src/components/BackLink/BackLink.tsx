import { type ComponentProps, forwardRef } from 'react';

import styles from './BackLink.module.css';
import { Icon } from '../Icon';
import * as icons from '../Icon/icons';
import { Link } from '../Typography';

export type BackLinkProps = {
  /**
   * Ledetekst.
   */
  label: string;
} & Pick<ComponentProps<'a'>, 'onClick' | 'href'>;

export const BackLink = forwardRef<HTMLElement, BackLinkProps>(
  ({ label, ...props }, ref) => {
    return (
      <nav ref={ref} aria-label="Gå tilbake">
        <Link {...props}>
          <Icon
            icon={icons.ArrowLeftIcon}
            iconSize="inherit"
            className={styles.icon}
          />
          {label}
        </Link>
      </nav>
    );
  },
);

BackLink.displayName = 'BackLink';
