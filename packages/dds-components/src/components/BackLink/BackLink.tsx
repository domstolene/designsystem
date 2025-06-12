import { type ComponentPropsWithRef } from 'react';

import styles from './BackLink.module.css';
import { createTexts, useTranslation } from '../../i18n';
import { Icon } from '../Icon';
import { ArrowLeftIcon } from '../Icon/icons';
import { Link } from '../Typography';

export type BackLinkProps = {
  /**
   * Ledetekst.
   */
  label: string;
} & Pick<ComponentPropsWithRef<'a'>, 'onClick' | 'href' | 'ref'>;

export const BackLink = ({ label, ref, ...rest }: BackLinkProps) => {
  const { t } = useTranslation();
  return (
    <nav ref={ref} aria-label={t(texts.goBack)}>
      <Link {...rest}>
        <Icon icon={ArrowLeftIcon} iconSize="inherit" className={styles.icon} />
        {label}
      </Link>
    </nav>
  );
};

BackLink.displayName = 'BackLink';

const texts = createTexts({
  goBack: {
    nb: 'Gå tilbake',
    no: 'Gå tilbake',
    nn: 'Gå tilbake',
    en: 'Go back',
  },
});
