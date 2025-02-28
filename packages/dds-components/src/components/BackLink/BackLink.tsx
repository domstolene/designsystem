import { type ComponentPropsWithRef } from 'react';

import styles from './BackLink.module.css';
import { Icon } from '../Icon';
import * as icons from '../Icon/icons';
import { Link } from '../Typography';

export type BackLinkProps = {
  /**
   * Ledetekst.
   */
  label: string;
} & Pick<ComponentPropsWithRef<'a'>, 'onClick' | 'href' | 'ref'>;

export const BackLink = ({ label, ref, ...rest }: BackLinkProps) => {
  return (
    <nav ref={ref} aria-label="Gå tilbake">
      <Link {...rest}>
        <Icon
          icon={icons.ArrowLeftIcon}
          iconSize="inherit"
          className={styles.icon}
        />
        {label}
      </Link>
    </nav>
  );
};

BackLink.displayName = 'BackLink';
