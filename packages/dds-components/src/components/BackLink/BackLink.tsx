import { type ComponentPropsWithRef, type ElementType } from 'react';

import styles from './BackLink.module.css';
import { createTexts, useTranslation } from '../../i18n';
import { ElementAs } from '../../polymorphic';
import { cn } from '../../utils';
import { focusable } from '../helpers/styling/focus.module.css';
import { Icon } from '../Icon';
import { ArrowLeftIcon } from '../Icon/icons';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type BackLinkProps = {
  /**
   * Ledetekst.
   */
  label: string;
  /**
   * Custom HTML- eller React-element som returneres. Brukes ved klient-side ruting o.l.
   */
  as?: ElementType;
} & Pick<ComponentPropsWithRef<'a'>, 'onClick' | 'href' | 'ref'>;

export const BackLink = ({ label, ref, as = 'a', ...rest }: BackLinkProps) => {
  const { t } = useTranslation();
  return (
    <nav ref={ref} aria-label={t(texts.goBack)}>
      <ElementAs
        as={as}
        className={cn(typographyStyles.a, focusable)}
        rel="noopener noreferer"
        {...rest}
      >
        <Icon
          icon={ArrowLeftIcon}
          iconSize="inherit"
          className={cn(typographyStyles.a__icon, styles.icon)}
        />
        {label}
      </ElementAs>
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
    se: 'Mana ruovttoluotta',
  },
});
